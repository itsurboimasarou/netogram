import { ProfileModel } from './profile.model';
import { PostModel } from './post.model';

export interface CommonSearchResultModel {
  profiles: ProfileModel[];
  posts: PostModel[];
}
