import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ProjectCards from "@/components/ProjectCard";
import { TechStack } from "@/components/TechStack";


export default function Home() {
  return (
   <div>
   <HeroSection/>
   <TechStack/>
   <ProjectCards/>
   <Footer/>
   </div>
  );
}
