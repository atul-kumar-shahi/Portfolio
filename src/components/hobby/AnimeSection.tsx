"use client";
import { useState } from 'react';
import { animeData } from '@/data/anime_data';
import Image from 'next/image';

export default function AnimeSection() {
  const [filter, setFilter] = useState<'all' | 'completed' | 'watching'>('all');
  
  const filteredAnime = animeData.filter(anime => {
    if (filter === 'all') return true;
    if (filter === 'completed') return anime.completed;
    return !anime.completed;
  });

  return (
    <section id="anime" className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6">My Anime Collection</h2>
        
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button 
              onClick={() => setFilter('all')} 
              className={`px-4 py-2 text-sm font-medium rounded-l-lg ${filter === 'all' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700'}`}
            >
              All
            </button>
            <button 
              onClick={() => setFilter('completed')} 
              className={`px-4 py-2 text-sm font-medium ${filter === 'completed' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700'}`}
            >
              Completed
            </button>
            <button 
              onClick={() => setFilter('watching')} 
              className={`px-4 py-2 text-sm font-medium rounded-r-lg ${filter === 'watching' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700'}`}
            >
              Watching
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAnime.map((anime) => (
            <div key={anime.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-64 bg-gray-200 relative">
                <Image 
                  width={720}
                  height={720}
                  src={anime.imageUrl} 
                  alt={anime.title} 
                  className="w-full h-full object-cover"
                />
                <span className={`absolute top-2 right-2 px-2 py-1 rounded text-xs font-bold ${anime.completed ? 'bg-green-500' : 'bg-yellow-500'}`}>
                  {anime.completed ? 'Completed' : 'Watching'}
                </span>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{anime.title}</h3>
                <div className="flex flex-wrap gap-1 mb-3">
                  {anime.genre.map((g, idx) => (
                    <span key={idx} className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">
                      {g}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <span className="text-yellow-500 mr-1">★</span>
                    <span>{anime.rating.toFixed(1)}/10</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    {anime.episodes} episodes
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
