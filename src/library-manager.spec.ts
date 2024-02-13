/* eslint-disable @typescript-eslint/no-unused-vars */
import { BookProtocol } from './interfaces/book-protocol';
import { LoggerProtocol } from './interfaces/logger-protocol';
import { LibraryManager } from './library-manager';

class LoggerMock implements LoggerProtocol {
  showMsg(msg: string): void {}
}

class BookMock implements BookProtocol {
  constructor(
    public title: string,
    public author: string,
    public yearOfPublication: number,
    public disponibility: boolean,
  ) {}
}

const createSutWithBooks = () => {
  const loggerMock = new LoggerMock();
  const sut = new LibraryManager(loggerMock);
  const book1 = sut.addBook(new BookMock('Livro1', 'Autor1', 2000, false));
  const book2 = sut.addBook(new BookMock('Livro2', 'Autor2', 2000, true));
  return {
    sut,
    loggerMock,
    book1,
    book2,
  };
};

describe('Library Manager', () => {
  it('should return true if the book at the selected index is not found', () => {
    const { sut } = createSutWithBooks();
    expect(sut.bookNotFound(20)).toBe(true);
  });

  it('should return false if the book at the selected index is found', () => {
    const { sut } = createSutWithBooks();
    expect(sut.bookNotFound(1)).toBe(false);
  });

  it('should add book', () => {
    const { sut } = createSutWithBooks();
    const sutSpy = jest.spyOn(sut, 'addBook');
    sut.addBook(new BookMock('Livro3', 'Autor3', 2000, true));
    expect(sutSpy).toHaveBeenCalledTimes(1);
  });

  it('should lend book', () => {
    const { sut } = createSutWithBooks();
    const sutSpy = jest.spyOn(sut, 'lendBook');
    sut.lendBook(0);
    expect(sutSpy).toHaveBeenCalledTimes(1);
  });

  it('should return book', () => {
    const { sut } = createSutWithBooks();
    const sutSpy = jest.spyOn(sut, 'returnBook');
    sut.returnBook(0);
    expect(sutSpy).toHaveBeenCalledTimes(1);
  });

  it('should search for books', () => {
    const { sut } = createSutWithBooks();
    const sutSpy = jest.spyOn(sut, 'searchBook');
    sut.searchBook('searching...');
    expect(sutSpy).toHaveBeenCalledTimes(1);
  });
});
