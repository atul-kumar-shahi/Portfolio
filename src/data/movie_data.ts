import { Movie } from '@/data/types';

export const movieData: Movie[] = [
  {
    id: 1,
    title: "Inception",
    imageUrl: "https://image.tmdb.org/t/p/w500/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg",
    genre: ["Sci-Fi", "Action", "Thriller"],
    rating: 8.8,
    director: "Christopher Nolan",
    releaseYear: 2010
  },
  {
    id: 2,
    title: "The Shawshank Redemption",
    imageUrl: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
    genre: ["Drama"],
    rating: 9.3,
    director: "Frank Darabont",
    releaseYear: 1994
  },
  {
    id: 3,
    title: "Parasite",
    imageUrl: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    genre: ["Thriller", "Drama", "Comedy"],
    rating: 8.6,
    director: "Bong Joon-ho",
    releaseYear: 2019
  },
  {
    id: 4,
    title: "Everything Everywhere All at Once",
    imageUrl: "https://image.tmdb.org/t/p/w500/w3LxiVYdWWRvEVdn5RYq6jIqkb1.jpg",
    genre: ["Adventure", "Action", "Sci-Fi"],
    rating: 8.9,
    director: "Daniels",
    releaseYear: 2022
  }
];
