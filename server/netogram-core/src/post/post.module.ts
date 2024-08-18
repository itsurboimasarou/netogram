import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfileModule } from '../profile/profile.module';
import { StorageModule } from '../storage/storage.module';
import { IdgenModule } from '../utils/idgen/idgen.module';
import { Post } from './entities/post.entity';
import { SearchModule } from '../search/search.module';
import { SearchService } from '../search/search.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Post]),
    ProfileModule,
    StorageModule,
    IdgenModule,
    SearchModule,

  ],
  controllers: [PostController],
  providers: [PostService, SearchService ],
  exports: [PostService],
})
export class PostModule {}
