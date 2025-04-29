"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { appdata } from "@/data/app_cards"; // Adjust path
import Image from "next/image";

type Props = {
  id: string; // This is the id you'll pass to filter the app (e.g., "blog-app")
};

export function AppleCardsCarouselDemo({ id }: Props) {
  const app = appdata.find((app) => app.id === id);

  if (!app) {
    return (
      <div className="text-center text-red-500 font-semibold">
        App with id &quot;{id}&quot; not found.
      </div>
    );
  }

  const cards = app.screenShot.map((url, index) => ({
    category: app.title,
    title: `${app.title} - Screen ${index + 1}`,
    src: url,
    content: (
      <Image
      height={720}
      width={720}
        src={url}
        alt={`${app.title} screenshot ${index + 1}`}
        className="w-full h-auto object-contain rounded-xl"
      />
    ),
  }));

  const cardElements = cards.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full">
      <Carousel items={cardElements} />
    </div>
  );
}