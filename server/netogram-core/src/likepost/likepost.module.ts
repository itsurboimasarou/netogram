import { Module } from '@nestjs/common';
import { LikepostService } from './likepost.service';
import { LikepostController } from './likepost.controller';
import {ProfileModule} from "../profile/profile.module";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Likepost} from "./entities/likepost.entity";
import {PostModule} from "../post/post.module";
import {IdgenModule} from "../utils/idgen/idgen.module";

@Module({
  imports: [TypeOrmModule.forFeature([Likepost]),
    ProfileModule,
    PostModule,
    IdgenModule],
  controllers: [LikepostController],
  providers: [LikepostService],
  exports: [TypeOrmModule]
})
export class LikepostModule {}
