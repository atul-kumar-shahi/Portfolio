import { Movie } from '@/data/types';

export const movieData: Movie[] = [
  {
    id: 1,
    title: "Inception",
    imageUrl: "/api/placeholder/200/300",
    genre: ["Sci-Fi", "Action", "Thriller"],
    rating: 8.8,
    director: "Christopher Nolan",
    releaseYear: 2010
  },
  {
    id: 2,
    title: "The Shawshank Redemption",
    imageUrl: "/api/placeholder/200/300",
    genre: ["Drama"],
    rating: 9.3,
    director: "Frank Darabont",
    releaseYear: 1994
  },
  {
    id: 3,
    title: "Parasite",
    imageUrl: "/api/placeholder/200/300",
    genre: ["Thriller", "Drama", "Comedy"],
    rating: 8.6,
    director: "Bong Joon-ho",
    releaseYear: 2019
  },
  {
    id: 4,
    title: "Everything Everywhere All at Once",
    imageUrl: "/api/placeholder/200/300",
    genre: ["Adventure", "Action", "Sci-Fi"],
    rating: 8.9,
    director: "Daniels",
    releaseYear: 2022
  }
];
