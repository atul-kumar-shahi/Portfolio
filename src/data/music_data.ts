import { MusicTrack } from '@/data/types';
import defaultMusic from "../../public/default_music.png";

export const musicData: MusicTrack[] = [
  // --- Real images first ---
  {
    id: 2,
    title: "Blinding Lights",
    artist: "The Weeknd",
    album: "After Hours",
    genre: "Pop",
    imageUrl: "https://i.scdn.co/image/ab67616d0000b2738863bc11d2aa12b54f5aeb36",
    spotifyUrl: "https://open.spotify.com/track/0VjIjW4GlUZAMYd2vXMi3b",
    previewUrl: "https://p.scdn.co/mp3-preview/49d7871296db5543e13b94798cc843148622aabb"
  },
  {
    id: 5,
    title: "Shape of You",
    artist: "Ed Sheeran",
    album: "÷ (Divide)",
    genre: "Pop",
    imageUrl: "https://i.scdn.co/image/ab67616d0000b273ba5db46f4b838ef6027e6f96",
    spotifyUrl: "https://open.spotify.com/track/7qiZfU4dY1lWllzX7mPBI3",
    previewUrl: "https://p.scdn.co/mp3-preview/5a214e5a96846b18ba92f091845110217983ca80"
  },
  {
    id: 6,
    title: "Billie Jean",
    artist: "Michael Jackson",
    album: "Thriller",
    genre: "Pop",
    imageUrl: "https://i.scdn.co/image/ab67616d0000b2734121faee8df82c526cbab2be",
    spotifyUrl: "https://open.spotify.com/track/5ChkMS8OtdzJeqyybCc9R5",
    previewUrl: "https://p.scdn.co/mp3-preview/14e750dfa3575a3a85a9cfc8585ccda149f85a3f"
  },
  {
    id: 7,
    title: "Smells Like Teen Spirit",
    artist: "Nirvana",
    album: "Nevermind",
    genre: "Rock",
    imageUrl: "https://i.scdn.co/image/ab67616d0000b273fbc71c99f9c1296c56dd51b6",
    spotifyUrl: "https://open.spotify.com/track/5ghIJDpPoe3CfHMGu71E6T",
    previewUrl: "https://p.scdn.co/mp3-preview/5cefed110956cb1b313d4718e6598fd23a3c89cf"
  },
  {
    id: 9,
    title: "Uptown Funk",
    artist: "Mark Ronson ft. Bruno Mars",
    album: "Uptown Special",
    genre: "Funk/Pop",
    imageUrl: "https://i.scdn.co/image/ab67616d0000b273e419ccba0baa8bd3f3d7abf2",
    spotifyUrl: "https://open.spotify.com/track/32OlwWuMpZ6b0aN2RZOeMS",
    previewUrl: "https://p.scdn.co/mp3-preview/96cd8a8c7c8b96a25aa5e6d7b1a0a977b5b3b7b5"
  },

  {
    id: 11,
    title: "Despacito",
    artist: "Luis Fonsi ft. Daddy Yankee",
    album: "VIDA",
    genre: "Reggaeton",
    imageUrl: "https://i.scdn.co/image/ab67616d0000b273ef0d4234e1a645740f77d59c",
    spotifyUrl: "https://open.spotify.com/track/6habFhsOp2NvshLv26DqMb",
    previewUrl: "https://p.scdn.co/mp3-preview/0ef53a4b8bd19d7d57954139c3e557c59940ae58"
  },

  // --- Default image tracks below ---
  {
    id: 1,
    title: "Bohemian Rhapsody",
    artist: "Queen",
    album: "A Night at the Opera",
    genre: "Rock",
    imageUrl: defaultMusic,
    spotifyUrl: "https://open.spotify.com/track/7tFiyTwD0nx5a1eklYtX2J",
    previewUrl: "https://p.scdn.co/mp3-preview/7742af5a32d5ae60d3a8fcce414d716658978a6e"
  },
  {
    id: 3,
    title: "Lose Yourself",
    artist: "Eminem",
    album: "8 Mile Soundtrack",
    genre: "Hip Hop",
    imageUrl: defaultMusic,
    spotifyUrl: "https://open.spotify.com/track/1jYiIOC5d6soxkJP81fxq2",
    previewUrl: "https://p.scdn.co/mp3-preview/5d429abf2a4bfbc3db3c91c08d92bc33b9a13686"
  },
  {
    id: 4,
    title: "Take Five",
    artist: "Dave Brubeck",
    album: "Time Out",
    genre: "Jazz",
    imageUrl: defaultMusic,
    spotifyUrl: "https://open.spotify.com/track/1rqqCSm0Qe4I9rUvWncaom",
    previewUrl: "https://p.scdn.co/mp3-preview/a7c9899dca12fc304a1464a474d846559dd2af5c"
  },
  {
    id: 8,
    title: "Hotel California",
    artist: "Eagles",
    album: "Hotel California",
    genre: "Rock",
    imageUrl: defaultMusic,
    spotifyUrl: "https://open.spotify.com/track/40riOy7x9W7GXjyGp4pjAv",
    previewUrl: "https://p.scdn.co/mp3-preview/55cd38b18a05a29f7a0b1bd23cbaf2096f7d4229"
  },
  {
    id: 12,
    title: "Stairway to Heaven",
    artist: "Led Zeppelin",
    album: "Led Zeppelin IV",
    genre: "Rock",
    imageUrl: defaultMusic,
    spotifyUrl: "https://open.spotify.com/track/5CQ30WqJwcep0pYcV4AMNc",
    previewUrl: "https://p.scdn.co/mp3-preview/7857965d7869c78694d5d26068a219e1db592f6e"
  },
  {
    id: 13,
    title: "Sweet Child O' Mine",
    artist: "Guns N' Roses",
    album: "Appetite for Destruction",
    genre: "Rock",
    imageUrl: defaultMusic,
    spotifyUrl: "https://open.spotify.com/track/7o2CTH4ctstm8TNelqjb51",
    previewUrl: "https://p.scdn.co/mp3-preview/fa3775a3c696d0b29243a0b257d973771c612f6b"
  }
];
