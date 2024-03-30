import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import MK1982 from "../../public/1982-copy-2-1-1.png"
import { motion } from "framer-motion";
import loogo from "../../public/logoo - Copy.png";


const HeroSection = () => {
    return (
        <section className="relative h-screen flex flex-col justify-center">
            
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-black/30 z-10"/>
                    <video className="w-full h-full object-cover" autoPlay muted loop>
                        <source src="/shutterstock_1103961009.mov"  />
                    </video>
                </div>
                

                <div className="flex flex-col items-center gap-24">
                    <motion.div className="flex flex-col items-center gap-60 "
                    initial={{ y: -100, x: "0%", opacity: 0 }}
                    animate={{ y: 0, x: "0%", opacity: 1 }}
                    
                    >
                        
                        <div className="">
                        <Image src={MK1982} alt="image" className=" w-60 md:w-80   "/>

                        </div>
                    </motion.div>

                    <motion.div className=" absolute bottom-2   md:bottom-0 right-0 p-10 " initial={{  x: "0%", opacity: 0 }}
                    animate={{  x: "0%", opacity: 1 }}
                    transition={{duration: 6, delay: 1, repeat:Infinity, repeatType:"reverse"}}>
                        <Image src={loogo} alt="image" className="w-24 md:w-32  "/>

                    </motion.div>
                    
                

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



