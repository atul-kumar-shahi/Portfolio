"use client";
import { useState } from "react";
import Link from "next/link";

export default function HomepageHobbySection() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="py-16 bg-gradient-to-br from-gary-500 via-gray-700 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:justify-between gap-8">
          {/* Content Side */}
          <div className="lg:w-1/2 text-gray-100">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl mb-6">
              Discover My Hobbies
            </h2>
            <p className="text-lg mb-8 text-gray-300">
              Explore my collection of favorite anime, movies, books, chess games, and music. 
              Take a peek into my personal interests and what keeps me entertained.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/hobby" 
                className="bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-6 py-3 rounded-lg shadow transition-colors"
              >
                Explore Hobbies
              </Link>
              <Link 
                href="https://game-collection-fawn.vercel.app/" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 hover:bg-gray-600 text-white font-medium px-6 py-3 rounded-lg shadow flex items-center gap-2 transition-colors"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <span>Play Games</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className={`h-5 w-5 transition-transform ${isHovered ? 'translate-x-1' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
          
          {/* Card Side */}
          <div className="mt-10 lg:mt-0 lg:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              {/* Hobby Card */}
              <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-all hover:-translate-y-2 hover:shadow-2xl">
                <div className="h-32 bg-gradient-to-tr from-indigo-600 to-indigo-700 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg text-gray-100">Hobbies Collection</h3>
                  <p className="text-gray-400">Anime, Movies, Books & More</p>
                </div>
              </div>
              
              {/* Games Card */}
              <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-all hover:-translate-y-2 hover:shadow-2xl">
                <div className="h-32 bg-gradient-to-tr from-indigo-600 to-purple-700 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                  </svg>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg text-gray-100">Gaming Zone</h3>
                  <p className="text-gray-400">Check out some fun games</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
