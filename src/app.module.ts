import { BooksController } from './books/books.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import config from './config/mongo-db'
import { CatsModule } from './cats/cats.module';
import { BooksModule } from './books/books.module';

@Module({
  imports: [
    MongooseModule.forRoot(config.MongoURI, { useNewUrlParser: true }),
    CatsModule,
    BooksModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
