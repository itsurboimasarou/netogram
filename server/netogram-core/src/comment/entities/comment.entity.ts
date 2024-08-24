import {Column, Entity, ManyToOne, PrimaryColumn, Unique} from "typeorm";
import {Post} from "../../post/entities/post.entity";

@Entity()
@Unique(['commentId'])
export class Comment {
    @PrimaryColumn({type: 'bigint' })
    commentId: number;

    @ManyToOne(() => Post)
    @Column({type: "bigint"})
    postId: number;

    @Column({ type: 'text'})
    uid: string;

    @Column({ type: 'text'})
    text: string;

    @Column({ type: 'timestamp'})
    createdAt: string;
}
