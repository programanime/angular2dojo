import { Injectable } from '@angular/core';

import { Book } from '../components/book';
import { BOOKS } from '../mocks/book-mock';

@Injectable()
export class BookService {
  getBooks(): Promise<Book[]> {
    return Promise.resolve(BOOKS);
  }

  getBook(id: number): Promise<Book> {
    return this.getBooks()
      .then(books => books.find(book => book.id === id));
  }
}
