import {LikepostModel} from "../../models/likepost.model";

export interface LikepostState{
  likePost: LikepostModel;
  isLoading: boolean;
  error: string;
  success: boolean;

  likeCount: number;
  likeCountError: string;
  likeCountLoading: boolean;
  likeCountSuccess: boolean;

  isLiked: boolean;
  isLikedError: string;
  isLikedLoading: boolean;
  isLikedSuccess: boolean;

  isUnLikedSuccess: boolean;
  isUnLikedError: string;
  isUnLikedLoading: boolean;
}
