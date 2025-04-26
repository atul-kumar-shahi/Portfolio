"use client";
import Image from "next/image";
import dynamic from "next/dynamic";
import type { LottieComponentProps } from "lottie-react";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

interface HobbyCardProps {
  title: string;
  description: string;
  count: number;
  iconPath?: string;
  animationData?: LottieComponentProps["animationData"];
  bgColor: string;
}

export default function HobbyCard({
  title,
  description,
  count,
  iconPath,
  animationData,
  bgColor,
}: HobbyCardProps) {
  return (
    <div className={`${bgColor} rounded-lg shadow-lg p-6 transition-transform hover:scale-105`}>
      <div className="flex flex-col items-center text-white">
        {/* Made container bigger */}
        <div className="relative h-24 w-24 rounded-full overflow-hidden bg-white mb-4 flex items-center justify-center">
          {animationData ? (
            <Lottie
              animationData={animationData}
              loop
              autoplay
              className="h-20 w-20" // Made Lottie animation bigger
            />
          ) : (
            iconPath && (
              <Image
                src={iconPath}
                alt={title}
                fill
                className="object-cover"
                sizes="96px" // Updated to match new size
              />
            )
          )}
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-center mb-4">{description}</p>
        <div className="bg-white text-gray-800 px-4 py-2 rounded-full font-bold">
          {count} {title.toLowerCase()}
        </div>
      </div>
    </div>
  );
}
