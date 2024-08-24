import {createAction, props} from "@ngrx/store";
import {CommentState} from "./comment.state";

export const getComments = createAction('[Comment] Get Comments', props<{ postId: number }>());
export const getCommentsSuccess = createAction('[Comment] Get Comments Success', props<{ comments: CommentState[] }>());
export const getCommentsFailure = createAction('[Comment] Get Comments Failure');

