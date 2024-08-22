import {Column, Entity, PrimaryColumn} from "typeorm";

@Entity()
export class Comment {
    @PrimaryColumn({type: 'bigint' })
    commentId: number;

    @Column({type: "bigint"})
    postId: number;

    @Column({ type: 'text'})
    uid: string;

    @Column({ type: 'text'})
    text: string;

    @Column({ type: 'timestamp'})
    createdAt: string;
}
