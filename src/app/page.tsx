import { GridBackgroundDemo } from "@/components/Background";
import Featuredcourses from "@/components/Featuredcourses";
import HeroSection from "@/components/HeroSection";
import MovingCard from "@/components/MovingCard";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import Instructors from "@/components/Instructors"
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChoseUs from "@/components/WhyChoseUs";
import { div, main } from "motion/react-client";
import Image from "next/image";
import Footer from "@/components/Footer";



export default function Home() {
  return (
    <main className="min-h-screen bg-black antialiased
    bg-grid-white/[0.02]">
     
   
     <HeroSection/>
     <Featuredcourses/>
     <WhyChoseUs/>
     <GridBackgroundDemo/>
     <UpcomingWebinars/>
     <Instructors/>
      <Footer/>
    </main>
  );
}
