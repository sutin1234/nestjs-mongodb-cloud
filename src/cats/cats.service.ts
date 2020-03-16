import { Cat } from './cat.interface';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateCatDTO } from './cat.dto';

@Injectable()
export class CatsService {
    constructor(@InjectModel('Cat') private readonly catModel: Model<Cat>) { }

    async addCat(createCatDTO: CreateCatDTO): Promise<Cat> {
        const newPost = await this.catModel(createCatDTO);
        return newPost.save();
    }
    
    async getCats(): Promise<Cat[]> {
        const posts = await this.catModel.find().exec();
        return posts;
    }
}
