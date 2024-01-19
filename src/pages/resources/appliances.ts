const AllBooks = {
  christianBooks: [
    {
      title: "Lies of Our Anti-Christian Age",
      author: "Rosaria Butterfield",
      type: "s"
    },
    {
      title: "A Noble Scheme",
      author: "Roseanna M. White",
      type: "h"
    },
    {
      title: "The Seamstress of Acadie: A Novel",
      author: "Laura Frantz",
      type: "s/h"
    },
    {
      title: "Double Take",
      author: "Lynette Eason",
      type: "s"
    },
    
  ],
};

export default AllBooks;

// Optional: Define types for your data
export type Book = {
  title: string;
  author: number | string;
  type: string
};

export type BooksStack = {
  christianBooks: Book[];
};
