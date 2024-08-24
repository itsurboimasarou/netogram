import {CommentState} from "./comment.state";
import {createReducer, on} from "@ngrx/store";
import * as CommentActions from "./comment.actions";

const initalState: CommentState = {
    comments: [],
    commentsCount: 0,
    loading: false,
    error: ''
}

export const commentReducer = createReducer(
    initalState,
    on(CommentActions.getComments, (state, action) => {
        return <CommentState>{
            ...state,
            loading: true
        }
    }),
    on(CommentActions.getCommentsSuccess, (state, action) => {

        return <CommentState>{
            ...state,
            loading: false,
            comments: action.comments,
            commentsCount: action.comments.length
        }
    }),
    on(CommentActions.getCommentsFailure, (state, action) => {
        return <CommentState>{
            ...state,
            loading: false,
            error: 'Error loading comments'
        }
    }),

    on(CommentActions.createComment, (state, action) => {
        return <CommentState>{
            ...state,
            loading: true
        }
    }),
    on(CommentActions.createCommentSuccess, (state, action) => {
        return <CommentState>{
            ...state,
            loading: false
        }
    }),
    on(CommentActions.createCommentFailure, (state, action) => {
        return <CommentState>{
            ...state,
            loading: false,
            error: 'Error creating comment'
        }
    })


)
