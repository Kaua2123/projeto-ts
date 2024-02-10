import { BookProtocol } from './interfaces/book-protocol';

export class LibraryManager {
  public readonly _books: BookProtocol[] = [];

  constructor() {}

  bookNotFound(index: number): boolean {
    return !this._books[index];
  }

  addBook(book: BookProtocol): void {
    this._books.push(book);
    console.log('Adicionando livro:', book);
  }

  get books(): BookProtocol[] {
    console.log('Listando livros:');
    return this._books;
  }

  lendBook(index: number): boolean {
    if (this.bookNotFound(index)) {
      console.error('Livro não encontrado.');
      return false;
    }
    console.log('Você pegou este livro emprestado:', this._books[index].title);
    return (this._books[index].disponibility = false);
  }

  returnBook(index: number): boolean {
    if (this.bookNotFound(index)) {
      console.error('Livro não encontrado.');
      return false;
    }
    console.log('Você devolveu este livro:', this._books[index].title);
    return (this._books[index].disponibility = true);
  }

  searchBook(text: string): BookProtocol[] {
    const booksFiltered = this._books.filter((book) => {
      if (book.title.toLowerCase().includes(text.toLowerCase())) return book;
      if (book.author.toLowerCase().includes(text.toLowerCase())) return book;
    });
    console.log('Resultados para:', text);
    console.log(booksFiltered);
    return booksFiltered;
  }
}
