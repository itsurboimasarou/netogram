import {CommentModel} from "../../models/comment.model";

export interface CommentState {
    comments: CommentModel[];
    commentsCount: number;
    loading: boolean;
    error: string;
}
