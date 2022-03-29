import { Controller, Delete, Get, Param } from '@nestjs/common';
import { PostService } from 'src/hacker-news/services/post/post.service';

@Controller('posts')
export class PostController {

  constructor(private _PostService: PostService) {}


  @Get('')
  async get() {
    const result = await this._PostService.findAll();
    return result;
  }

  @Delete('/:id')
  async delete(@Param('id') id: string) {
    const result = await this._PostService.delete(id);
    return result;
  }
}
