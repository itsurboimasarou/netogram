import { Injectable } from '@angular/core';
import {HttpClientAuth} from "../../util/http-client-auth";
import {PostModel} from "../../models/post.model";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClientAuth) { }

  createPost(post: PostModel) {
    console.log('post', post);
    const formData = new FormData();
    formData.append('content', post.content);
    formData.append('uid', post.uid);
    post.imageUrl.forEach((image,) => {
      formData.append("imageUrl", image);
    });
    formData.append('id',post.id.toString());
    console.log('formData', formData);

    return this.httpClient.post('post', formData);
  }
}
