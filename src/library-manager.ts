import { BookProtocol } from './interfaces/book-protocol';
import { LoggerProtocol } from './interfaces/logger-protocol';

export class LibraryManager {
  private readonly _books: BookProtocol[] = [];

  constructor(public readonly logger: LoggerProtocol) {}

  bookNotFound(index: number): boolean {
    return !this._books[index];
  }

  addBook(book: BookProtocol): void {
    this._books.push(book);
    this.logger.showMsg(`Adicionado livro`);
  }

  get books(): BookProtocol[] {
    return this._books;
  }

  lendBook(index: number): boolean {
    if (this.bookNotFound(index)) {
      this.logger.showMsg('Erro: livro não encontrado.');
      return false;
    }
    this.logger.showMsg(
      `Você pegou este livro emprestado: ${this._books[index].title}`,
    );
    return (this._books[index].disponibility = false);
  }

  returnBook(index: number): boolean {
    if (this.bookNotFound(index)) {
      this.logger.showMsg('Erro: livro não encontrado.');
      return false;
    }
    this.logger.showMsg(
      `Você devolveu este livro: ${this._books[index].title}`,
    );
    return (this._books[index].disponibility = true);
  }

  searchBook(text: string): BookProtocol[] {
    const booksFiltered = this._books.filter((book) => {
      if (book.title.toLowerCase().includes(text.toLowerCase())) return book;
      if (book.author.toLowerCase().includes(text.toLowerCase())) return book;
    });
    this.logger.showMsg(`Resultados para: ${text}`);
    console.log(booksFiltered);
    return booksFiltered;
  }
}
