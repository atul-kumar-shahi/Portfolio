"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image, { ImageProps } from "next/image";

interface CarouselProps {
  items: React.ReactNode[];
  initialScroll?: number;
}

type Card = {
  src: string;
  title: string;
  category: string;
  content: React.ReactNode;
};

export const Carousel = ({ items}: CarouselProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative w-full">
      <div
        className="flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth py-2 [scrollbar-width:none] md:py-4"
        ref={carouselRef}
      >
        <div className="absolute right-0 z-[1000] h-auto w-[5%] overflow-hidden bg-gradient-to-l" />
        <div className="flex flex-row justify-start gap-4 pl-4 mx-auto max-w-7xl">
          {items.map((item, index) => (
            <motion.div
              key={`card-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 * index }}
              className="rounded-3xl last:pr-[5%] md:last:pr-[33%]"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const Card = ({
  card,
}: {
  card: Card;
  index: number;
}) => {
  return (
    <div className="relative z-10 flex h-40 w-56 flex-col items-start justify-start overflow-hidden rounded-3xl bg-gray-100 md:h-[40rem] md:w-96 dark:bg-neutral-900">
      <div className="pointer-events-none absolute inset-x-0 top-0 z-30 h-full bg-gradient-to-b from-black/50 via-transparent to-transparent" />
      <BlurImage
        src={card.src}
        alt={card.title}
        className="absolute inset-0 z-10 object-cover"
      />
    </div>
  );
};

export const BlurImage = ({
  src,
  className,
  alt,
  ...rest
}: ImageProps) => {
  return (
    <Image
      className={cn("h-full w-full object-cover", className)}
      src={src as string}
      width={720}
      height={720}
      loading="lazy"
      decoding="async"
      alt={alt || "Image"}
      {...rest}
    />
  );
};
