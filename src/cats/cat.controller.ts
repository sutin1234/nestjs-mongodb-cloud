import {Body, Controller, Get, Post} from '@nestjs/common';
import { CatsService } from './cats.service';


@Controller('cats')
export class CatsController {
    constructor(private readonly catService: CatsService) { }

    @Get('/')
    async listUsers() {
        return this.catService.getCats()
    }

    @Post('/add')
    async addCat() {
        const newCat = {
            name: 'myCat',
            age: 20,
            breed: "breed"
        }
        return this.catService.addCat(newCat)
    }
}