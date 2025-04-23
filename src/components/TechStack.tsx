"use client";
import { techStack } from "@/data/tech_stack";
import { HoverEffect } from "../components/ui/card-hover-effect";
import Container from "./Wrapper";

export const TechStack = () => {
  return (
    <Container>
      <h2 className="text-3xl lg-10 font-bold lg:mb-20 sm:m-10  text-center">🛠️ Tech Stack</h2>
 <HoverEffect items={techStack}/>
    </Container>
  );
};

