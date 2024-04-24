import HeroSection from "@/components/HeroSection";
import Section from "@/components/Section";

import BgOverview from "@/../public/bg-overview.jpeg";
import BgInterior from "@/../public/bg-interior.jpeg";
import BgCharging from "@/../public/bg-charging.jpeg";
import BgConnectivity from "@/../public/bg-connectivity.jpeg";
import BgSafety from "@/../public/bg-safety.jpeg";
import Bg1 from "@/../public/1.png";
import Bg2 from "@/../public/2.png";
import Bg3 from "@/../public/3.png";
import Bgs1 from "@/../public/image-PhotoRoom-1.png";
import Bgs2 from "@/../public/image-PhotoRoom-2.png";
import Bgs3 from "@/../public/3.png";

import { useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";
import Navbar from "@/components/Navbar";



export default function Home() {
  

  const [activeCard, setActiveCard] = useState<string | null>(null);





  return (
    <main className="min-h-screen">
      
    <Navbar setActiveCard={setActiveCard}/>
    <HeroSection/>



    <Section activeCard={activeCard} />


    
    </main>
  );
}
