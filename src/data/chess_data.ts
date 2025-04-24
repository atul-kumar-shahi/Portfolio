import { ChessGame } from '@/data/types';

export const chessData: ChessGame[] = [
  {
    id: 1,
    opponent: "MasterBlaster2000",
    result: "win",
    date: "2024-04-15",
    platform: "Chess.com",
    rating: 1250
  },
  {
    id: 2,
    opponent: "KnightRider",
    result: "loss",
    date: "2024-04-12",
    platform: "Lichess",
    rating: 1300
  },
  {
    id: 3,
    opponent: "QueenGambit42",
    result: "win",
    date: "2024-04-10",
    platform: "Chess.com",
    rating: 1275
  },
  {
    id: 4,
    opponent: "BishopMove",
    result: "draw",
    date: "2024-04-08",
    platform: "Lichess",
    rating: 1290
  }
];
