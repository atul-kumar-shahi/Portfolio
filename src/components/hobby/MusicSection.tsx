"use client";
import { useEffect, useMemo, useState, useRef } from "react";
import { MusicTrack } from "@/data/types";
import { musicData } from "@/data/music_data";
import Image from "next/image";
import { extractSpotifyTrackId } from "../helper_function";

export default function MusicSection() {
  const [currentTrack, setCurrentTrack] = useState<MusicTrack | null>(null);
  const [genreProgress, setGenreProgress] = useState<number[]>([]);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const rightSectionRef = useRef<HTMLDivElement>(null);
  const [playlistHeight, setPlaylistHeight] = useState<number>(600);

  const genres = useMemo(
    () => Array.from(new Set(musicData.map((track) => track.genre))),
    []
  );

  useEffect(() => {
    const generated = genres.map(() => Math.floor(Math.random() * 40) + 60);
    setGenreProgress(generated);
  }, [genres]);

  useEffect(() => {
    // Stop any currently playing audio when changing tracks
    if (audioRef.current) {
      audioRef.current.pause();
    }
  }, [currentTrack]);

  // Adjust playlist height based on right section height
  useEffect(() => {
    const updateHeight = () => {
      if (rightSectionRef.current) {
        const rightHeight = rightSectionRef.current.clientHeight - 48; // Subtract padding
        setPlaylistHeight(rightHeight);
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <section id="music" className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
          Music I Enjoy
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Left side: Playlist */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-teal-600 text-xl font-bold mb-4">
                My Playlist
              </h3>
              <div
                className="space-y-3 overflow-y-auto pr-2"
                style={{ maxHeight: `${playlistHeight}px` }}
              >
                {musicData.map((track) => (
                  <div
                    key={track.id}
                    className={`p-3 rounded-lg flex items-center cursor-pointer transition-colors
                      ${
                        currentTrack?.id === track.id
                          ? "bg-purple-100 border border-purple-300"
                          : "bg-gray-50 hover:bg-gray-100"
                      }`}
                    onClick={() => setCurrentTrack(track)}
                  >
                    <div className="h-12 w-12 flex-shrink-0 mr-4">
                      <Image
                        height={720}
                        width={720}
                        src={track.imageUrl|| "./default_music.png"}
                        alt={track.album}
                        className="w-full h-full object-cover rounded"
                      />
                    </div>
                    <div className="flex-grow">
                      <p className=" text-gray-800 font-medium">{track.title}</p>
                      <p className="text-sm text-gray-500">
                        {track.artist} • {track.album}
                      </p>
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

          {/* Right side: Now Playing + Genres */}
          <div>
            <div
              ref={rightSectionRef}
              className="bg-gray-800 text-white rounded-lg shadow-lg p-6 h-full space-y-6"
            >
              {/* Now Playing Section */}
              {currentTrack && (
                <div>
                  <h4 className="text-xl font-bold mb-4">Now Playing</h4>

                  {/* Album info */}
                  <div className="flex items-center mb-4">
                    <div>
                      <p className=" text-green-400 font-bold">{currentTrack.title}</p>
                      <p className="text-gray-300 text-sm">
                        {currentTrack.artist}
                      </p>
                    </div>
                  </div>

                  {/* Spotify embed - already includes preview functionality */}
                  {currentTrack.spotifyUrl && (
                    <iframe
                      src={`https://open.spotify.com/embed/track/${extractSpotifyTrackId(currentTrack.spotifyUrl)}`}
                      width="100%"
                      height="80"
                      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                      loading="lazy"
                      className="rounded-lg"
                    />
                  )}
                </div>
              )}

              {/* Genres Section */}
              <div>
                <h3 className="text-xl font-bold mb-4">Genres I Listen To</h3>
                <div className="space-y-2">
                  {genres.slice(0, 6).map((genre, index) => (
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
