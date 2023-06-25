// navbar component with logo and go to bottom button
'use-client'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
const NavBar = () => {
    const handleScroll = () => {
        window.scroll({
            top: document.body.offsetHeight,
            left: 0,
            behavior: 'smooth',
        });
    }
    return (
        <>
            <motion.div
                className='flex items-center justify-between gap-4 w-4/5 mx-auto mt-2'
                initial={{ opacity: 0, y: "-200px" }}
                animate={{ opacity: 1, y: "0px" }}
                exit={{ opacity: 0, y: "-200px" }}
                transition={{ duration: 1 }}
            >
                <div className='flex items-center gap-4'>
                    <Image src={'/icons/logo.png'} width={100} height={100} alt='logo' />
                    <div className='text-4xl font-bold'>
                        Weather App
                    </div>
                </div>

                <button
                    onClick={handleScroll}
                    className='bg-black text-white px-4 py-2 rounded-md shadow-lg'
                >
                    Extended Forecast
                </button>
            </motion.div>
        </>
    )
}

export default NavBar