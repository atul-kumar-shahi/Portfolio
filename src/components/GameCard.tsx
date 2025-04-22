"use client";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

type GameCardProps = {
    title: string;
    image?: string;
    lottie?: object;
    playUrl: string;
    github: string;
    credit: string;
    gameUrl?: string; 
  };
  

export default function GameCard({
  title,
  image,
  lottie,
  playUrl,
  github,
  credit,
}: GameCardProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="bg-zinc-800 rounded-xl p-4 shadow-lg flex flex-col gap-4">
      <div className="w-full">
        {lottie ? (
          <Lottie animationData={lottie} loop className="h-48 w-full object-contain bg-zinc-950" />
        ) : (
          image && (
            <Image
              src={image}
              alt={title}
              width={400}
              height={200}
              className="w-full h-48 object-cover rounded-xl"
            />
          )
        )}
      </div>

      <div className="flex flex-col gap-2 text-white">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-sm text-zinc-400">{credit}</p>

        <div className="flex gap-2 mt-2">
          {isClient && (
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-green-600 hover:bg-green-700 text-white px-5 w-full ">
                  Play Now
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-5xl h-[80vh] p-2">
                <DialogTitle className="sr-only">{`Play ${title}`}</DialogTitle>
                <iframe
                  src={playUrl}
                  className="w-full h-full rounded-lg border-none"
                  allowFullScreen
                />
              </DialogContent>
            </Dialog>
          )}
          <Link href={github} target="_blank" rel="noopener noreferrer">
          </Link>
        </div>
      </div>
    </div>
  );
}
