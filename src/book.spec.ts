import { Book } from './book';

const createSut = (
  title: string,
  author: string,
  yearOfPublication: number,
  disponibility: boolean,
) => {
  return new Book(title, author, yearOfPublication, disponibility);
};

describe('Book', () => {
  it('should have properties title, author, yearOfPublication and disponibility', () => {
    const sut = createSut('Livro', 'Autor', 2009, false);
    expect(sut).toHaveProperty('title', sut.title);
    expect(sut).toHaveProperty('author', sut.author);
    expect(sut).toHaveProperty('yearOfPublication', sut.yearOfPublication);
    expect(sut).toHaveProperty('disponibility', sut.disponibility);
  });
});
