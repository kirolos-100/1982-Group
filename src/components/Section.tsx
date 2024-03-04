import { motion, useScroll, useTransform } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import React, { useRef } from 'react'

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
import Play from "@/../public/Group-9.png";




/* const Section : React.FC<{
    image: StaticImageData;
    image1: StaticImageData;
    tag: string;
    title: string;
    description: string;
}> = ({image , tag , title , description , image1}) => { */

const Section = () => {

    const sectionRef = useRef(null);
    const {scrollYProgress} = useScroll({target: sectionRef,
    offset: ["start end", "end start"],
});

const y = useTransform(scrollYProgress, [0,1], ["-20%" , "10%"]);


    return (


        <>
        
        <section ref={sectionRef} className='relative h-screen overflow-hidden'>
            <motion.div className='absolute w-full h-[120%] -z-10' style={{top: y}}>
                <div className='absolute inset-0 bg-black/30 z-10'/>
                <Image src={Bg1} alt="fdf" fill className="object-right object-cover  md:object-cover w-full " />

            </motion.div>
            <div className='absolute bottom-0 left-0 gap-4 p-10'>
                <Image src={Bgs1} alt='ff' className=' w-28 ' />
                
            </div>

            <div className='absolute flex bottom-0 right-0 gap-2 p-10'>
                
                <div>
                <button className='py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'>Learn More </button>

                </div>

                <div>
                <Image src={Play} alt='ff' className=' w-10 ' />
                </div>
                
            </div>
            

        </section>

        <section ref={sectionRef} className='relative h-screen overflow-hidden'>
            <motion.div className='absolute w-full h-[120%] -z-10' style={{top: y}}>
                <div className='absolute inset-0 bg-black/30 z-10'/>
                <Image src={Bg2} alt="fdf" fill className="object-right object-cover  md:object-cover w-full " />

            </motion.div>
            <div className='absolute bottom-0 left-0 gap-4 p-10'>
                
                
                <h1 className='text-5xl' >HALA!</h1>
                

            </div>

            <div className='absolute flex bottom-0 right-0 gap-2 p-10'>
                
                <div>
                <button className='py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'>Learn More </button>

                </div>

                <div>
                <Image src={Play} alt='ff' className=' w-10 ' />
                </div>
                
            </div>

        </section>

        <section ref={sectionRef} className='relative h-screen overflow-hidden'>
            <motion.div className='absolute w-full h-[120%] -z-10' style={{top: y}}>
                <div className='absolute inset-0 bg-black/30 z-10'/>
                <Image src={Bg3} alt="fdf" fill className="object-right object-cover  md:object-cover w-full " />

            </motion.div>
            <div className='absolute bottom-0 left-0 gap-4 p-10'>
                
                
                <Image src={Bgs2} alt='ff' className=' w-16 ' />
                

            </div>

            <div className='absolute flex bottom-0 right-0 gap-2 p-10'>
                
                <div>
                <button className='py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'>Learn More </button>

                </div>

                <div>
                <Image src={Play} alt='ff' className=' w-10 ' />
                </div>
                
            </div>

        </section>
        
        </>


        

        





        /* with parallex */ 

        /* <section ref={sectionRef} className='relative h-screen overflow-hidden'>
            <motion.div className='absolute w-full h-[120%] -z-10' style={{top: y}}>
                <div className='absolute inset-0 bg-black/30 z-10'/>
                <Image src={image} alt={title} fill className="object-right object-cover  md:object-cover w-full " />

            </motion.div>
            <div className='absolute bottom-0 left-0 gap-4 p-10'>
                
                
                <Image src={image1} alt='ff' className=' w-24 ' />
                

            </div>

        </section> */




        /* Before Parallex effect */ 



        /* <section className='relative h-screen overflow-hidden'>
            <div className='absolute w-full h-[120%] -z-10'>
                <div className='absolute inset-0 bg-black/30 z-10'/>
                <Image src={image} alt={title} fill className="object-cover" />

            </div>
            <div className='flex flex-col gap-4 p-24'>
                <span className='uppercase text-sm'>{tag}</span>
                <h1 className='font-serif text-4xl max-w-[25ch]'>{title}</h1>
                <p className='max-w-[50ch]'>{description}</p>

            </div>

        </section> */

    );
};

export default Section
