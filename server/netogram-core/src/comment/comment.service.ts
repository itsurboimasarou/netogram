import {HttpException, HttpStatus, Injectable, NotFoundException} from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Comment} from "./entities/comment.entity";
import {Profile} from "../profile/entities/profile.entity";
import {IdgenService} from "../utils/idgen/idgen.service";
import {Post} from "../post/entities/post.entity";

@Injectable()
export class CommentService {
  constructor(
      @InjectRepository(Comment)
      private readonly commentRepository: Repository<Comment>,
      @InjectRepository(Profile)
      private profileRepository: Repository<Profile>,
      @InjectRepository(Post)
      private postRepository: Repository<Post>,
      private idGenService: IdgenService,
  ) {}

  async create(comment: CreateCommentDto, uid: string) {
    let newComment = new Comment();
    newComment.commentId = this.idGenService.generateId();

    const post = await this.postRepository.findOne({ where: { id: comment.postId } });

    if(!post){
        throw new NotFoundException('Post not found');
    }

    newComment.postId = comment.postId;
    const profile = await this.profileRepository.findOne({ where: { uid } });

    if (!profile) {
      throw new NotFoundException('Profile not found');
    }
    newComment.uid = uid;
    newComment.text = comment.text;
    newComment.createdAt = new Date().toISOString();
    return await this.commentRepository.save(newComment);
  }

  async findAll(postId: number) {
    return await this.commentRepository.find({ where: { postId } });
  }

  async countComments(postId: number) {
    return await this.commentRepository.count({ where: { postId } });
  }

  delete (commentId: number) {
    let deletedComment = this.commentRepository.findOne({ where: { commentId } });
    if (!deletedComment) {
      throw new HttpException('Comment not found', HttpStatus.NOT_FOUND);
    }
    return this.commentRepository.delete(commentId);
  }
}
