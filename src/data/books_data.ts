import { Book } from '@/data/types';

export const bookData: Book[] = [
  {
    id: 1,
    title: "1984",
    author: "George Orwell",
    imageUrl: "https://covers.openlibrary.org/b/id/7222246-L.jpg",
    genre: ["Dystopian", "Political Fiction", "Social Science Fiction"],
    rating: 9.0,
    completed: true
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    imageUrl: "https://covers.openlibrary.org/b/id/8225262-L.jpg",
    genre: ["Novel", "Bildungsroman", "Southern Gothic"],
    rating: 8.8,
    completed: true
  },
  {
    id: 3,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    imageUrl: "https://covers.openlibrary.org/b/id/6979861-L.jpg",
    genre: ["Fantasy", "Adventure"],
    rating: 8.5,
    completed: true
  }
];
