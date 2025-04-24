"use client";
import { useEffect, useMemo, useState } from 'react';
import { MusicTrack } from '@/data/types';
import { musicData } from '@/data/music_data';
import Image from 'next/image';

export default function MusicSection() {
  const [currentTrack, setCurrentTrack] = useState<MusicTrack | null>(null);
  const [genreProgress, setGenreProgress] = useState<number[]>([]);

  const genres = useMemo(() => Array.from(new Set(musicData.map(track => track.genre))), []);


  useEffect(() => {
    const generated = genres.map(() => Math.floor(Math.random() * 40) + 60);
    setGenreProgress(generated);
  }, [genres]);

  return (
    <section id="music" className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Music I Enjoy</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">My Playlist</h3>
              <div className="space-y-3">
                {musicData.map((track) => (
                  <div
                    key={track.id}
                    className={`p-3 rounded-lg flex items-center cursor-pointer transition-colors
                      ${currentTrack?.id === track.id 
                        ? 'bg-purple-100 border border-purple-300' 
                        : 'bg-gray-50 hover:bg-gray-100'}`}
                    onClick={() => setCurrentTrack(track)}
                  >
                    <div className="h-12 w-12 flex-shrink-0 mr-4">
                      <Image
                      height={720}
                      width={720}
                        src={track.imageUrl} 
                        alt={track.album} 
                        className="w-full h-full object-cover rounded"
                      />
                    </div>
                    <div className="flex-grow">
                      <p className="font-medium">{track.title}</p>
                      <p className="text-sm text-gray-500">{track.artist} • {track.album}</p>
                    </div>
                    <div>
                      <span className="px-2 py-1 rounded text-xs bg-purple-100 text-purple-800">
                        {track.genre}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="bg-gray-800 text-white rounded-lg shadow-lg p-6 h-full">
              <h3 className="text-xl font-bold mb-4">Genres I Listen To</h3>
              <div className="space-y-2">
                {genres.map((genre, index) => (
                  <div key={index} className="bg-gray-700 p-3 rounded-lg">
                    <p className="font-medium">{genre}</p>
                    <div className="mt-2 bg-gray-600 rounded-full h-2">
                      <div
                        className="bg-purple-500 h-2 rounded-full transition-all duration-300 ease-in-out"
                        style={{ width: `${genreProgress[index] || 0}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {currentTrack && (
                <div className="mt-6 pt-6 border-t border-gray-700">
                  <h4 className="text-lg font-bold mb-2">Now Playing</h4>
                  <div className="flex items-center">
                    <div className="h-16 w-16 flex-shrink-0 mr-4">
                      <Image 
                      height={720}
                      width={720}
                        src={currentTrack.imageUrl} 
                        alt={currentTrack.album} 
                        className="w-full h-full object-cover rounded"
                      />
                    </div>
                    <div>
                      <p className="font-medium">{currentTrack.title}</p>
                      <p className="text-sm text-gray-400">{currentTrack.artist}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
