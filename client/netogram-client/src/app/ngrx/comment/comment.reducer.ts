import {CommentState} from "./comment.state";
import {createReducer} from "@ngrx/store";

const initalState: CommentState = {
    comments: [],
    commentsCount: 0,
    loading: false,
    error: ''
}

const commentReducer = createReducer(
    initalState
)
