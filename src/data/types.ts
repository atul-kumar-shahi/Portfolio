import { StaticImageData } from "next/image";

export interface Anime {
    id: number;
    title: string;
    imageUrl: string;
    genre: string[];
    rating: number;
    completed: boolean;
    episodes: number;
  }
  
  export interface Movie {
    id: number;
    title: string;
    imageUrl: string;
    genre: string[];
    rating: number;
    director: string;
    releaseYear: number;
  }
  
  export interface Book {
    id: number;
    title: string;
    author: string;
    imageUrl: string;
    genre: string[];
    rating: number;
    completed: boolean;
  }
  
  export interface ChessGame {
    id: number;
    opponent: string;
    result: "win" | "loss" | "draw";
    date: string;
    platform: string;
    rating?: number;
  }
  
  export interface MusicTrack {
    id: number;
    title: string;
    artist: string;
    album: string;
    imageUrl?: string|StaticImageData;
    genre: string;
    spotifyUrl:string
    previewUrl:string
  }