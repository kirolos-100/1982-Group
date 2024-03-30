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
    open: boolean;
    onClose: () => void;
    ImgUrl: StaticImageData;
    children: React.ReactNode;
    header: string;
    paragraph: string;
    className: string;

    /* 
    */
}




const Modal: React.FC<ModalProps> = ({ open, onClose, ImgUrl, children , header , paragraph , className/*  ,   */ }) => {


    useEffect(() => {
        // Disable scrolling when the modal is open
        if (open) {
            document.body.classList.add("modal-open");
        } else {
            document.body.classList.remove("modal-open");
        }

        return () => {
            // Clean up when the component unmounts
            document.body.classList.remove("modal-open");
        };
    }, [open]);

    const [activeCard, setActiveCard] = useState<string | null>(null);



    return (
        // backdrop
        <div

            /* onClick={onClose} */
            className={` 
        fixed inset-0 flex  z-40   
        ${open ? "visible bg-black/20" : "invisible"}
        `}

        >
            {/* modal */}
            {/* I think transition all removed better */}
            {/* <div className="z-40" onClick={onClose}>

                <Navbar setActiveCard={setActiveCard}/>
            </div> */}
            <div
                onClick={(e) => e.stopPropagation()}
                className={`card-transition
                w-full h-screen inset-0 z-40 transition-colors 
          ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}
        `}

            >
                <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 z-40' onClick={onClose} />
                <div className=' '>

                    <Image src={ImgUrl} alt="fdf" fill className="object-right object-cover  md:object-cover w-full " />



                </div>

                {/*  */}

                
                <motion.div
                    className="absolute bottom-8 left-10 top-32 z-50 md:bottom-16 md:left-32 right-8 md:top-52 "
                    onClick={onClose}
                >
                    <div className="flex flex-row items-center justify-start gap-8 mb-20 ">
                        <motion.h1 className="text-6xl concert-one-regular md:text-8xl"> {header} </motion.h1>
                        <Image src={Play} alt="Play Icon"  className="w-10 md:w-16" />
                    </div>
                    <div className="w-11/12">
                        <motion.p className="text-white text-lg md:text-xl">
                            
                            {paragraph}
                        </motion.p>
                    </div>
                </motion.div>
                
                
                
                {/* <motion.div className='absolute bottom-52 justify-center h-screen p-5 z-50 md:p-20'
                    
                    onClick={onClose}
                >
                    <div className="absolute left-0 px-20 bottom-96 md:bottom-80">

                    <div className="flex flex-col items-center justify-center gap-8 mb-5">

                        <motion.h1 className="text-5xl md:text-8xl  "
                        
                        > HALA! </motion.h1>
                        <Image src={Play} alt='ff' className='w-12 md:w-16   ' />

                        <motion.p className=" text-white text-md md:text-xl"
                        
                        >The oldest cinema makers in Saudi Arabia. for 40 years we are leading this industry. Join now The oldest cinema makers in Saudi Arabia. for 40 years we are leading this industry. Join now The oldest cinema makers in Saudi Arabia. for 40 years we are leading this industry. Join now The oldest cinema makers in Saudi Arabia. for 40 years we are leading this industry. Join now The oldest cinema makers in Saudi Arabia. for 40 years we are leading this industry. Join now The oldest cinema makers in Saudi Arabia. for 40 years we are leading this industry. Join now  </motion.p>
                    </div>
                    
                    </div>

                    <div className="">

                        <motion.p className=" text-white text-md md:text-xl"
                        
                        >The oldest cinema makers in Saudi Arabia. for 40 years we are leading this industry. Join now The oldest cinema makers in Saudi Arabia. for 40 years we are leading this industry. Join now The oldest cinema makers in Saudi Arabia. for 40 years we are leading this industry. Join now The oldest cinema makers in Saudi Arabia. for 40 years we are leading this industry. Join now The oldest cinema makers in Saudi Arabia. for 40 years we are leading this industry. Join now The oldest cinema makers in Saudi Arabia. for 40 years we are leading this industry. Join now  </motion.p>

                    </div>

                </motion.div> */}

                
                {children}

            </div>
        </div>
    )
}
export default Modal;




{/* <div className=" absolute top-4 -right-7 gap-4 p-24 ">
                <button
                        onClick={onClose}
                        className="absolute  rounded-lg text-gray-100  z-40 hover: hover:text-gray-600"
                        title="close"
                >
                    <X />
                </button>
                </div> */}







/* 
import { X } from "react-feather"

interface ModalProps {
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
}


const Modal: React.FC<ModalProps> = ({ open, onClose, children }) => { 
    return (
        // backdrop
        <div
            onClick={onClose}
            className={`
        fixed inset-0 flex justify-center items-center transition-colors 
        ${open ? "visible bg-black/20" : "invisible"}
      `}
        >
            
            <div
                onClick={(e) => e.stopPropagation()}
                className={`
          bg-white rounded-xl shadow p-6 transition-all
          ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}
        `}
            >
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 p-1 rounded-lg text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600"
                >
                    
                    <X />
                </button>
                {children}
            </div>
        </div>
    )
}
export default Modal; */
