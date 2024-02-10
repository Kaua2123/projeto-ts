import { Book } from './book';
import { LibraryManager } from './library-manager';

const libraryManager = new LibraryManager();
libraryManager.addBook(
  new Book('O nome do vento', 'Patrick Rothfuss', 2007, true),
);
libraryManager.addBook(new Book('One Piece', 'Eichiiro Oda', 1996, true));
console.log(libraryManager.books);
libraryManager.lendBook(0);
console.log(libraryManager.books[0]);
libraryManager.returnBook(0);
console.log(libraryManager.books[0]);
libraryManager.searchBook('One Piece');
