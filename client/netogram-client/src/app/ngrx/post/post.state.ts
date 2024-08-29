import { PostModel, PostResponse } from '../../models/post.model';
import { HttpErrorResponseModel } from '../../models/http-error-response.model';

export interface PostState {
  posts: PostResponse;
  postDetail: PostModel;
  minePosts: PostResponse;

  isCreating: boolean;
  isCreateSuccess: boolean;
  createErrorMessage: HttpErrorResponseModel;

  isUpdating: boolean;
  isUpdateSuccess: boolean;
  updateErrorMessage: HttpErrorResponseModel;

  isGettingMinePost: boolean;
  isGetMinePostSuccess: boolean;
  isGetMinePostFailure: boolean;
  getErrorMessage: HttpErrorResponseModel;

  isGettingPostDetail: boolean;
  isGetPostDetailSuccess: boolean;
  getErrorMessageById: HttpErrorResponseModel;

  isGettingAllPosts: boolean;
  isGetAllPostsSuccess: boolean;
  isGetAllPostsFailure: boolean;

  isDeleting: boolean;
  isDeleteSuccess: boolean;
  deleteErrorMessage: HttpErrorResponseModel;
}
