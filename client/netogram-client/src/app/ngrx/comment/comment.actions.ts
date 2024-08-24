import {createAction, props} from "@ngrx/store";
import {CommentModel} from "../../models/comment.model";

export const getComments = createAction('[Comment] Get Comments', props<{ postId: number }>());
export const getCommentsSuccess = createAction('[Comment] Get Comments Success', props<{ comments: CommentModel[] }>());
export const getCommentsFailure = createAction('[Comment] Get Comments Failure');

