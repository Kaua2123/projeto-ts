import { BookProtocol } from './interfaces/book-protocol';

export class Book implements BookProtocol {
  constructor(
    public title: string,
    public author: string,
    public yearOfPublication: number,
    public disponibility: boolean,
  ) {}
}
