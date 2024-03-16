"use client";
import { motion, useScroll, useTransform } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import React, { useEffect, useRef, useState } from 'react'

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








/* second try expend soultion  */
/* const images = ["/1.png" , "/2.png" , "/3.png"]; */





/* const Section : React.FC<{
    image: StaticImageData;
    image1: StaticImageData;
    tag: string;
    title: string;
    description: string;
}> = ({image , tag , title , description , image1}) => { */



interface SectionProps {
    activeCard: string | null; // Assuming activeCard is of type number or null
}


const Section: React.FC<SectionProps> = ({ activeCard }) => {

    /* const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["-20%", "10%"]); */




    const images = ["/1.png", "/2.png", "/3.png"];
    const [selectedImage, setSelectedImage] = useState<number | null>(null);

    /* modal state */
    const [open, setOpen] = useState(false);


    


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













    /* const { ref } = useSectionInView("Home", 0.5); */



    /* click actions for expanding gallery */
    /*  const items = document.querySelectorAll('.item')

        const expand = (item, i) => {
        items.forEach((it, ind) => {
            if (i === ind) return
            it.clicked = false
        })
        gsap.to(items, {
            width: item.clicked ? '15vw' : '8vw',
            duration: 2,
            ease: 'elastic(1, .6)'
        })
        
        item.clicked = !item.clicked
        gsap.to(item, {
            width: item.clicked ? '42vw' : '15vw',
            duration: 2.5,
            ease: 'elastic(1, .3)'
        })
        }

        items.forEach((item, i) => {
        item.clicked = false
        item.addEventListener('click', () => expand(item, i))
        })
 */






    /* thrid  */
    /*     const images = [
            { src: '/1.png', alt: 'Image 1' },
            { src: '/2.png', alt: 'Image 2' },
            { src: '/3.png', alt: 'Image 3' },
        ];
    
    
        const [expandedIndex, setExpandedIndex] = useState<number | null>(null); */





    /* second try expend soultion  */
    /* const [selectedImage, setSelectedImage] = useState<number | null>(null);


    const handleImageClick = (index:number) => {
        setSelectedImage(index);
    };

    const handleCloseImage = () => {
        setSelectedImage(null);
    }; */




    /* solution try for responsive */
    /* 
        const [isMobile, setIsMobile] = useState(false);
    
        useEffect(() => {
            // Function to check if screen size is mobile
            const checkMobileScreen = () => {
                setIsMobile(window.innerWidth < 768); // Adjust the breakpoint as needed
            };
    
            // Check initial screen size
            checkMobileScreen();
    
            // Listen for window resize events
            window.addEventListener('resize', checkMobileScreen);
    
            // Clean up event listener
            return () => {
                window.removeEventListener('resize', checkMobileScreen);
            };
        }, []); */




    return (


        <>

            {/* Desktop & Mobile */} 
            {/* {isDesktop ? (

                <section  id='82production' className='relative h-screen overflow-hidden  ' >

                <motion.div className='absolute w-full h-[120%] -z-10'  >
                    <div className='absolute inset-0 bg-black/30 z-10' />
                    <div className='block md:hidden'>

                        <Image src={Bg3} alt="fdf" fill className="object-right object-cover  md:object-cover w-full " />

                    </div>

                    <div className='hidden md:block '>
                        <Image src={Bg1} alt="fdf" fill className="object-right object-cover  md:object-cover w-full blur-md " />

                    </div>

                </motion.div>

                <div className=' absolute inset-0 pt-2 px-5 hidden md:block '>

                    <div className='main '>

                        <div className='carddion activecarddion ' id='82 Production'>
                            <Image src={Bg1} alt='ff' className=' imageee ' />

                            <div className="layer">
                                <div className="info ">

                                    <Image src={Bgs1} alt={'bg'} />
                                </div>
                                <div className='info-1'>

                                    <div>
                                        <button className='py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700' onClick={() => setOpen(true)}>Learn More </button>

                                        <Modal open={open} onClose={() => setOpen(false)}>
                                            <div className="text-center w-56">
                                                <Info size={56} className="mx-auto text-green-500" />
                                                <div className="mx-auto my-4 w-48">
                                                    <h3 className="text-lg font-black text-gray-800">Learn More</h3>
                                                    <p className="text-sm text-gray-500">
                                                        At 1982 Group, we believe in the power of storytelling to inspire, captivate, and drive change. With a passion for cinematic excellence, we bring stories to life that resonate with audiences worldwide.
                                                    </p>
                                                </div>

                                            </div>
                                        </Modal>

                                    </div>

                                    <div>
                                        <Image src={Play} alt='ff' className=' w-10 ' />
                                    </div>

                                </div>



                            </div>

                        </div>

                        <div className='carddion' id='HALA!'>
                            <Image src={Bg2} alt='ff' className='  imageee ' />

                            <div className="layer">
                                <div className="info">
                                    <h1 className='text-white text-7xl p-5'>HALA!</h1>

                                </div>
                                <div className='absolute flex bottom-20 right-10 gap-2 opacity-0 info-1'>

                                    <div>
                                        <button className='py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700' onClick={() => setOpen(true)}>Learn More </button>

                                        <Modal open={open} onClose={() => setOpen(false)}>
                                            <div className="text-center w-56">
                                                <Info size={56} className="mx-auto text-green-500" />
                                                <div className="mx-auto my-4 w-48">
                                                    <h3 className="text-lg font-black text-gray-800">Learn More</h3>
                                                    <p className="text-sm text-gray-500">
                                                        At 1982 Group, we believe in the power of storytelling to inspire, captivate, and drive change. With a passion for cinematic excellence, we bring stories to life that resonate with audiences worldwide.
                                                    </p>
                                                </div>

                                            </div>
                                        </Modal>

                                    </div>

                                    <div>
                                        <Image src={Play} alt='ff' className=' w-10 ' />
                                    </div>

                                </div>



                            </div>
                        </div>


                        <div className='carddion' id='82 cinemas'>
                            <Image src={Bg3} alt='ff' className='  imageee ' />

                            <div className="layer">
                                <div className="info">

                                    <Image src={Bgs2} alt={'bg'} />
                                </div>
                                <div className='absolute flex bottom-20 right-10 gap-2 opacity-0 info-1'>

                                    <div>
                                        <button className='py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700' onClick={() => setOpen(true)}>Learn More </button>

                                        <Modal open={open} onClose={() => setOpen(false)}>
                                            <div className="text-center w-56">
                                                <Info size={56} className="mx-auto text-green-500" />
                                                <div className="mx-auto my-4 w-48">
                                                    <h3 className="text-lg font-black text-gray-800">Learn More</h3>
                                                    <p className="text-sm text-gray-500">
                                                        At 1982 Group, we believe in the power of storytelling to inspire, captivate, and drive change. With a passion for cinematic excellence, we bring stories to life that resonate with audiences worldwide.
                                                    </p>
                                                </div>

                                            </div>
                                        </Modal>

                                    </div>

                                    <div>
                                        <Image src={Play} alt='ff' className=' w-10 ' />
                                    </div>

                                </div>



                            </div>



                        </div>

                    </div>

                </div>


                <div className='absolute bottom-0 left-0 gap-4 p-10 md:hidden'>


                    <Image src={Bgs2} alt='ff' className=' w-16 ' />


                </div>



                <div className='absolute flex bottom-0 right-0 gap-2 p-10 md:hidden'>

                    <div>
                        <button className='py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700' onClick={() => setOpen(true)}>Learn More </button>

                        <Modal open={open} onClose={() => setOpen(false)}>
                            <div className="text-center w-56">
                                <Info size={56} className="mx-auto text-green-500" />
                                <div className="mx-auto my-4 w-48">
                                    <h3 className="text-lg font-black text-gray-800">Learn More</h3>
                                    <p className="text-sm text-gray-500">
                                        At 1982 Group, we believe in the power of storytelling to inspire, captivate, and drive change. With a passion for cinematic excellence, we bring stories to life that resonate with audiences worldwide.
                                    </p>
                                </div>

                            </div>
                        </Modal>



                    </div>

                    <div>
                        <Image src={Play} alt='ff' className=' w-10 ' />
                    </div>

                </div>

                </section>



            ):
            (
                <>

                <section  id='82production' className='relative h-screen overflow-hidden md:hidden'>
                <motion.div className='absolute w-full h-[120%] -z-10' >
                    <div className='absolute inset-0 bg-black/30 z-10' />
                    <Image src={Bg1} alt="fdf" fill className="object-right object-cover  md:object-cover w-full " />

                </motion.div>
                <div className='absolute bottom-0 left-0 gap-4 p-10'>
                    <Image src={Bgs1} alt='ff' className=' w-28 ' />

                </div>

                <div className='absolute flex bottom-0 right-0 gap-2 p-10'>

                    <div>
                        <button className='py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700' onClick={() => setOpen(true)}>Learn More </button>

                        <Modal open={open} onClose={() => setOpen(false)}>
                            <div className="text-center w-56">
                                <Info size={56} className="mx-auto text-green-500" />
                                <div className="mx-auto my-4 w-48">
                                    <h3 className="text-lg font-black text-gray-800">Learn More</h3>
                                    <p className="text-sm text-gray-500">
                                        At 1982 Group, we believe in the power of storytelling to inspire, captivate, and drive change. With a passion for cinematic excellence, we bring stories to life that resonate with audiences worldwide.
                                    </p>
                                </div>

                            </div>
                        </Modal>

                    </div>

                    <div>
                        <Image src={Play} alt='ff' className=' w-10 ' />
                    </div>

                </div>


                </section>



                <section  id='hala' className='relative h-screen overflow-hidden md:hidden'>
                    <motion.div className='absolute w-full h-[120%] -z-10' >
                        <div className='absolute inset-0 bg-black/30 z-10' />
                        <Image src={Bg2} alt="fdf" fill className="object-right object-cover  md:object-cover w-full " />

                    </motion.div>
                    <div className='absolute bottom-0 left-0 gap-4 p-10'>


                        <h1 className='text-5xl' >HALA!</h1>


                    </div>

                    <div className='absolute flex bottom-0 right-0 gap-2 p-10'>

                        <div>
                            <button className='py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700' onClick={() => setOpen(true)}>Learn More </button>

                            <Modal open={open} onClose={() => setOpen(false)}>
                                <div className="text-center w-56">
                                    <Info size={56} className="mx-auto text-green-500" />
                                    <div className="mx-auto my-4 w-48">
                                        <h3 className="text-lg font-black text-gray-800">Learn More</h3>
                                        <p className="text-sm text-gray-500">
                                            At 1982 Group, we believe in the power of storytelling to inspire, captivate, and drive change. With a passion for cinematic excellence, we bring stories to life that resonate with audiences worldwide.
                                        </p>
                                    </div>

                                </div>
                            </Modal>

                        </div>

                        <div>
                            <Image src={Play} alt='ff' className=' w-10 ' />
                        </div>

                    </div>

                </section>

                <section  id='82cinemas' className='relative h-screen overflow-hidden  ' >

                <motion.div className='absolute w-full h-[120%] -z-10'  >
                    <div className='absolute inset-0 bg-black/30 z-10' />
                    <div className='block md:hidden'>

                        <Image src={Bg3} alt="fdf" fill className="object-right object-cover  md:object-cover w-full " />

                    </div>

                    <div className='hidden md:block '>
                        <Image src={Bg1} alt="fdf" fill className="object-right object-cover  md:object-cover w-full blur-md " />

                    </div>

                </motion.div>

                

                <div className='absolute bottom-0 left-0 gap-4 p-10 md:hidden'>


                    <Image src={Bgs2} alt='ff' className=' w-16 ' />


                </div>



                <div className='absolute flex bottom-0 right-0 gap-2 p-10 md:hidden'>

                    <div>
                        <button className='py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700' onClick={() => setOpen(true)}>Learn More </button>

                        <Modal open={open} onClose={() => setOpen(false)}>
                            <div className="text-center w-56">
                                <Info size={56} className="mx-auto text-green-500" />
                                <div className="mx-auto my-4 w-48">
                                    <h3 className="text-lg font-black text-gray-800">Learn More</h3>
                                    <p className="text-sm text-gray-500">
                                        At 1982 Group, we believe in the power of storytelling to inspire, captivate, and drive change. With a passion for cinematic excellence, we bring stories to life that resonate with audiences worldwide.
                                    </p>
                                </div>

                            </div>
                        </Modal>



                    </div>

                    <div>
                        <Image src={Play} alt='ff' className=' w-10 ' />
                    </div>

                </div>

                </section>

                </>


            )} */}




            <section /* ref={sectionRef} */ id='82production' className='relative h-screen overflow-hidden md:hidden'>
                <motion.div className='absolute w-full h-[120%] -z-10' /* style={{ top: y }} */>
                    <div className='absolute inset-0 bg-black/30 z-10' />
                    <Image src={Bg2} alt="fdf" fill className="object-right object-cover  md:object-cover w-full " />

                </motion.div>
                <div className='absolute bottom-0 left-0 gap-4 p-10'>
                    <Image src={Bgs1} alt='ff' className=' w-28 ' />

                </div>

                <div className='absolute flex bottom-0 right-0 gap-2 p-10'>

                    {/* <div>
                        <button className='py-2.5 px-5 me-2 mb-2 text-sm font-medium focus:outline-none  rounded-full border  focus:z-10 focus:ring-4  focus:ring-gray-700 bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700' onClick={() => setOpen(true)}>Learn More </button>

                        <Modal open={open} onClose={() => setOpen(false)} ImgUrl={Bg2} header='82 Production' paragraph='The oldest cinema makers in Saudi Arabia. For 40 years, we have been leading this industry.
                        Join now.'>
                            <></>
                        </Modal>

                    </div>

                    <div>
                        <Image src={Play} alt='ff' className=' w-10 ' />
                    </div> */}

                </div>


            </section>

            <section /* ref={sectionRef} */ id='hala' className='relative h-screen overflow-hidden md:hidden'>
                <motion.div className='absolute w-full h-[120%] -z-10' /* style={{ top: y }} */>
                    <div className='absolute inset-0 bg-black/30 z-10' />
                    <Image src={Bg1} alt="fdf" fill className="object-right object-cover  md:object-cover w-full " />

                </motion.div>
                <div className='absolute bottom-0 left-0 gap-4 p-10'>


                    <h1 className='text-5xl' >HALA!</h1>


                </div>

                {/* <div className='absolute flex bottom-0 right-0 gap-2 p-10'>

                    <div>
                        <button className='py-2.5 px-5 me-2 mb-2 text-sm font-medium focus:outline-none  rounded-full border  focus:z-10 focus:ring-4  focus:ring-gray-700 bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700' onClick={() => setOpen(true)}>Learn More </button>

                        <Modal open={open} onClose={() => setOpen(false)} ImgUrl={Bg1} header='HALA!' paragraph='The oldest cinema makers in Saudi Arabia. For 40 years, we have been leading this industry.
                        Join now.'>
                            <>
                            </>
                            
                        </Modal>

                    </div>

                    <div>
                        <Image src={Play} alt='ff' className=' w-10 ' />
                    </div>

                </div> */}

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

                        <section className= {activeCard === '82 Production' ? 'carddion activecarddion' : 'carddion'} /* id='82 Production' */>
                            <Image src={Bg2} alt='ff' className=' imageee  ' />

                            <div className="layer">
                                <div className="info ">

                                    <Image src={Bgs1} alt={'bg'} />
                                </div>
                                <div className='info-1'>

                                    <div>
                                        <button className='py-2.5 px-5 me-2 mb-2 text-sm font-medium focus:outline-none  rounded-full border  focus:z-10 focus:ring-4  focus:ring-gray-700 bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700' onClick={() => setOpen(true)}>Learn More </button>

                                        <Modal open={open} onClose={() => setOpen(false)} ImgUrl={Bg2} header='82 Production' paragraph='The oldest cinema makers in Saudi Arabia. For 40 years, we have been leading this industry.
                                        Join now.'>
                                            <>
                                            
                                            </>
                                            {/* <div className="text-center w-56">
                                                <Info size={56} className="mx-auto text-green-500" />
                                                <div className="mx-auto my-4 w-48">
                                                    <h3 className="text-lg font-black text-gray-800">Learn More</h3>
                                                    <p className="text-sm text-gray-500">
                                                        At 1982 Group, we believe in the power of storytelling to inspire, captivate, and drive change. With a passion for cinematic excellence, we bring stories to life that resonate with audiences worldwide.
                                                    </p>
                                                </div>

                                            </div> */}
                                        </Modal>

                                    </div>

                                    <div>
                                        <Image src={Play} alt='ff' className=' w-10 ' />
                                    </div>

                                </div>



                            </div>

                        </section>

                        <section className= {activeCard === 'HALA!' ? 'carddion activecarddion' : 'carddion'} /* id='HALA!' */>
                            <Image src={Bg1} alt='ff' className='  imageee ' />

                            <div className="layer">
                                <div className="info">
                                    <h1 className='text-white text-7xl p-5'>HALA!</h1>

                                </div>
                                <div className='absolute flex bottom-20 right-10 gap-2 opacity-0 info-1'>

                                    <div>
                                        <button className='py-2.5 px-5 me-2 mb-2 text-sm font-medium focus:outline-none  rounded-full border  focus:z-10 focus:ring-4  focus:ring-gray-700 bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700' onClick={() => setOpen(true)}>Learn More </button>

                                        <Modal open={open} onClose={() => setOpen(false)} ImgUrl={Bg1} header='HALA!' paragraph='The oldest cinema makers in Saudi Arabia. For 40 years, we have been leading this industry.
                                        Join now.'>
                                            <>
                                            </>
                                            {/* <div className="text-center w-56">
                                                <Info size={56} className="mx-auto text-green-500" />
                                                <div className="mx-auto my-4 w-48">
                                                    <h3 className="text-lg font-black text-gray-800">Learn More</h3>
                                                    <p className="text-sm text-gray-500">
                                                        At 1982 Group, we believe in the power of storytelling to inspire, captivate, and drive change. With a passion for cinematic excellence, we bring stories to life that resonate with audiences worldwide.
                                                    </p>
                                                </div>

                                            </div> */}
                                        </Modal>

                                    </div>

                                    <div>
                                        <Image src={Play} alt='ff' className=' w-10 ' />
                                    </div>

                                </div>



                            </div>
                        </section>


                        <section className= {activeCard === '82 cinemas' ? 'carddion activecarddion' : 'carddion'} /* id='82 cinemas' */>
                            <Image src={Bg3} alt='ff' className='  imageee ' />

                            <div className="layer">
                                <div className="info">

                                    <Image src={Bgs2} alt={'bg'} />
                                </div>
                                <div className='absolute flex bottom-20 right-10 gap-2 opacity-0 info-1'>

                                    <div>
                                        <button className='py-2.5 px-5 me-2 mb-2 text-sm font-medium focus:outline-none  rounded-full border  focus:z-10 focus:ring-4  focus:ring-gray-700 bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700' onClick={() => setOpen(true)}>Learn More </button>

                                        <Modal open={open} onClose={() => setOpen(false)} ImgUrl={Bg3} header='82 Cinemas' paragraph='The oldest cinema makers in Saudi Arabia. For 40 years, we have been leading this industry.
                                        Join now.'>
                                            <>
                                            </>
                                            {/* <div className="text-center w-56">
                                                <Info size={56} className="mx-auto text-green-500" />
                                                <div className="mx-auto my-4 w-48">
                                                    <h3 className="text-lg font-black text-gray-800">Learn More</h3>
                                                    <p className="text-sm text-gray-500">
                                                        At 1982 Group, we believe in the power of storytelling to inspire, captivate, and drive change. With a passion for cinematic excellence, we bring stories to life that resonate with audiences worldwide.
                                                    </p>
                                                </div>

                                            </div> */}
                                        </Modal>

                                    </div>

                                    <div>
                                        <Image src={Play} alt='ff' className=' w-10 ' />
                                    </div>

                                </div>



                            </div>



                        </section>

                    </section>

                </section>


                <div className='absolute bottom-0 left-0 gap-4 p-10 md:hidden'>


                    <Image src={Bgs2} alt='ff' className=' w-16 ' />


                </div>



                {/* <div className='absolute flex bottom-0 right-0 gap-2 p-10 md:hidden'>

                    <div>
                        <button className='py-2.5 px-5 me-2 mb-2 text-sm font-medium focus:outline-none  rounded-full border  focus:z-10 focus:ring-4  focus:ring-gray-700 bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700' onClick={() => setOpen(true)}>Learn More </button>
                        <Modal open={open} onClose={() => setOpen(false)} ImgUrl={Bg3} header='82 Cinemas' paragraph='The oldest cinema makers in Saudi Arabia. For 40 years, we have been leading this industry.
                        Join now.'>
                            <>
                            </>
                        </Modal>

                        
                    </div>

                    <div>
                        <Image src={Play} alt='ff' className=' w-10 ' />
                    </div>

                </div> */}

            </section>















            {/* <section ref={sectionRef} className='relative h-screen overflow-hidden '>
                
                <motion.div className='absolute w-full h-[120%] -z-10' style={{ top: y }}>
                    <div className='absolute inset-0 bg-black/30 z-10' />
                    <div className='block md:hidden'>

                    <Image src={Bg3} alt="fdf" fill className="object-right object-cover  md:object-cover w-full " />

                    </div>

                    <div className='hidden md:block'>
                    <Image src={Bg1} alt="fdf" fill className="object-right object-cover  md:object-cover w-full " />

                    </div>

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

            </section> */}

            {/* hover effect  */}


            {/* <section ref={sectionRef} className='relative h-screen overflow-hidden  ' >

                <motion.div className='absolute w-full h-[120%] -z-10' style={{ top: y }} >
                    <div className='absolute inset-0 bg-black/30 z-10' />
                    <div className='block md:hidden'>

                        <Image src={Bg3} alt="fdf" fill className="object-right object-cover  md:object-cover w-full " />

                    </div>

                    <div className='hidden md:block '>
                        <Image src={Bg1} alt="fdf" fill className="object-right object-cover  md:object-cover w-full blur-md " />

                    </div>

                </motion.div>

                <div className=' absolute inset-0 pt-24 px-5 hidden md:block '>

                    <div className='main '>

                        <div className='carddion  '>
                            <Image src={Bg1} alt='ff' className=' imageee  ' />

                            <div className="layer">
                                <div className="info">
                                    
                                    <Image src={Bgs1} alt={'bg'} />
                                </div>
                                <div className='absolute flex bottom-20 right-10 gap-2 opacity-0 info-1'>

                                    <div>
                                        <button className='py-2.5 px-5 me-2 mb-2 text-sm font-medium focus:outline-none  rounded-full border  focus:z-10 focus:ring-4  focus:ring-gray-700 bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700' onClick={() => setOpen(true)}>Learn More </button>

                                        <Modal open={open} onClose={() => setOpen(false)}>
                                            <div className="text-center w-56">
                                                <Info size={56} className="mx-auto text-green-500" />
                                                <div className="mx-auto my-4 w-48">
                                                    <h3 className="text-lg font-black text-gray-800">Learn More</h3>
                                                    <p className="text-sm text-gray-500">
                                                        At 1982 Group, we believe in the power of storytelling to inspire, captivate, and drive change. With a passion for cinematic excellence, we bring stories to life that resonate with audiences worldwide.
                                                    </p>
                                                </div>
                                                
                                            </div>
                                        </Modal>

                                    </div>

                                    <div>
                                        <Image src={Play} alt='ff' className=' w-10 ' />
                                    </div>

                                </div>



                            </div>

                        </div>

                        <div className='carddion'>
                            <Image src={Bg2} alt='ff' className='  imageee ' />

                            <div className="layer">
                                <div className="info">
                                    <h1 className='text-white text-7xl'>HALA!</h1>
                                    
                                </div>
                                <div className='absolute flex bottom-20 right-10 gap-2 opacity-0 info-1'>

                                    <div>
                                        <button className='py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700' onClick={() => setOpen(true)}>Learn More </button>

                                        <Modal open={open} onClose={() => setOpen(false)}>
                                            <div className="text-center w-56">
                                                <Info size={56} className="mx-auto text-green-500" />
                                                <div className="mx-auto my-4 w-48">
                                                    <h3 className="text-lg font-black text-gray-800">Learn More</h3>
                                                    <p className="text-sm text-gray-500">
                                                        At 1982 Group, we believe in the power of storytelling to inspire, captivate, and drive change. With a passion for cinematic excellence, we bring stories to life that resonate with audiences worldwide.
                                                    </p>
                                                </div>
                                                
                                            </div>
                                        </Modal>

                                    </div>

                                    <div>
                                        <Image src={Play} alt='ff' className=' w-10 ' />
                                    </div>

                                </div>



                            </div>
                        </div>


                        <div className='carddion'>
                            <Image src={Bg3} alt='ff' className='  imageee ' />

                            <div className="layer">
                                <div className="info">
                                    
                                    <Image src={Bgs2} alt={'bg'} />
                                </div>
                                <div className='absolute flex bottom-20 right-10 gap-2 opacity-0 info-1'>

                                    <div>
                                        <button className='py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700' onClick={() => setOpen(true)}>Learn More </button>

                                        <Modal open={open} onClose={() => setOpen(false)}>
                                            <div className="text-center w-56">
                                                <Info size={56} className="mx-auto text-green-500" />
                                                <div className="mx-auto my-4 w-48">
                                                    <h3 className="text-lg font-black text-gray-800">Learn More</h3>
                                                    <p className="text-sm text-gray-500">
                                                        At 1982 Group, we believe in the power of storytelling to inspire, captivate, and drive change. With a passion for cinematic excellence, we bring stories to life that resonate with audiences worldwide.
                                                    </p>
                                                </div>
                                                
                                            </div>
                                        </Modal>

                                    </div>

                                    <div>
                                        <Image src={Play} alt='ff' className=' w-10 ' />
                                    </div>

                                </div>



                            </div>



                        </div>

                    </div>

                </div>


                <div className='absolute bottom-0 left-0 gap-4 p-10 md:hidden'>


                    <Image src={Bgs2} alt='ff' className=' w-16 ' />


                </div>



                <div className='absolute flex bottom-0 right-0 gap-2 p-10 md:hidden'>

                    <div>
                        <button className='py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'>Learn More </button>

                    </div>

                    <div>
                        <Image src={Play} alt='ff' className=' w-10 ' />
                    </div>

                </div>

            </section> */}





            {/* click effect & parallex effect*/}


            {/* <section ref={sectionRef} id='82production' className='relative h-screen overflow-hidden md:hidden'>
                <motion.div className='absolute w-full h-[120%] -z-10' style={{ top: y }}>
                    <div className='absolute inset-0 bg-black/30 z-10' />
                    <Image src={Bg1} alt="fdf" fill className="object-right object-cover  md:object-cover w-full " />

                </motion.div>
                <div className='absolute bottom-0 left-0 gap-4 p-10'>
                    <Image src={Bgs1} alt='ff' className=' w-28 ' />

                </div>

                <div className='absolute flex bottom-0 right-0 gap-2 p-10'>

                    <div>
                        <button className='py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700' onClick={() => setOpen(true)}>Learn More </button>

                        <Modal open={open} onClose={() => setOpen(false)}>
                            <div className="text-center w-56">
                                <Info size={56} className="mx-auto text-green-500" />
                                <div className="mx-auto my-4 w-48">
                                    <h3 className="text-lg font-black text-gray-800">Learn More</h3>
                                    <p className="text-sm text-gray-500">
                                        At 1982 Group, we believe in the power of storytelling to inspire, captivate, and drive change. With a passion for cinematic excellence, we bring stories to life that resonate with audiences worldwide.
                                    </p>
                                </div>

                            </div>
                        </Modal>

                    </div>

                    <div>
                        <Image src={Play} alt='ff' className=' w-10 ' />
                    </div>

                </div>


            </section>



            <section ref={sectionRef} id='hala' className='relative h-screen overflow-hidden md:hidden'>
                <motion.div className='absolute w-full h-[120%] -z-10' style={{ top: y }}>
                    <div className='absolute inset-0 bg-black/30 z-10' />
                    <Image src={Bg2} alt="fdf" fill className="object-right object-cover  md:object-cover w-full " />

                </motion.div>
                <div className='absolute bottom-0 left-0 gap-4 p-10'>


                    <h1 className='text-5xl' >HALA!</h1>


                </div>

                <div className='absolute flex bottom-0 right-0 gap-2 p-10'>

                    <div>
                        <button className='py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700' onClick={() => setOpen(true)}>Learn More </button>

                        <Modal open={open} onClose={() => setOpen(false)}>
                            <div className="text-center w-56">
                                <Info size={56} className="mx-auto text-green-500" />
                                <div className="mx-auto my-4 w-48">
                                    <h3 className="text-lg font-black text-gray-800">Learn More</h3>
                                    <p className="text-sm text-gray-500">
                                        At 1982 Group, we believe in the power of storytelling to inspire, captivate, and drive change. With a passion for cinematic excellence, we bring stories to life that resonate with audiences worldwide.
                                    </p>
                                </div>

                            </div>
                        </Modal>

                    </div>

                    <div>
                        <Image src={Play} alt='ff' className=' w-10 ' />
                    </div>

                </div>

            </section>



            <section ref={sectionRef} id='82cinemas' className='relative h-screen overflow-hidden  ' >

                <motion.div className='absolute w-full h-[120%] -z-10' style={{ top: y }} >
                    <div className='absolute inset-0 bg-black/30 z-10' />
                    <div className='block md:hidden'>

                        <Image src={Bg3} alt="fdf" fill className="object-right object-cover  md:object-cover w-full " />

                    </div>

                    <div className='hidden md:block '>
                        <Image src={Bg1} alt="fdf" fill className="object-right object-cover  md:object-cover w-full blur-md " />

                    </div>

                </motion.div>

                <section className=' absolute inset-0 pt-2 px-5 hidden md:block '>

                    <section className='main '>

                        <section className='carddion activecarddion ' >
                            <Image src={Bg1} alt='ff' className=' imageee  ' />

                            <div className="layer">
                                <div className="info ">

                                    <Image src={Bgs1} alt={'bg'} />
                                </div>
                                <div className='info-1'>

                                    <div>
                                        <button className='py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700' onClick={() => setOpen(true)}>Learn More </button>

                                        <Modal open={open} onClose={() => setOpen(false)}>
                                            <div className="text-center w-56">
                                                <Info size={56} className="mx-auto text-green-500" />
                                                <div className="mx-auto my-4 w-48">
                                                    <h3 className="text-lg font-black text-gray-800">Learn More</h3>
                                                    <p className="text-sm text-gray-500">
                                                        At 1982 Group, we believe in the power of storytelling to inspire, captivate, and drive change. With a passion for cinematic excellence, we bring stories to life that resonate with audiences worldwide.
                                                    </p>
                                                </div>

                                            </div>
                                        </Modal>

                                    </div>

                                    <div>
                                        <Image src={Play} alt='ff' className=' w-10 ' />
                                    </div>

                                </div>



                            </div>

                        </section>

                        <section className='carddion' >
                            <Image src={Bg2} alt='ff' className='  imageee ' />

                            <div className="layer">
                                <div className="info">
                                    <h1 className='text-white text-7xl p-5'>HALA!</h1>

                                </div>
                                <div className='absolute flex bottom-20 right-10 gap-2 opacity-0 info-1'>

                                    <div>
                                        <button className='py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700' onClick={() => setOpen(true)}>Learn More </button>

                                        <Modal open={open} onClose={() => setOpen(false)}>
                                            <div className="text-center w-56">
                                                <Info size={56} className="mx-auto text-green-500" />
                                                <div className="mx-auto my-4 w-48">
                                                    <h3 className="text-lg font-black text-gray-800">Learn More</h3>
                                                    <p className="text-sm text-gray-500">
                                                        At 1982 Group, we believe in the power of storytelling to inspire, captivate, and drive change. With a passion for cinematic excellence, we bring stories to life that resonate with audiences worldwide.
                                                    </p>
                                                </div>

                                            </div>
                                        </Modal>

                                    </div>

                                    <div>
                                        <Image src={Play} alt='ff' className=' w-10 ' />
                                    </div>

                                </div>



                            </div>
                        </section>


                        <section className='carddion' >
                            <Image src={Bg3} alt='ff' className='  imageee ' />

                            <div className="layer">
                                <div className="info">

                                    <Image src={Bgs2} alt={'bg'} />
                                </div>
                                <div className='absolute flex bottom-20 right-10 gap-2 opacity-0 info-1'>

                                    <div>
                                        <button className='py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700' onClick={() => setOpen(true)}>Learn More </button>

                                        <Modal open={open} onClose={() => setOpen(false)}>
                                            <div className="text-center w-56">
                                                <Info size={56} className="mx-auto text-green-500" />
                                                <div className="mx-auto my-4 w-48">
                                                    <h3 className="text-lg font-black text-gray-800">Learn More</h3>
                                                    <p className="text-sm text-gray-500">
                                                        At 1982 Group, we believe in the power of storytelling to inspire, captivate, and drive change. With a passion for cinematic excellence, we bring stories to life that resonate with audiences worldwide.
                                                    </p>
                                                </div>

                                            </div>
                                        </Modal>

                                    </div>

                                    <div>
                                        <Image src={Play} alt='ff' className=' w-10 ' />
                                    </div>

                                </div>



                            </div>



                        </section>

                    </section>

                </section>


                <div className='absolute bottom-0 left-0 gap-4 p-10 md:hidden'>


                    <Image src={Bgs2} alt='ff' className=' w-16 ' />


                </div>



                <div className='absolute flex bottom-0 right-0 gap-2 p-10 md:hidden'>

                    <div>
                        <button className='py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700' onClick={() => setOpen(true)}>Learn More </button>

                        <Modal open={open} onClose={() => setOpen(false)}>
                            <div className="text-center w-56">
                                <Info size={56} className="mx-auto text-green-500" />
                                <div className="mx-auto my-4 w-48">
                                    <h3 className="text-lg font-black text-gray-800">Learn More</h3>
                                    <p className="text-sm text-gray-500">
                                        At 1982 Group, we believe in the power of storytelling to inspire, captivate, and drive change. With a passion for cinematic excellence, we bring stories to life that resonate with audiences worldwide.
                                    </p>
                                </div>

                            </div>
                        </Modal>



                    </div>

                    <div>
                        <Image src={Play} alt='ff' className=' w-10 ' />
                    </div>

                </div>

            </section> */} 











            {/* 
            <section ref={sectionRef} className='relative overflow-hidden gap-4 w-11/12 h-screen'>
                
                <motion.div className='absolute h-[120%] w-1/5 overflow-hidden cursor-pointer rounded-2xl hover:w-4/5' style={{ top: y }}>
                    
                    
                    <Image src={Bg3} alt="fdf" fill className="w-full h-full object-cover hover:scale-125" />

                </motion.div>
                <motion.div className='absolute h-[120%] w-1/5 overflow-hidden cursor-pointer rounded-2xl hover:w-4/5' style={{ top: y }}>
                    
                    
                    <Image src={Bg3} alt="fdf" fill className="w-full h-full object-cover hover:scale-125" />

                </motion.div>





            </section> */}



























            {/* <section ref={sectionRef} className='relative h-screen overflow-hidden '>
                <div className="flex">
                    {images.map((image, index) => (
                        <motion.img
                            key={index}
                            src={image}
                            alt={`Image ${index + 1}`}
                            className="w-32 h-32 m-2 cursor-pointer"
                            onClick={() => setSelectedImage(index)}
                            initial={{ opacity: 1, scale: 1 }}
                            animate={{
                                opacity: selectedImage === index ? 1 : 0.5,
                                scale: selectedImage === index ? 1.2 : 1
                            }}
                            transition={{ duration: 0.5 }}
                        />
                    ))}
                </div>
                {selectedImage !== null && (
                    <motion.div
                        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
                        onClick={() => setSelectedImage(null)}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <motion.img
                            src={images[selectedImage]}
                            alt={`Image ${selectedImage + 1}`}
                            className="max-w-full max-h-full"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.5 }}
                        />
                    </motion.div>
                )}
            </section> */}




















            {/* 
            thrid chance 

            <section className="relative h-screen overflow-hidden flex items-center justify-center">
                {images.map((image, index) => (
                    <motion.div
                        key={index}
                        className="absolute inset-0 flex items-center justify-center"
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 1 }}
                        onClick={() => setExpandedIndex(index)}
                    >
                        <Image src={image.src} alt={image.alt} layout="fill" objectFit="cover" className="w-full h-full" />
                    </motion.div>
                ))}
                {expandedIndex !== null && (
                    <motion.div
                        className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-lg"
                        onClick={() => setExpandedIndex(null)}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="relative max-w-4xl w-full h-full"
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.5, opacity: 0 }}
                        >
                            <Image src={images[expandedIndex].src} alt={images[expandedIndex].alt} layout="fill" objectFit="contain" />
                        </motion.div>
                    </motion.div>
                )}
            </section> */}







            {/* second expand try */}
            {/* 

            
            <section className="relative h-screen overflow-hidden">
                {selectedImage !== null && (
                    <motion.div
                        className="absolute inset-0 flex items-center justify-center z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <div className="absolute inset-0 z-40 bg-black/50" onClick={handleCloseImage} ></div>
                        <motion.div
                            className="relative z-50"
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                        >
                            <Image src={images[selectedImage]} alt={`Image ${selectedImage + 1}`} width={800} height={600} />
                        </motion.div>
                    </motion.div>
                )}

                <div className="flex h-full">
                    {images.map((image, index) => (
                        <motion.div
                            key={index}
                            className="w-full flex-shrink-0 cursor-pointer"
                            onClick={() => handleImageClick(index)}
                            whileHover={{ scale: 1.1 }}
                        >
                            <Image src={image} alt={`Image ${index + 1}`} layout="fill" objectFit="cover" />
                        </motion.div>
                    ))}
                </div>
            </section>
 */}





























            {/* first expanding try */}
            {/* <section  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <ExpandingCard
                    imageSrc="/1.png"
                    title="Title 1"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec arcu sit amet elit sollicitudin placerat."
                />
                <ExpandingCard
                    imageSrc="/2.png"
                    title="Title 2"
                    content="Duis auctor, libero ut fermentum bibendum, augue urna convallis mi, et scelerisque nisi nisi quis dui."
                />
                <ExpandingCard
                    imageSrc="/3.png"
                    title="Title 3"
                    content="Suspendisse potenti. Nulla facilisi. Sed vestibulum, neque vitae tempor pellentesque, justo purus elementum magna."
                />
            </section> */}

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
