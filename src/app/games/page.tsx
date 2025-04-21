"use client";
import { gameData } from "@/data/game_data";
import GameCard from "@/components/GameCard";

export default function GamesPage() {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-white">Mini Games</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {gameData.map((game) => (
          <GameCard key={game.id} {...game} gameUrl={game.playUrl} />
        ))}
      </div>
    </div>
  );
}
