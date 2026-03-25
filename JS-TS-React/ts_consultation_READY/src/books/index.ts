import { type BookType, BookCategoryType, MagazineType } from "./types";
import Shelf from "./Shelf";

const books: BookType[] = [
  {
    id: 1,
    title: "Ulysses",
    author: "James Joyce",
    available: true,
    category: "Children",
  },
  {
    id: 2,
    title: "A Farewell to Arms",
    author: "Ernest Hemingway",
    available: false,
    category: "Fictiion",
  },
  {
    id: 3,
    title: "I Know Why the Caged Bird Sings",
    author: "Maya Angelou",
    available: true,
    category: "Fictiion",
  },
  {
    id: 4,
    title: "Moby Dick",
    author: "Herman Melville",
    available: true,
    category: "Fictiion",
  },
];

const magazines: Array<MagazineType> = [
  {
    title: "Programming Language Monthly",
    publisher: "Code Mags",
    category: "Magazine",
  },
  {
    title: "Literary Fiction Quarterly",
    publisher: "College Press",
    category: "Magazine",
  },
  { title: "Five Points", publisher: "GSU", category: "Magazine" },
];
/* ===================  */

function purge<T>(items: Array<T>): Array<T> {
  return items.splice(2, items.length);
}

// let purgeBooks: BookType[] = purge<BookType>(books);
/* let purgeBooks = purge(books);
let magazinesItems = purge(magazines);

console.log(purgeBooks);
console.log(magazinesItems);
 */

let shelf: Shelf<BookType> = new Shelf<BookType>();

books.forEach((item) => shelf.add(item));

let firstBook = shelf.getFirst();

console.log(firstBook);

let magazineShelf: Shelf<MagazineType> = new Shelf();
magazines.forEach((item) => magazineShelf.add(item));
console.log(magazineShelf.getFirst());

let codeMagsItem = magazineShelf.find("Programming Language Monthly");
console.log("==================");
console.log(`${codeMagsItem.title} - ${codeMagsItem.publisher}`);

console.log("==================");
magazineShelf.printItem();
console.log("==================");
shelf.printItem();
