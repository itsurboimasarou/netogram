import {IsNotEmpty, IsString} from "class-validator";

export class CreateCommentDto {
    @IsNotEmpty()
    commentId: number;

    @IsNotEmpty()
    postId: number;

    @IsNotEmpty()
    @IsString()
    uid: string;

    @IsNotEmpty()
    text: string;
}
