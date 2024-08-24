import {Column, Entity, ManyToOne, PrimaryColumn, Unique} from "typeorm";
import {Post} from "../../post/entities/post.entity";


@Entity()
@Unique([ 'uid','likeId'])
export class Likepost {
    @PrimaryColumn({type: "bigint"})
    likeId: number;

    @ManyToOne(() => Post )
    @Column({type: "bigint"})
    postId: number;

    @Column({type: "text"})
    uid: string;

    @Column({type: "timestamp"})
    createdAt: string;
}
