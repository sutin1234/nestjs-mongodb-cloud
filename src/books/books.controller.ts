import { ValidateObjectId } from './../pipes/validate-object-id.pipe';
import { Controller, Get, Res, HttpStatus, Param, NotFoundException, Post, Body, Query, Put, Delete } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBooksDTO } from './books.dto';

@Controller('books')
export class BooksController {
    constructor(private bookService: BooksService){}

    @Get('/')
    async getBooks(@Res() res){
        const books = await this.bookService.getBooks()
        return res.status(HttpStatus.OK).json(books)
    }

    @Get('/:bookID')
    async getBook(@Res() res, @Param('bookID', new ValidateObjectId()) bookID){
        const book = await this.bookService.getBook(bookID)
        if (!book) throw new NotFoundException('Post does not exist!');
        return res.status(HttpStatus.OK).json(book);
    }

    @Post('/create')
    async createBook(@Res() res, @Body() createPostDTO: CreateBooksDTO){
        const newBook = await this.bookService.createBook(createPostDTO)
        return res.status(HttpStatus.OK).json({
            message: "Book has been created successfully!",
            post: newBook
        })
    }

    @Put('/edit/:bookID')
    async editBook(@Res() res,
    @Param('bookID', new ValidateObjectId()) bookID,
    @Body() createBooksDTO: CreateBooksDTO){
        const editBook = await this.bookService.updateBook(bookID, createBooksDTO)
        if (!editBook) throw new NotFoundException('Book does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'Book has been successfully updated',
            post: editBook
        })
    }

    @Delete('/delete/:bookID')
    async deleteBook(@Res() res, @Param('bookID', new ValidateObjectId()) bookID){
        const deleteBook = await this.bookService.deleteBook(bookID);
        if (!deleteBook) throw new NotFoundException('Book does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'Book has been deleted!',
            post: deleteBook
        })
    }
}
