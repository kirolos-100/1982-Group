"use client";
import { motion, useScroll, useTransform } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import React, { useEffect, useRef, useState } from 'react'
import MK1982 from "../../public/1982-copy-2-1-1.png"
import B1982 from "../../public/Black-1982-Group.png"
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
import ExpandingCard from './ExpandingCard';
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from '@/context/active-section-context';
import Modal from './Modal';
import { Info, Trash } from 'react-feather';
import Modal1 from './Modal1';
import Modal2 from './Modal2';





interface SectionProps {
    activeCard: string | null; // Assuming activeCard is of type number or null
    
}


const Section: React.FC<SectionProps> = ({ activeCard  }) => {

   

    const { activeSection, setActiveSection } = useActiveSectionContext();


    const handleCardClick = (sectionName: string) => {
        switch (sectionName) {
            case 'Eighty-Two Productions':
            case 'HALA!':
            case '82Cinemas':
                setActiveSection(sectionName);
                break;
            default:
                console.error('Invalid section name:', sectionName);
        }
    };


    const images = ["/1.png", "/2.png", "/3.png"];
    const [selectedImage, setSelectedImage] = useState<number | null>(null);

    /* modal state */
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);


    


    /* desktop view and mobile view */

    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 768);
        };

        handleResize(); 

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    /* clicked image expanding */

    useEffect(() => {
        const activecard = document.querySelectorAll('.carddion');

        activecard.forEach(activecard => {
            activecard.addEventListener('click', () => {
                document.querySelector('.activecarddion')?.classList.remove('activecarddion');
                activecard.classList.add('activecarddion');
            })
        })

    }, [])
















    return (


        <>

        
            <section /* ref={sectionRef} */ id='eighty-two productions' className='relative h-screen overflow-hidden md:hidden'>
                <motion.div className='absolute w-full h-[120%] -z-10' /* style={{ top: y }} */>
                    <div className='absolute inset-0 bg-black/30 z-10' />
                    <Image src={Bg2} alt="fdf" fill className="object-right object-cover  md:object-cover w-full " />

                </motion.div>

                    <div className="flex flex-col items-center justify-center p-24 gap-60 "
                    
                    >
                        
                        <div className="">
                        <Image src={B1982} alt="image" className=" w-32 "/>
                        </div>
                    </div>

                <div className='absolute bottom-0 left-0 gap-4 p-10'>
                    <Image src={Bgs1} alt='ff' className=' w-28 ' />

                </div>
                <div className='absolute flex bottom-0 right-0 gap-2 p-10'>
                <div >
                    <button className='py-2.5 px-5 me-2 mb-2 text-sm font-medium focus:outline-none  rounded-full border  focus:z-10 focus:ring-4  focus:ring-gray-700 bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700' onClick={() => setOpen2(true)}>Learn More </button>

                    <div >
                    <Modal2 className='' open2={open2} onClose={() => setOpen2(false)} ImgUrl1={Bg2} header1='Eighty-Two Productions' paragraph1='Capturing Tomorrow&apos;s Stories, Today. At Eighty-Two Production, we are more than a media house; we are storytellers at the forefront of creativity. Where every frame captures the essence of innovation.'>

                                            <>
                                            </>
                                            
                                        </Modal2>
                    </div>

                </div>
                <div>
                        <Image src={Play} alt='ff' className=' w-10 ' />
                    </div>
                </div>
                


            </section>

            <section /* ref={sectionRef} */ id='hala' className='relative h-screen overflow-hidden md:hidden'>
                <motion.div className='absolute w-full h-[120%] -z-10' /* style={{ top: y }} */>
                    <div className='absolute inset-0 bg-black/30 z-10' />
                    <Image src={Bg1} alt="fdf" fill className="object-right object-cover  md:object-cover w-full " />

                </motion.div>
                <div className="flex flex-col items-center justify-center p-24 gap-60 "
                    
                    >
                        
                        <div className="">
                        <Image src={B1982} alt="image" className=" w-32 "/>
                        </div>
                    </div>


                <div className='absolute bottom-0 left-0 gap-4 p-10'>


                    <h1 className='text-5xl' >HALA!</h1>


                </div>

                <div className='absolute flex bottom-0 right-0 gap-2 p-10'>

                <div >
                    <button className='py-2.5 px-5 me-2 mb-2 text-sm font-medium focus:outline-none  rounded-full border  focus:z-10 focus:ring-4  focus:ring-gray-700 bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700' onClick={() => setOpen1(true)}>Learn More </button>

                    <div >
                    <Modal1 className='' open1={open1} onClose={() => setOpen1(false)} ImgUrl1={Bg1} header1='HALA!' paragraph1='Your Next Obsession Awaits. Dive into HALA!, the ultimate streaming haven where exclusive originals meet handpicked classics in a celebration of streamverse brilliance. Welcome to your new streaming sanctuary.'>

                                            <>
                                            </>
                                            
                                        </Modal1>
                    </div>

                </div>

                    <div>
                        <Image src={Play} alt='ff' className=' w-10 ' />
                    </div>

                </div>

            </section>

            <section /* ref={sectionRef} */ id='82cinemas' className='relative h-screen overflow-hidden  ' >

                <motion.div className='absolute w-full h-[120%] -z-10' /* style={{ top: y }} */ >
                    <div className='absolute inset-0 bg-black/30 z-10' />
                    <div className='block md:hidden'>

                        <Image src={Bg3} alt="fdf" fill className="object-right object-cover  md:object-cover w-full " />

                    </div>

                    <div className='hidden md:block '>
                        <Image src={Bg1} alt="fdf" fill className="object-right object-cover  md:object-cover w-full blur-md " />

                    </div>

                </motion.div>

                <section className=' absolute inset-0 pt-5 px-5 hidden md:block '>

                    <section className='main '>

                        <section className= {activeCard === 'Eighty-Two Productions' ? 'carddion activecarddion' : 'carddion'} onClick={()=>{handleCardClick("Eighty-Two Productions")}} >
                            <Image src={Bg2} alt='ff' className=' imageee  ' />

                            <div className="layer">
                                <div className="info ">

                                    <Image src={Bgs1} alt={'bg'} />
                                </div>
                                <div className='info-1 '>

                                    <div>
                                        <button className='py-2.5 px-5 me-2 mb-2 text-sm font-medium focus:outline-none  rounded-full border  focus:z-10 focus:ring-4  focus:ring-gray-700 bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700' onClick={() => setOpen(true)}>Learn More </button>

                                        <Modal className='' open={open} onClose={() => setOpen(false)} ImgUrl={Bg2} header='Eighty-Two Productions' paragraph='Capturing Tomorrow&apos;s Stories, Today. At Eighty-Two Production, we are more than a media house; we are storytellers at the forefront of creativity. Where every frame captures the essence of innovation.'>
                                            <>
                                            
                                            </>
                                            {/* <div className="text-center w-56">
                                                <Info size={56} className="mx-auto text-green-500" />
                                                <div className="mx-auto my-4 w-48">
                                                    <h3 className="text-lg font-black text-gray-800">Learn More</h3>
                                                    <p className="text-sm text-gray-500">
                                                        At 1982 Group, we believe in the power of storytelling to inspire, captivate, and drive change. With a passion for streamverse excellence, we bring stories to life that resonate with audiences worldwide.
                                                    </p>
                                                </div>

                                            </div> */}
                                        </Modal>

                                    </div>

                                    <div>
                                        <Image src={Play} alt='ff' className=' w-10 ' />
                                    </div>

                                </div>

                                <div className='ImageClick absolute inset-x-5 bottom-40'>
                                    <Image src={Bgs1} alt={'bg'} />
                                </div>



                            </div>

                        </section>

                        <section className= {activeCard === 'HALA!' ? 'carddion activecarddion' : 'carddion'} onClick={()=>{handleCardClick("HALA!")}} >
                            <Image src={Bg1} alt='ff' className='  imageee ' />

                            <div className="layer">
                                <div className="info">
                                    <h1 className='text-white text-7xl p-5'>HALA!</h1>

                                </div>
                                <div className='absolute flex bottom-20 right-10 gap-2 opacity-0 info-1 '>

                                    <div>
                                        <button className='py-2.5 px-5 me-2 mb-2 text-sm font-medium focus:outline-none  rounded-full border  focus:z-10 focus:ring-4  focus:ring-gray-700 bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700' onClick={() => setOpen(true)}>Learn More </button>

                                        <Modal className='' open={open} onClose={() => setOpen(false)} ImgUrl={Bg1} header='HALA!' paragraph='Your Next Obsession Awaits. Dive into HALA!, the ultimate streaming haven where exclusive originals meet handpicked classics in a celebration of streamverse brilliance. Welcome to your new streaming sanctuary.'>
                                            <>
                                            </>
                                            {/* <div className="text-center w-56">
                                                <Info size={56} className="mx-auto text-green-500" />
                                                <div className="mx-auto my-4 w-48">
                                                    <h3 className="text-lg font-black text-gray-800">Learn More</h3>
                                                    <p className="text-sm text-gray-500">
                                                        At 1982 Group, we believe in the power of storytelling to inspire, captivate, and drive change. With a passion for streamverse excellence, we bring stories to life that resonate with audiences worldwide.
                                                    </p>
                                                </div>

                                            </div> */}
                                        </Modal>

                                    </div>

                                    <div>
                                        <Image src={Play} alt='ff' className=' w-10 ' />
                                    </div>

                                </div>

                                <div className='ImageClick absolute inset-x-5 bottom-40'>
                                    <h1 className='text-7xl -rotate-90'>HALA!</h1>
                                </div>



                            </div>
                        </section>


                        <section className= {activeCard === '82Cinemas' ? 'carddion activecarddion' : 'carddion'} onClick={()=>{handleCardClick("82Cinemas")}}/* id='82Cinemas' */>
                            <Image src={Bg3} alt='ff' className='  imageee ' />

                            <div className="layer">
                                <div className="info">

                                    <Image src={Bgs2} alt={'bg'} />
                                </div>
                                <div className=' info-1 '>

                                    <div>
                                        <button className='py-2.5 px-5 me-2 mb-2 text-sm font-medium focus:outline-none  rounded-full border  focus:z-10 focus:ring-4  focus:ring-gray-700 bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700' onClick={() => setOpen(true)}>Learn More </button>

                                        <Modal className='' open={open} onClose={() => setOpen(false)} ImgUrl={Bg3} header='82Cinemas' paragraph='Experience Cinema Like Never Before. ’82Cinemas isn&apos;t just about watching movies; it&apos;s about embarking on sensory journeys. Immerse yourself in the magic of the movies, where every screening is an event.'>
                                            <>
                                            </>
                                            
                                        </Modal>

                                    </div>

                                    <div>
                                        <Image src={Play} alt='ff' className=' w-10 ' />
                                    </div>

                                </div>

                                <div className='ImageClick absolute w-3/4 inset-x-5 lg:inset-12  bottom-40 md:w-1/2 '>
                                    <Image src={Bgs2} alt={'bg'} />
                                </div>



                            </div>



                        </section>

                    </section>

                </section>

                <div className="flex flex-col items-center justify-center p-24 gap-60 md:hidden "
                    
                    >
                        
                        <div className="">
                        <Image src={B1982} alt="image" className=" w-32 "/>
                        </div>
                    </div>

                <div className='absolute bottom-0 left-0 gap-4 p-10 md:hidden'>


                    <Image src={Bgs2} alt='ff' className=' w-16 ' />


                </div>



                <div className='absolute flex bottom-0 right-0 gap-2 p-10 md:hidden'>

                <div>
                        <button className='py-2.5 px-5 me-2 mb-2 text-sm font-medium focus:outline-none  rounded-full border  focus:z-10 focus:ring-4  focus:ring-gray-700 bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700' onClick={() => setOpen(true)}>Learn More </button>
<div className='z-50'>

                                        <Modal className='' open={open} onClose={() => setOpen(false)} ImgUrl={Bg3} header='82Cinemas' paragraph='Experience Cinema Like Never Before. ’82Cinemas isn&apos;t just about watching movies; it&apos;s about embarking on sensory journeys. Immerse yourself in the magic of the movies, where every screening is an event.'>
                                            <>
                                            </>
                                            
                                        </Modal>
</div>

                                    </div>

                    <div>
                        <Image src={Play} alt='ff' className=' w-10 ' />
                    </div>

                </div>

            </section>







            








           

        </>















    );
};

export default Section
