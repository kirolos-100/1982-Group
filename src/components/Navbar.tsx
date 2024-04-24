"use client";

import React, { useEffect, CSSProperties } from 'react'
import Logo from '@/../public/logo.svg'
/* import Logoo from '@/../public/Logoo.svg';
import Loogo from '@/../public/Loogo.svg'; */
import loogo from "../../public/logoo - Copy.png";

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion';
import { useActiveSectionContext } from '@/context/active-section-context';
import clsx from "clsx";
import { links } from "@/lib/data";
import { linkss } from "@/lib/data";
import MK1982 from "../../public/1982-copy-2-1-1.png"


/* type HashType = string; */

interface NavbarProps {
    setActiveCard: React.Dispatch<React.SetStateAction<string | null>>;
}

const Navbar: React.FC<NavbarProps> = ({ setActiveCard }) => {



    const { activeSection, setActiveSection, setTimeOfLastClick } =
        useActiveSectionContext();

    



    const handleLinkClick = (linkName: string) => {
        if (linkName === 'Eighty-Two Productions' || linkName === 'HALA!' || linkName === '82Cinemas') {
            setActiveSection(linkName);
            setTimeOfLastClick(Date.now());
            setActiveCard(linkName);
        } else {
            console.error('Invalid link name:', linkName);
        }
    };


    return (


        <>

{<div className='md:hidden'>
            <motion.div
                className="fixed block rounded-full left-1/2 border border-opacity-20 bg-opacity-60 shadow-lg z-10 shadow-black/[0.03] backdrop-blur-[0.5rem] top-6 h-[3.5rem] w-[25rem] items-center  bg-gray-950 border-black/40 dark:bg-opacity-50 "
                

                initial={{ y: -100, x: "-50%", opacity: 0 }}
                animate={{ y: 0, x: "-50%", opacity: 1 }}

            >
                <div className='hidden  justify-between items-center px-8 py-2'>
                    <Link href="#">
                        <Image src={MK1982} alt={''} className='opacity-40 w-10' />
                    </Link>

                    <Image src={loogo} alt={''} className='opacity-40 w-10' />
                </div>

            </motion.div>

            <nav className="flex fixed z-10  left-1/2  -translate-x-1/2  top-[1.7rem] h-[initial] py-0 md:hidden">

                <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
                    {links.map((link) => (
                        <motion.li
                            className="h-3/4 flex items-center justify-center relative"
                            key={link.hash}
                            initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                        >
                            <Link
                                className={clsx(
                                    "flex w-full items-center justify-center px-3 py-3  transition text-gray-300 hover:text-gray-100",
                                    {
                                        "text-gray-200":
                                            activeSection === link.name,
                                    }
                                )}
                                href={link.hash}
                                onClick={() => {
                                    setActiveSection(link.name);
                                    setTimeOfLastClick(Date.now());
                                    setActiveCard(link.name);
                                    

                                }}
                            >
                                {link.name}

                                {link.name === activeSection && (
                                    <motion.span
                                        className=" rounded-full absolute -bottom-1 left-1/2 -z-10 bg-gray-300 h-2 w-2"
                                        layoutId="activeSection"
                                        transition={{
                                            type: "spring",
                                            stiffness: 380,
                                            damping: 30,
                                        }}
                                    ></motion.span>
                                )}
                            </Link>
                        </motion.li>
                    ))}
                </ul>
            </nav>

            </div>}

            <motion.div
                className="hidden fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-opacity-20 bg-opacity-60 shadow-lg z-10 shadow-black/[0.03] backdrop-blur-[0.5rem] sm:block sm:top-6 sm:h-[4.5rem] sm:w-[55rem] sm:rounded-full sm:items-center bg-gray-950 border-black/40 dark:bg-opacity-50  "
                style={{ left: activeSection === 'Eighty-Two Productions' ? 'calc(50% - 140px)' : activeSection === '82Cinemas' ? 'calc(50% + 140px)' : '50%' }}

                /* style={{
                    ...mobileStyles,  
                    ...tabletStyles, 
                    ...desktopStyles, 
                }} */


                initial={{ y: -100, x: "-50%", opacity: 0 }}
                animate={{ y: 0, x: "-50%", opacity: 1 }}

            >
                <div className='hidden md:flex flex-row  justify-between items-center px-8 py-2'>
                    <Link href="#">
                        <Image src={MK1982} alt={''} className='md:opacity-40 w-16' />
                    </Link>

                    <Image src={loogo} alt={''} className='md:opacity-40 w-16' />
                </div>

            </motion.div>

            <nav className="hidden md:flex fixed just z-10 top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0 " style={{ left: activeSection === 'Eighty-Two Productions' ? 'calc(50% - 140px)' : activeSection === '82Cinemas' ? 'calc(50% + 140px)' : '50%' }}>


                <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[1.2rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-10">
                    {linkss.map((link) => (
                        <motion.li
                            className="h-3/4 flex items-center justify-center relative"
                            key={link.hash}
                            initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                        >
                            <Link
                                className={clsx(
                                    "flex w-full items-center justify-center px-3 py-3  transition text-gray-300 hover:text-gray-100",
                                    {
                                        " text-gray-200":
                                            activeSection === link.name,
                                    }
                                )}
                                href={link.hash}
                                onClick={() => {
                                    setActiveSection(link.name);
                                    setTimeOfLastClick(Date.now());
                                    setActiveCard(link.name);
                                    handleLinkClick(link.name)
                                    /* handleLinkClick(link.name)
                                    getNavbarOffset(link.name) */
                                    /* smoothScroll(link.hash); */

                                }}
                            >
                                {link.name}

                                {link.name === activeSection && (
                                    <motion.span
                                        className=" rounded-full absolute -bottom-1 left-1/2 -z-10 bg-gray-300 h-2 w-2"
                                        layoutId="activeSection"
                                        transition={{
                                            type: "spring",
                                            stiffness: 380,
                                            damping: 30,
                                        }}
                                    ></motion.span>
                                )}
                            </Link>
                        </motion.li>
                    ))}
                </ul>
            </nav>

            
            



            

        </>
    )
}

export default Navbar
