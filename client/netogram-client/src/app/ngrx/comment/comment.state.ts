import {CommentModel} from "../../models/comment.model";

export interface CommentState {
    comments: CommentModel[] | null;
    commentsCount: number;
    loading: boolean;
    error: string;
}
