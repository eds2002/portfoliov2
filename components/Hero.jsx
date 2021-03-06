import React from 'react'
import { motion, AnimatePresence } from "framer-motion"

const Hero = ({animate}) => (
  <AnimatePresence>
    {animate && (
      <div className = "relative flex items center justify-center ml-auto w-full lg:w-[80%] h-[100vh] p-[75px] section hero" id = "home" >
        
        <motion.div className = {`h-full flex-col justify-between  w-full flex mx-auto`}
          initial = {{opacity:0}}
          animate = {{opacity:1}}
          exit = {{opacity:0}}
          transition = {{type:'linear', duration: 0.5}}
        >
            <motion.p className = "font-mono text-xs text-indigo-600"
              initial = {{y:25, opacity:0}}
              animate = {{y:0, opacity:1}}
              exit = {{y:-25, opacity:0}}
              transition = {{type: 'spring', duration:1}}
            >Eduardo Sanchez</motion.p>
            <motion.p className = "text-5xl lg:text-7xl leading-[1] text-white font-medium"
              initial = {{y:25, opacity:0}}
              animate = {{y:0, opacity:1}}
              exit = {{y:-25, opacity:0}}
              transition = {{type: 'spring', duration:1, delay:0.10}}
            >Front <br/>End<br/> Developer</motion.p>
            <div className = "flex flex-col sm:flex-row sm:justify-between">
                <div className = "w-[10ch]">
                <motion.p className = "mb-2 font-mono text-xs font-semibold"
                  initial = {{y:25, opacity:0}}
                  animate = {{y:0, opacity:1}}
                  exit = {{y:-25, opacity:0}}
                  transition = {{type: 'spring', duration:1, delay:0.15}}
                >In short</motion.p>
                </div>
                <div className = "flex flex-col justify-between w-full gap-5 sm:justify-evenly sm:flex-row md:w-[90%]">
                  <motion.p className = "max-w-xs text-sm text-gray-400"
                    initial = {{y:25, opacity:0}}
                    animate = {{y:0, opacity:1}}
                    exit = {{y:-25, opacity:0}}
                    transition = {{type: 'spring', duration:1,delay:0.20}}
                  >
                      Hi! I&apos;m a Front End Developer based in New Jersey. I started my journey around October of 2021 when I took a college course on web development.
                  </motion.p>
                  <motion.p className = "max-w-xs text-sm text-gray-400"
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