
import { movieData } from '@/data/movie_data';
import Image from 'next/image';

export default function MovieSection() {
  return (
    <section id="movies" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Movies I&apos;ve Watched</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {movieData.map((movie) => (
            <div key={movie.id} className="bg-gray-100 rounded-lg shadow-lg overflow-hidden">
              <div className="h-64 bg-gray-200">
                <Image
                height={720}
                width={720}
                  src={movie.imageUrl} 
                  alt={movie.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-900 mb-1">{movie.title}</h3>
                <p className="text-gray-600 text-sm mb-2">
                  {movie.director} • {movie.releaseYear}
                </p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {movie.genre.map((g, idx) => (
                    <span key={idx} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                      {g}
                    </span>
                  ))}
                </div>
                <div className="flex items-center">
                  <span className="text-yellow-500 mr-1">★</span>
                  <span>{movie.rating.toFixed(1)}/10</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}