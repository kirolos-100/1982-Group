import { X } from "react-feather"
import Image, { StaticImageData } from 'next/image';
import Bg3 from "@/../public/3.png";
import Bg1 from "@/../public/1.png";
import Bg2 from "@/../public/2.png";
import Bgs1 from "@/../public/image-PhotoRoom-1.png";
import Bgs2 from "@/../public/image-PhotoRoom-2.png";
import Play from "@/../public/Group-9.png";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";

interface ModalProps {
    open2: boolean;
    onClose: () => void;
    ImgUrl1: StaticImageData;
    children: React.ReactNode;
    header1: string;
    paragraph1: string;
    className: string;

    /* 
    */
}




const Modal2: React.FC<ModalProps> = ({ open2, onClose, ImgUrl1, children , header1 , paragraph1 , className/*  ,   */ }) => {


    useEffect(() => {
        
        if (open2) {
            document.body.classList.add("modal-open2");
        } else {
            document.body.classList.remove("modal-open2");
        }

        return () => {
            
            document.body.classList.remove("modal-open2");
        };
    }, [open2]);

    const [activeCard, setActiveCard] = useState<string | null>(null);



    return (
        // backdrop
        <div

            
            className={` 
        fixed inset-0 flex z-40   
        ${open2 ? "visible bg-black/20" : "invisible"}
        `}

        >
            
            <div
                onClick={(e) => e.stopPropagation()}
                className={`card-transition
                w-full h-screen inset-0 z-40 transition-colors 
          ${open2 ? "scale-100 opacity-100" : "scale-125 opacity-0"}
        `}

            >
                <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 z-40' onClick={onClose} />
                <div className=' '>

                    <Image src={ImgUrl1} alt="fdf" fill className="object-right object-cover  md:object-cover w-full " />



                </div>

                {/*  */}

                
                <motion.div
                    className="absolute bottom-8 left-10 top-32 z-50 md:bottom-16 md:left-32 right-8 md:top-52 "
                    onClick={onClose}
                >
                    <div className="flex flex-row items-center justify-start gap-8 mb-20 ">
                        <motion.h1 className="text-6xl concert-one-regular md:text-8xl"> {header1} </motion.h1>
                        <Image src={Play} alt="Play Icon"  className="w-10 md:w-16" />
                    </div>
                    <div className="w-11/12">
                        <motion.p className="text-white text-lg md:text-xl">
                            
                            {paragraph1}
                        </motion.p>
                    </div>
                </motion.div>
                
                
                
                
                {children}

            </div>
        </div>
    )
}
export default Modal2;



