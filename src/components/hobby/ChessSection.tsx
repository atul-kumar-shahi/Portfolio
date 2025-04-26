"use client";

import { chessData } from '@/data/chess_data';
import Link from 'next/link';

export default function ChessSection() {
  // Calculate stats
  const wins = chessData.filter(game => game.result === "win").length;
   const totalGames = chessData.length;
  const winRate = totalGames > 0 ? Math.round((wins / totalGames) * 100) : 0;
   

  return (
    <section id="chess" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6">My Chess Journey</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-100 rounded-lg shadow-lg p-6">
            <h3 className="text-xl text-teal-600 font-bold mb-4">Stats Summary</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg">
                <p className="text-sm text-gray-500">Current Rating</p>
                <p className="text-2xl font-bold text-blue-600">{950}</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <p className="text-sm text-gray-500">Win Rate</p>
                <p className="text-2xl font-bold text-green-600">{winRate}%</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <p className="text-sm text-gray-500">Total Games</p>
                <p className=" text-gray-700 text-2xl font-bold">1738</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <p className="text-sm text-gray-500">W / L / D</p>
                <p className="text-lg font-bold">
                  <span className="text-green-600">{900}</span> / <span className="text-red-600">{700}</span> / <span className="text-yellow-600">{138}</span>
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-100 rounded-lg shadow-lg p-6">
            <h3 className=" text-gray-800 text-xl font-bold mb-4">Recent Games</h3>
            <div className="space-y-3">
              {chessData.slice(0, 3).map((game) => (
                <div key={game.id} className="bg-white p-3 rounded-lg flex justify-between items-center">
                  <div>
                    <p className=" text-gray-800 font-medium">vs. {game.opponent}</p>
                    <p className="text-sm text-gray-500">{game.platform} • {game.date}</p>
                  </div>
                  <div>
                    <span className={`px-2 py-1 rounded font-medium text-sm
                      ${game.result === 'win' ? 'bg-green-100 text-green-800' : 
                        game.result === 'loss' ? 'bg-red-100 text-red-800' : 
                        'bg-yellow-100 text-yellow-800'}`}>
                      {game.result.charAt(0).toUpperCase() + game.result.slice(1)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
            <div className="flex justify-center">
              <Link href="https://www.chess.com/member/ATULSHAHI" target="_blank" rel="noopener noreferrer">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow transition-all duration-300">
                  View My Chess.com Profile
                </button>
              </Link>
            </div>
      </div>
    </section>
  );
}
