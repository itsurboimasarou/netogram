import {Controller, Get, Post, Body, Patch, Param, Delete, HttpException, Query, Req} from '@nestjs/common';
import { FriendshipService } from './friendship.service';
import { CreateFriendshipDto } from './dto/create-friendship.dto';
import { UpdateFriendshipDto } from './dto/update-friendship.dto';

@Controller('friendship')
export class FriendshipController {
  constructor(private readonly friendshipService: FriendshipService) {}

  @Post()
  create(@Body() createFriendshipDto: CreateFriendshipDto,@Req() req) {
    try {
      const {uid} = req.user;
      return this.friendshipService.create(createFriendshipDto, uid);
    } catch (e) {
      // return bad request
      return new HttpException(e.message, 400);
    }
  }

  @Post('reply')
  reply(@Body() updateFriendshipDto: UpdateFriendshipDto) {
    return this.friendshipService.replyFriendship(updateFriendshipDto.uid, updateFriendshipDto.friendUid, updateFriendshipDto.status);
  }

  @Delete(':uid/:friendUid')
  delete(@Param('uid') uid: string, @Param('friendUid') friendUid: string) {
    return this.friendshipService.delete(uid, friendUid);
  }

  @Get(':uid')
  findFriendsByUid(@Param('uid') uid: string, @Query('page') page: number, @Query('limit') limit: number, @Req() req) {
    uid = req.user.uid;
    console.log(uid);
    return this.friendshipService.findFriendsByUid(uid, page, limit);
  }


  @Get("mutuals/:uid/:friendUid")
  countMutualFriends(@Param('uid') uid: string, @Param('friendUid') friendUid: string) {
    return this.friendshipService.countMutualFriends(uid, friendUid);
  }

  @Get("suggest/:uid")
  suggestFriends(@Param('uid') uid: string, @Query('page') page: number, @Query('limit') limit: number) {
    return this.friendshipService.suggestFriends(uid, page, limit);
  }

  @Delete('unfriend/:uid/:friendUid')
  unfriend(@Param('uid') uid: string, @Param('friendUid') friendUid: string) {
    return this.friendshipService.delete(uid, friendUid);
  }
}
