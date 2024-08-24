import {Controller, Get, Post, Body, Patch, Param, Delete, Req, HttpStatus, HttpException} from '@nestjs/common';
import { LikepostService } from './likepost.service';
import { CreateLikepostDto } from './dto/create-likepost.dto';
import { UpdateLikepostDto } from './dto/update-likepost.dto';

@Controller('likepost')
export class LikepostController {
  constructor(private readonly likepostService: LikepostService) {}

  @Post()
  create(@Body() createLikepostDto: CreateLikepostDto,
         @Req() req) {
    try {
      const { uid } = req.user;
      return this.likepostService.create(createLikepostDto,uid);
    }catch (e){
      if (e.status === HttpStatus.BAD_REQUEST) {
        throw new HttpException(e.message, HttpStatus.BAD_REQUEST);
      } else if (e.status === HttpStatus.NOT_FOUND) {
        throw new HttpException(e.message, HttpStatus.NOT_FOUND);
      }
    }
  }

  @Delete()
    delete(@Body() deleteLikepostDto: CreateLikepostDto,
             @Req() req) {
        try {
        return this.likepostService.delete(deleteLikepostDto.likeId);
        }catch (e){
        if (e.status === HttpStatus.BAD_REQUEST) {
            throw new HttpException(e.message, HttpStatus.BAD_REQUEST);
        } else if (e.status === HttpStatus.NOT_FOUND) {
            throw new HttpException(e.message, HttpStatus.NOT_FOUND);
        }
        }
    }

    @Get()
    countLikes(@Body() countLikepostDto: CreateLikepostDto) {
        try {
        return this.likepostService.countLikes(countLikepostDto.postId);
        }catch (e){
        if (e.status === HttpStatus.BAD_REQUEST) {
            throw new HttpException(e.message, HttpStatus.BAD_REQUEST);
        } else if (e.status === HttpStatus.NOT_FOUND) {
            throw new HttpException(e.message, HttpStatus.NOT_FOUND);
        }
        }
    }
}
