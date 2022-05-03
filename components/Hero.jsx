import React from 'react'
import { motion, AnimatePresence } from "framer-motion"

const Hero = ({animate}) => (
  <AnimatePresence>
    {animate && (
      <div className = "absolute top-0 md:left-[20%] left-0 right-0 bottom-0 py-[100px] px-[75px] md:px-[0]">
        
        <motion.div className = {`h-full flex-col justify-between  w-full md:w-[70%] flex mx-auto bg-black`}
          initial = {{opacity:0}}
          animate = {{opacity:1}}
          exit = {{opacity:0}}
          transition = {{type:'linear', duration: 0.5}}
        >
            <motion.p className = "font-light text-gray-300"
              initial = {{y:25, opacity:0}}
              animate = {{y:0, opacity:1}}
              exit = {{y:-25, opacity:0}}
              transition = {{type: 'spring', duration:1}}
            >Eduardo Sanchez</motion.p>
            <motion.p className = "text-6xl md:text-7xl"
              initial = {{y:25, opacity:0}}
              animate = {{y:0, opacity:1}}
              exit = {{y:-25, opacity:0}}
              transition = {{type: 'spring', duration:1, delay:0.10}}
            >Front <br/>End<br/> Developer</motion.p>
            <div className = "flex flex-col md:flex-row">
                <div className = "w-[10ch]">
                <motion.p className = "font-semibold"
                  initial = {{y:25, opacity:0}}
                  animate = {{y:0, opacity:1}}
                  exit = {{y:-25, opacity:0}}
                  transition = {{type: 'spring', duration:1, delay:0.15}}
                >In short</motion.p>
                </div>
                <div className = "flex flex-col justify-start w-full gap-5 md:justify-evenly md:flex-row">
                <motion.p className = "text-[15px] text-gray-400"
                  initial = {{y:25, opacity:0}}
                  animate = {{y:0, opacity:1}}
                  exit = {{y:-25, opacity:0}}
                  transition = {{type: 'spring', duration:1,delay:0.20}}
                >
                    Hi! I&apos;m a Front End Developer based in New Jersey. I started my journey around October of 2021 when I took a college course on web development.
                </motion.p>
                <motion.p className = "text-[15px] text-gray-400 md:hidden lg:block"
                  initial = {{y:25, opacity:0}}
                  animate = {{y:0, opacity:1}}
                  exit = {{y:-25, opacity:0}}
                  transition = {{type: 'spring', duration:1, delay:0.25}}
                >
                    I am inspired by beautiful designs and motivated to replicate them to my best of my abilities, I think its why I find Front End so fascinating!
                </motion.p>
                </div>
            </div>
        </motion.div>
      </div>
    )}
  </AnimatePresence>
)

export default Hero