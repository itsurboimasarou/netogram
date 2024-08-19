import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { SearchService } from './search.service';
import { CreateSearchDto } from './dto/create-search.dto';
import { UpdateSearchDto } from './dto/update-search.dto';

@Controller('search')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @Get('posts')
  async searchPosts(@Body() request: any) {
    return this.searchService.searchPosts(request.query);
  }

  @Get('person')
  async searchProfiles(@Body() request: any) {
    return this.searchService.searchProfiles(request.query);
  }

  @Get('any')
  async searchTags(@Query('q') q: string) {
    let profiles = await this.searchService.searchAny('profiles',q);
    let posts = await this.searchService.searchAny('posts',q);
    return {
      profiles: profiles,
      posts: posts
    };
  }
}
