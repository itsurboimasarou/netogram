import { HttpException, Injectable } from '@nestjs/common';
import { CreateFriendshipDto } from './dto/create-friendship.dto';
import { UpdateFriendshipDto } from './dto/update-friendship.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Friendship } from './entities/friendship.entity';
import { Repository } from 'typeorm';
import { IdgenService } from '../utils/idgen/idgen.service';

@Injectable()
export class FriendshipService {
  @InjectRepository(Friendship)
   private repository: Repository<Friendship>;
  constructor(private idGen: IdgenService) {}

  async checkFriendship(uid: string, friendId: string) {
    return await this.repository.findOne({ where: { uid, friendUid: friendId } });
  }

  async create(createFriendshipDto: CreateFriendshipDto) {

    // check if friendship already exists
    const friendship = await this.checkFriendship(createFriendshipDto.uid, createFriendshipDto.friendUid);
    if (friendship) {
      throw new HttpException('Friendship already exists', 400);
    }
    createFriendshipDto.status = 'pending';
    let newFriend = new Friendship();
    newFriend.id = this.idGen.generateId();
    newFriend.uid = createFriendshipDto.uid;
    newFriend.friendUid = createFriendshipDto.friendUid;
    newFriend.status = createFriendshipDto.status;
    newFriend.createdAt = new Date().toISOString();



    // createFriendshipDto.createdAt = new Date();
    // send notification to the friend
    // this.notificationGateway.server.to(createFriendshipDto.friendUid).emit('friendRequest', createFriendshipDto);
    return await this.repository.save(newFriend);
  }

  async replyFriendship(uid: string, friendUid: string, status: string) {
    const friendship = await this.checkFriendship(uid, friendUid)
    console.log('friendship:', friendship);
    if (!friendship) {
      return friendship;
    }

    if (friendship.status === 'pending') {
      friendship.status = 'accepted';
      return await this.repository.update(friendship.id, friendship);
    }
  }

  // unfriend
  async delete(uid: string, friendUid: string) {
    const friendship = await this.checkFriendship(uid, friendUid);
    if (!friendship) {
      return friendship;
    }
    // send notification to the friend
    return await this.repository.delete(friendship);
  }

  // get all friends by uid with pagination
  async findFriendsByUid(uid: string, page: number, limit: number) {
    console.log('page', page);
    console.log('limit', limit);
    return await this.repository.find({
      where: { uid, status: 'accepted' },
      skip: (page - 1) * limit,
      take: limit
    });
  }

  // count mutual friends
  async countMutualFriends(uid: string, friendUid: string) {
    // count mutual friends
    return await this.repository.createQueryBuilder('friendship')
      .innerJoin('friendship', 'f1', 'f1.uid = friendship.friendUid AND f1.friendUid = :uid', { uid })
      .innerJoin('friendship', 'f2', 'f2.uid = :friendUid AND f2.friendUid = friendship.uid', { friendUid })
      .where('friendship.uid = :uid AND friendship.friendUid = :friendUid', { uid, friendUid })
      .getCount();
  }

  async suggestFriends(uid: string, page: number, limit: number) {
    // get suggestion friend list based on number of mutual friends of friends
    return await this.repository.createQueryBuilder('friendship')
      .innerJoin('friendship', 'f1', 'f1.uid = friendship.friendUid')
      .innerJoin('friendship', 'f2', 'f2.uid = f1.friendUid AND f2.friendUid != :uid', { uid })
      .leftJoin('friendship', 'f3', 'f3.uid = :uid AND f3.friendUid = f2.friendUid', { uid })
      .where('friendship.uid = :uid', { uid })
      .andWhere('f3.uid IS NULL')
      .select('f2.friendUid', 'suggestedFriend')
      .addSelect('COUNT(f2.friendUid)', 'mutualFriendsCount')
      .groupBy('f2.friendUid')
      .orderBy('mutualFriendsCount', 'DESC')
      .skip((page - 1) * limit)
      .take(limit)
      .getRawMany();
  }

}
