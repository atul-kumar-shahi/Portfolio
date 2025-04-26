import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import HomepageHobbySection from "@/components/hobby/HobbyRedirectSection";
import ProjectCards from "@/components/ProjectCard";
import { TechStack } from "@/components/TechStack";


export default function Home() {
  return (
   <div>
   <HeroSection/>
   <TechStack/>
   <ProjectCards/>
   <HomepageHobbySection/>
   <Footer/>
   </div>
  );
}
