import React from 'react'
import { motion, AnimatePresence } from "framer-motion"
import Link from 'next/link'

const Contact = ({animate, contactRef}) => (
    <section className = "relative ml-auto lg:w-[80%] h-[100vh] p-[100px] section contact" id = 'contact'>
    <motion.div className = 'flex flex-col w-full h-full mx-auto'
        initial = {{opacity:0}}
        animate = {{opacity:1}}
        exit = {{opacity:0}}
        transition = {{type:'linear', duration: 0.5}}
    >
        <motion.h1 className = "font-mono text-xs text-indigo-600"
            initial = {{y:25, opacity:0}}
            animate = {{y:0, opacity:1}}
            exit = {{y:-25, opacity:0}}
            transition = {{type: 'spring', duration:1}}
        >
            Contact
        </motion.h1>
        <motion.p className= "mt-5 mb-[150px] md:mb-[300px] text-2xl font-bold text-gray-50 md:text-3xl"
            initial = {{y:25, opacity:0}}
            animate = {{y:0, opacity:1}}
            exit = {{y:-25, opacity:0}}
            transition = {{type: 'spring', duration:1,delay:0.10}}
        >
            Interested? Let&apos;s get in touch
        </motion.p>
        <div className = "flex flex-wrap justify-between w-full gap-10 md:gap-20">
            <Link href = "https://www.linkedin.com/in/eduardo-sanchez-93a191227/">
                <a target = "_blank">
                    <div className = "w-[80px] h-[80px] md:w-[125px] md:h-[100px] rounded-md ring-1 ring-gray-600 hover:ring-2 hover:ring-indigo-600 flex flex-col justify-center items-start px-1 md:px-3 transition cursor-pointer ">
                        <motion.p className = "text-base font-light "
                            initial = {{x:-15, opacity:0}}
                            animate = {{x:0, opacity:1}}
                            exit = {{x:15, opacity:0}}
                            transition = {{type: 'spring', duration:1,delay:0}}
                        >LinkedIn</motion.p>
                        <motion.p className = "my-2 text-xs text-gray-500"
                            initial = {{x:-15, opacity:0}}
                            animate = {{x:0, opacity:1}}
                            exit = {{x:15, opacity:0}}
                            transition = {{type: 'spring', duration:1,delay:0.10}}
                        >in/eduardo...</motion.p>
                    </div>
                </a>
            </Link>
            <Link href = "https://github.com/eds2002">
                <a target = "_blank">
                <div className = "w-[80px] h-[80px] md:w-[125px] md:h-[100px] rounded-md ring-1 ring-gray-600 hover:ring-2 hover:ring-indigo-600 flex flex-col justify-center items-start px-1 md:px-3 transition cursor-pointer">
                        <motion.p className = "text-base font-light"
                            initial = {{x:-15, opacity:0}}
                            animate = {{x:0, opacity:1}}
                            exit = {{x:15, opacity:0}}
                            transition = {{type: 'spring', duration:1,delay:0}}
                        >GitHub</motion.p>
                        <motion.p className = "my-2 text-xs text-gray-500"
                            initial = {{x:-15, opacity:0}}
                            animate = {{x:0, opacity:1}}
                            exit = {{x:15, opacity:0}}
                            transition = {{type: 'spring', duration:1,delay:0.10}}
                        >/eds2002</motion.p>
                    </div>
                </a>
            </Link>
            <Link href = "mailto:es23jr@gmail.com ">
                <a target = "_blank">
                <div className = "w-[80px] h-[80px] md:w-[125px] md:h-[100px] rounded-md ring-1 ring-gray-600 hover:ring-2 hover:ring-indigo-600 flex flex-col justify-center items-start px-1 md:px-3 transition cursor-pointer">
                        <motion.p className = "text-base font-light"
                            initial = {{x:-15, opacity:0}}
                            animate = {{x:0, opacity:1}}
                            exit = {{x:15, opacity:0}}
                            transition = {{type: 'spring', duration:1,delay:0}}
                        >Email</motion.p>
                        <motion.p className = "my-2 text-xs text-gray-500"
                            initial = {{x:-15, opacity:0}}
                            animate = {{x:0, opacity:1}}
                            exit = {{x:15, opacity:0}}
                            transition = {{type: 'spring', duration:1,delay:0.10}}
                        >es23jr@gmail</motion.p>
                    </div>
                </a>
            </Link>
            <Link href = "tel:973-464-3310">
                <a>
                <div className = "w-[80px] h-[80px] md:w-[125px] md:h-[100px] rounded-md ring-1 ring-gray-600 hover:ring-2 hover:ring-indigo-600 flex flex-col justify-center items-start px-1 md:px-3 transition cursor-pointer">
                        <motion.p className = "text-base font-light"
                            initial = {{x:-15, opacity:0}}
                            animate = {{x:0, opacity:1}}
                            exit = {{x:15, opacity:0}}
                            transition = {{type: 'spring', duration:1,delay:0}}
                        >Phone</motion.p>
                        <motion.p className = "my-2 text-xs text-gray-500"
                            initial = {{x:-15, opacity:0}}
                            animate = {{x:0, opacity:1}}
                            exit = {{x:15, opacity:0}}
                            transition = {{type: 'spring', duration:1,delay:0.10}}
                        >973-464-3310</motion.p>
                    </div>
                </a>
            </Link>
        </div>
    </motion.div>
    </section>
)

export default Contact