import React from 'react'
import Logo from '@/../public/logo.svg'
/* import Logoo from '@/../public/Logoo.svg';
import Loogo from '@/../public/Loogo.svg'; */
import loogo from "../../public/logoo - Copy.png";

import Link from 'next/link'
import Image from 'next/image'
const Navbar = () => {
    return (
        <nav className='absolute inset-x-0 top-6 h-30 flex justify-center items center px-20 bg-gradient-to-b from-black/0'>
            <Image src={loogo} alt='gg' className='w-24'/>
            {/* <div className='flex gap-6'>
                <Link href="#">Air</Link>
                <Link href="#">Air</Link>
                <Link href="#">Air</Link>
                <Link href="#">Air</Link>

            </div> */}


        </nav>
    )
}

export default Navbar
