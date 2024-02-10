import { BookProtocol } from './interfaces/book-protocol';

export class LibraryManager {
  private readonly _books: BookProtocol[] = [];

  addBook(book: BookProtocol): void {
    this._books.push(book);
  }

  get books(): BookProtocol[] {
    return this._books;
  }
}
