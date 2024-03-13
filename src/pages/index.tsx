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


  /* useEffect(() => {
    const lenis = new Lenis();
    function raf(time: any){
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  } , []); */




  return (
    <main className="min-h-screen">
      
    <Navbar setActiveCard={setActiveCard}/>
    <HeroSection/>



    <Section activeCard={activeCard}/>


    {/* with Paraellex */} 

    {/* <Section image={Bg2}
    image1={Bgs1}
    tag="overview"
    title="elfsjdfl jslkdjf sdfjsldkj fsdkjf sdlkfjsdf"
    description="jlsdfjlsd fklsjd flksjdfkl sdjflksdj fklsdjfl ksdjflksdjflksdjf lsdkj flsdkjf sldkfjsdlk jfsdlk jfsdlkf "/>
    

    <Section image={Bg1}
    image1={Bgs1}
    tag="overview"
    title="elfsjdfl jslkdjf sdfjsldkj fsdkjf sdlkfjsdf"
    description="jlsdfjlsd fklsjd flksjdfkl sdjflksdj fklsdjfl ksdjflksdjflksdjf lsdkj flsdkjf sldkfjsdlk jfsdlk jfsdlkf "/>


<Section image={Bg3}
    image1={Bgs2}
    tag="overview"
    title="elfsjdfl jslkdjf sdfjsldkj fsdkjf sdlkfjsdf"
    description="jlsdfjlsd fklsjd flksjdfkl sdjflksdj fklsdjfl ksdjflksdjflksdjf lsdkj flsdkjf sldkfjsdlk jfsdlk jfsdlkf "/> */}


{/* <Section image={BgInterior}
    tag="overview"
    title="elfsjdfl jslkdjf sdfjsldkj fsdkjf sdlkfjsdf"
    description="jlsdfjlsd fklsjd flksjdfkl sdjflksdj fklsdjfl ksdjflksdjflksdjf lsdkj flsdkjf sldkfjsdlk jfsdlk jfsdlkf "/>

<Section image={BgSafety}
    tag="overview"
    title="elfsjdfl jslkdjf sdfjsldkj fsdkjf sdlkfjsdf"
    description="jlsdfjlsd fklsjd flksjdfkl sdjflksdj fklsdjfl ksdjflksdjflksdjf lsdkj flsdkjf sldkfjsdlk jfsdlk jfsdlkf "/> */}




      {/* <p className="text-black">Landing page with parallax smooth scroll.</p> */}
    
    </main>
  );
}
