"use client";

import DiscriptionPage from "@/components/app_details/DiscriptionPage";
import VideoModal from "@/components/app_details/VideoPlayer";
import Image from "next/image";
import {
  Share,
  Bookmark,
  Download,
  Globe,
  Code,
  Smartphone,
} from "lucide-react";
import { appdata } from "@/data/app_cards";
import { useSearchParams } from "next/navigation";

const ViewPage = () => {
  const searchParams = useSearchParams();
  const appId = searchParams.get("appId");
  const data = appdata.find((app) => app.id === appId);

  if (!data) return <div className="text-white p-8">App not found.</div>;

  return (
    <div className="min-h-screen dark:bg-black text-white flex flex-col items-center px-6 md:px-12">
      <div className="relative w-full min-h-[550px] overflow-hidden">
        <div className="relative z-20 container mx-auto px-6 pt-32 pb-20">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
              {data.title}
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium mb-6 text-gray-200">
              {data.description}
            </h2>
            <div className="text-cyan-400 mb-2 flex items-center gap-2">
              <Smartphone className="w-5 h-5" />
              FLUTTER DEVELOPER
            </div>
            <div className="text-gray-400 text-sm mb-6 flex items-center gap-2">
              <Code className="w-4 h-4" />
              Built with Flutter and Dart
            </div>
            <div className="flex flex-wrap items-center gap-8 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl overflow-hidden shadow-lg shadow-blue-500/20">
                <Image
                  src={data?.logo}
                  alt="App icon"
                  width={64}
                  height={64}
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center text-xl font-bold">
                  <Globe className="w-5 h-5 mr-2" />
                  Cross-platform
                </div>
                <div className="text-sm text-gray-400">iOS & Android</div>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 px-8 rounded-md font-semibold transition-all shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:-translate-y-1">
                <Download className="w-5 h-5 inline-block mr-2" />
                Download Now
              </button>
              <button className="bg-transparent border border-blue-500 text-blue-400 hover:bg-blue-500/10 py-3 px-8 rounded-md font-semibold transition-all">
                <Smartphone className="w-5 h-5 inline-block mr-2" />
                Available Platforms
              </button>
              <button className="bg-transparent hover:bg-gray-800 p-3 rounded-full transition-colors">
                <Share className="w-5 h-5" />
              </button>
              <button className="bg-transparent hover:bg-gray-800 p-3 rounded-full transition-colors">
                <Bookmark className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <VideoModal url={data?.videoUrl} />

      <DiscriptionPage
        description={data?.fullDescription}
        highlight={data?.highlights}
      />

      <div className="bg-gray-900 py-16 mx-24">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 mx-24">App Screenshots</h2>
          <div className="overflow-x-auto pb-6 mx-24">
            <div className="flex gap-4 min-w-max">
              {data?.screenShot.map((item: string) => (
                <div
                  key={item}
                  className="min-w-[280px] h-[600px] bg-gray-800 rounded-xl overflow-hidden border border-gray-700 shadow-lg"
                >
                  <Image
                    src={item}
                    alt={`App screenshot ${item}`}
                    width={280}
                    height={600}
                    className="object-cover h-full w-full"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewPage;
