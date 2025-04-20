// components/VideoModal.tsx
"use client";
import { X } from "lucide-react";

type VideoModalProps = {
  videoUrl: string;
  onClose: () => void;
};

export default function VideoModal({ videoUrl, onClose }: VideoModalProps) {
  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-md z-[1000] flex items-center justify-center p-4">
      <div className="relative w-full max-w-4xl aspect-video rounded-xl overflow-hidden shadow-lg">
        <button
          onClick={onClose}
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
  );
}
