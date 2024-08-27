import {CommentModel} from "../../models/comment.model";

export interface CommentState {
    comments: CommentModel[] | null;
    isGetCommentsLoading: boolean;
    isGetCommentsSuccess: boolean;
    errorGetComments: string;

    loading: boolean;
    isCreateCommentSuccess: boolean;
    error: string;

    commentsCount: number;
    isLoadCommentsCount: boolean;
    errorCommentsCount: string;
    isSuccessCommentCount: boolean;
}
