"use client";

import React from 'react'
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
import MK1982 from "../../public/1982-copy-2-1-1.png"


const Navbar = () => {

    const { activeSection, setActiveSection, setTimeOfLastClick } =
        useActiveSectionContext();

    /* const links = [
        {
            name: "Home",
            hash: "#home",
        },
        {
            name: "About",
            hash: "#about",
        },
        {
            name: "Projects",
            hash: "#projects",
        },
        {
            name: "Skills",
            hash: "#skills",
        },
        {
            name: "Experience",
            hash: "#experience",
        },
        {
            name: "Contact",
            hash: "#contact",
        },
    ]; */

    return (


        <>


            <motion.div
                className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-20 bg-white bg-opacity-60 shadow-lg z-20 shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-50"
                initial={{ y: -100, x: "-50%", opacity: 0 }}
                animate={{ y: 0, x: "-50%", opacity: 1 }}
            >
                <div className='hidden md:flex flex-row  justify-between items-center px-8 py-2'>
                <Image src={MK1982} alt={''} className='md:opacity-40 w-12'/>

                <Image src={loogo} alt={''}className='md:opacity-40 w-12' />
                </div>

            </motion.div>

            <nav className="flex fixed z-20 top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
                
                {/* <Image src={MK1982} alt={'f'} className='overflow-hidden w-5 h-5 flex flex-wrap items-center justify-center ' /> */}

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
                                    "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300",
                                    {
                                        "text-gray-950 dark:text-gray-200":
                                            activeSection === link.name,
                                    }
                                )}
                                href={link.hash}
                                onClick={() => {
                                    setActiveSection(link.name);
                                    setTimeOfLastClick(Date.now());
                                }}
                            >
                                {link.name}

                                {link.name === activeSection && (
                                    <motion.span
                                        className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
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
