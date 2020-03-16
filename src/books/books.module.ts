import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { BooksSchema } from './books.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Book', schema: BooksSchema }])
  ],
  providers: [BooksService],
  controllers: [BooksController]
})
export class BooksModule {}
