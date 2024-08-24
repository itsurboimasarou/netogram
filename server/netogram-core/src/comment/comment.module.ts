import { Module } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentController } from './comment.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Comment} from "./entities/comment.entity";
import {ProfileModule} from "../profile/profile.module";
import {IdgenModule} from "../utils/idgen/idgen.module";
import {PostModule} from "../post/post.module";

@Module({
  imports: [TypeOrmModule.forFeature([Comment]),
    ProfileModule,
    PostModule,
    IdgenModule
  ],
  controllers: [CommentController],
  providers: [CommentService],
  exports: [TypeOrmModule]
})
export class CommentModule {}
