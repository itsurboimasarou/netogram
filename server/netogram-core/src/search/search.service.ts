import { Injectable } from '@nestjs/common';
import {Client} from '@elastic/elasticsearch';
import { Post } from "../post/entities/post.entity";
import { IdgenService } from "../utils/idgen/idgen.service";
import { Profile } from "../profile/entities/profile.entity";

@Injectable()
export class SearchService {
  private readonly esClient: Client;

  constructor(private idgenService: IdgenService) {
    this.esClient = new Client({
      node: 'https://97d9a40970c4401dabfc0653ce2d526a.asia-southeast1.gcp.elastic-cloud.com:443',
      auth: {
        apiKey: "N2dBT1hKRUJKQnlacDY0UXNIeDQ6cnhBN25RY1BSRy1zV2ppNFJxc3I2UQ==",
        username: "elastic",
        password: "NIYdXqHVOSaOry0THa9eFrBZ"
      }
    });

    console.log("esClient",this.esClient);
  }

  async indexProfile(profile: Profile) {
    await this.esClient.index({
      index: 'profiles',
      id: profile.uid,
      document: {
        uid: profile.uid,
        username: profile.userName,
        email: profile.email,
      }
    });
  }

  async searchProfiles(query: string) {
    // search for profiles by username or email or uid
    const response = await this.esClient.search({
      index: 'profiles',
      query: {
        multi_match: {
          query: query,
          fields: ['username', 'email', 'uid'],
        },
      }
    });
    return response.hits.hits;
  }

  async indexPost(post: Post) {

    // get all hashtags in the post's content
    const hashtags = post.content.match(/#\w+/g) || [];
    // lowercase all hashtags
    const lowercasedHashtags = hashtags.map((tag) => tag.toLowerCase());
    // remove duplicates
    const uniqueHashtags = Array.from(new Set(lowercasedHashtags));
    // index
    for(let tag of uniqueHashtags) {
      await this.esClient.index({
        index: 'hashtags',
        id: this.idgenService.generateId(),
        document: {
          id: post.id,
          uid: post.uid,
          content: post.content,
          createdAt: post.createdAt,
          hashtag: tag,
        }
      });
    }

    await this.esClient.index({
      index: 'posts',
      id: post.id.toString(),
      document: {
        uid: post.uid,
        content: post.content,
        createdAt: post.createdAt,
      },
    });
  }

  async updatePost(post: Post) {
    // delete first
    await this.deletePost(post.id);
    // index
    await this.indexPost(post);
  }

  async searchPosts(query: string) {
    const response = await this.esClient.search({
      index: 'posts',
      query: {
        multi_match: {
          query: query,
          fields: ['*'],
        }
      }
    });
    return response.hits.hits;
  }

  async searchUserPosts(query: string) {
    const response = await this.esClient.search({
      index: 'profiles',
      query: {
        multi_match: {
          query: query,
          fields: ['*'],
        },
      },
    });
    return response.hits.hits;
  }

  async searchHashtags(query: string) {
    const response = await this.esClient.search({
      index: 'hashtags',
      query: {
        match: {
          hashtag: query,
        },
      }
    });
    return response.hits.hits;
  }

  async deletePost(postId: number) {
    // delete post from hashtags index
    // get post first
    const post = await this.esClient.get({
      index: 'posts',
      id: postId.toString(),
    });
    // get all hashtags in the post's content
    const hashtags = (post._source as any).content.match(/#\w+/g) || [];
    // lowercase all hashtags
    const lowercasedHashtags = hashtags.map((tag) => tag.toLowerCase());
    // remove duplicates
    const uniqueHashtags = Array.from(new Set(lowercasedHashtags));

    for(let tag of uniqueHashtags) {
      await this.esClient.deleteByQuery({
        index: 'hashtags',
        query: {
          match: {
            id: postId,
            hashtag: tag.toString(),
          },
        },
      });
    }

    await this.esClient.delete({
      index: 'posts',
      id: postId.toString(),
    });
  }

  async searchAny( indexName: string, query: string) {
    const response = await this.esClient.search({
      index: [indexName],
      query: {
        multi_match: {
          query: query,
          fields: ['*'],
        },
      },
    });
    return response.hits.hits.map((hit)=>hit['_source']);
  }

}

