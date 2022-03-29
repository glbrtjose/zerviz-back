import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Post } from 'src/hacker-news/schemas/post.schema';
import { DeletePostDto } from 'src/hacker-news/dto/delete-post.dto';

@Injectable()
export class PostService {
  constructor(
    @Inject('POST_MODEL')
    private postModel: Model<Post>,
  ) {}

  async insertMany(_CreatePostDto: any[]): Promise<any> {
    const items = (await this.findAll()).map(item => item.objectID);
    let result = {};
    const data = _CreatePostDto.filter((item) => !items.includes(item.objectId))
    if(data.length)
      result = this.postModel.insertMany(_CreatePostDto);
    return result;
  }

  async delete(_id): Promise<Post[]> {
    console.log(_id);
    const result = await this.postModel.deleteOne({objectID:`${_id}`}).exec();
    const res = await this.findAll();
    return res;
  }

  async findAll(params:any = {}): Promise<Post[]> {
    return this.postModel.find(params).sort({created_at: 1}).exec();
  }
}