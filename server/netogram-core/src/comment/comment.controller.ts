import {Controller, Get, Post, Body, Patch, Param, Delete, Req} from '@nestjs/common';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Post()
  create(@Body() createCommentDto: CreateCommentDto,
         @Req() req,) {
    const { uid } = req.user;
    return this.commentService.create(createCommentDto, uid);
  }

  @Get()
  findAll(@Body() comment: CreateCommentDto) {
    return this.commentService.findAll(comment.postId);
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.commentService.findOne(+id);
  // }
  //
  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateCommentDto: UpdateCommentDto) {
  //   return this.commentService.update(+id, updateCommentDto);
  // }
  //
  @Delete()
  remove(@Body() deleteCommentDto: CreateCommentDto) {
    return this.commentService.delete(deleteCommentDto.commentId);
  }
}
