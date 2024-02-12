import { BookProtocol } from './book-protocol';
import { LoggerProtocol } from './logger-protocol';

export interface LibraryManagerProtocol {
  books: BookProtocol[];
  logger: LoggerProtocol;
  bookNotFound(index: number): boolean;
  addBook(book: BookProtocol): void;
  lendBook(index: number): boolean;
  returnBook(index: number): boolean;
  searchBook(text: string): BookProtocol[];
}
