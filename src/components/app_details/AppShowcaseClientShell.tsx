"use client";
import { useState } from "react";
import VideoModal from "@/components/app_details/VideoPlayer";
import { Play } from "lucide-react";
import Image from "next/image";

type AppData = {
  id: string;
  title: string;
  description: string;
  imageLink: string;
  techStackt: string[];
  gitHubLink: string;
  videoUrl: string;
};

export default function AppShowcaseClientShell({ app }: { app: AppData }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="text-white px-6 md:px-12 min-h-screen bg-black">
      <div className="max-w-4xl mx-auto py-20">
        <div className="flex items-center gap-6 mb-8">
          <Image src={app.imageLink} alt="App logo" width={64} height={64} />
          <h1 className="text-4xl font-bold">{app.title}</h1>
        </div>

        <p className="text-gray-300 mb-6">{app.description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {app.techStackt.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-gray-800 rounded-full text-sm text-blue-400 border border-blue-500"
            >
              {tech}
            </span>
          ))}
        </div>

        <a
          href={app.gitHubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mb-6 text-blue-500 hover:underline"
        >
          View GitHub Repo
        </a>

        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-all"
        >
          <Play className="w-5 h-5" />
          Watch Demo
        </button>

        {isModalOpen && (
          <VideoModal videoUrl={app.videoUrl} onClose={() => setIsModalOpen(false)} />
        )}
      </div>
    </div>
  );
}
