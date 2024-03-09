import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import MK1982 from "../../public/1982-copy-2-1-1.png"
import { motion } from "framer-motion";
import loogo from "../../public/logoo - Copy.png";


const HeroSection = () => {
    return (
        <section className="relative h-screen flex flex-col justify-center">
            <Navbar/>
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-black/30 z-10"/>
                    <video className="w-full h-full object-cover" autoPlay muted loop>
                        <source src="/shutterstock_1103961009.mov"  />
                    </video>
                </div>
                {/* Text content */}

                <div className="flex flex-col items-center gap-24">
                    <motion.div className="flex flex-col items-center gap-60 "
                    initial={{ y: -100, x: "0%", opacity: 0 }}
                    animate={{ y: 0, x: "0%", opacity: 1 }}
                    >
                        
                        <div className="">
                        <Image src={MK1982} alt="image" className=" w-80  "/>

                        </div>

                        
                        
                        
                        {/* <h1 className="text-6xl max-w-[15ch] text-center font-serif">
                            Experience the draw 
                        </h1>

                            <p>lorsdfalksdjflajsdflkj sadf</p>
                            <button className="bg-white text-black uppercase px-6 py-2 rounded-md">Stay informed</button> */}

                    </motion.div>

                    <div className=" absolute bottom-2   md:bottom-0 right-0 p-10 ">
                        <Image src={loogo} alt="image" className="w-24 md:w-32  "/>

                    </div>


                    {/* <motion.div className="flex flex-col items-center gap-8 "
                    initial={{ y: -100, x: "0%", opacity: 0 }}
                    animate={{ y: 0, x: "0%", opacity: 1 }}
                    >
                        
                        
                        <Image src={MK1982} alt="image" className=" w-20  "/>
                        
                        
                        
                    </motion.div> */}




                    {/* <div className="flex justify-between w-3/5 max-w-[900px]">

                        <HighlightItem title="Projected Range" content="Over 440 mi"/>
                            <div className="h-full w-[2px] bg-white" />
                        <HighlightItem title="Projected Range" content="Over 440 mi"/>
                            <div className="h-full w-[2px] bg-white" />

                        <HighlightItem title="Projected Range" content="Over 440 mi"/>
                            <div className="h-full w-[2px] bg-white" />

                        <HighlightItem title="Projected Range" content="Over 440 mi"/>
                            <div className="h-full w-[2px] bg-white" />
                        




                    </div> */}


                

            </div>

        </section>
    );

    
    
};

const HighlightItem: React.FC< {title: string; content : string} > = ({
    title,
    content
}) => {
    return (
        <div className="flex flex-col items-center gap-4">
            <span className="uppercase text-sm">{title}</span>
            <p className="text-2xl">{content}</p>
        </div>
    );
};

export default HeroSection;



