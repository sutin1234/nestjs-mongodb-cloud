import { Books as Book } from './books.interface';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBooksDTO } from './books.dto';

@Injectable()
export class BooksService {
  constructor(@InjectModel('Book') private readonly bookModel: Model<Book>) {}

  async createBook(createBooksDTO: CreateBooksDTO): Promise<Book> {
    const book = await this.bookModel(createBooksDTO);
    return book.save();
  }

  async getBooks(): Promise<Book[]> {
    const books = await this.bookModel.find().exec();
    return books;
  }

  async getBook(bookID): Promise<Book> {
    const book = await this.bookModel.findById(bookID).exec();
    return book;
  }

  async updateBook(bookID, createBooksDTO: CreateBooksDTO): Promise<Book> {
    const book = await this.bookModel.findByIdAndUpdate(bookID, createBooksDTO, { new: true });
    return book;
  }

  async deleteBook(bookID): Promise<Book> {
    const book = await this.bookModel.findByIdAndRemove(bookID);
    return book;
  }
}
