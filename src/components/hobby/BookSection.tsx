"use client"
import { bookData } from '@/data/books_data';
import Image from 'next/image';

export default function BookSection() {
  return (
    <section id="books" className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6">My Reading List</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {bookData.map((book) => (
            <div key={book.id} className="flex bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="w-1/3 bg-gray-200">
                <Image
                  height={720}
                  width={720}
                  src={book.imageUrl} 
                  alt={book.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-2/3 p-4">
                <h3 className="text-lg font-bold text-gray-900 mb-1">{book.title}</h3>
                <p className="text-gray-600 text-sm mb-2">
                  by {book.author}
                </p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {book.genre.map((g, idx) => (
                    <span key={idx} className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                      {g}
                    </span>
                  ))}
                </div>
                <div className="flex items-center">
                  <span className="text-yellow-500 mr-1">★</span>
                  <span>{book.rating.toFixed(1)}/10</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}