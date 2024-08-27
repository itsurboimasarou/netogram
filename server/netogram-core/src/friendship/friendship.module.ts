import { Module } from '@nestjs/common';
import { FriendshipService } from './friendship.service';
import { FriendshipController } from './friendship.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Friendship } from './entities/friendship.entity';
import { IdgenModule } from '../utils/idgen/idgen.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Friendship]),

     IdgenModule

  ],
  controllers: [FriendshipController],
  providers: [FriendshipService],
})
export class FriendshipModule {}
