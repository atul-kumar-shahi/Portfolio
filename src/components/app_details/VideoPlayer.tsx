"use client";
import { useEffect, useState } from "react";
import { X, Play } from "lucide-react";

interface videoUrlProps{
  url:string;
}

export default function VideoModal({url}:videoUrlProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const videoUrl = url;
    useEffect(() => {
      setMounted(true);
    }, []);

    useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);


  if (!mounted) return null;

  return (  
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="absolute right-6 bottom-7 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-2 px-6 rounded-full font-medium flex items-center gap-2 transition-all shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40"
      >
        <Play className="w-5 h-5" />
        Watch Demo
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-md z-[1000] flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl aspect-video rounded-xl overflow-hidden shadow-lg">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-white bg-black/60 hover:bg-black/80 p-2 rounded-full z-10"
            >
              <X className="w-5 h-5" />
            </button>
            <video
              src={videoUrl}
              controls
              autoPlay
              className="w-full h-full rounded-lg shadow-xl"
            />
          </div>
        </div>
      )}
    </>
  );
}
