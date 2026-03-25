export type BookType = {
  id: number;
  title: string;
  author: string;
  available: boolean;
  category: BookCategoryType;
};

export type BookCategoryType =
  | "Biography"
  | "Fictiion"
  | "History"
  | "Children";

export type MagazineType = {
  title: string;
  publisher: string;
  category: BookCategoryType | "Magazine";
};
