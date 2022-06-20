import React from 'react'
import {motion, AnimatePresence} from 'framer-motion'

const about = ({animate}) => (
  <AnimatePresence>
    {animate && (
      <div className = "relative ml-auto lg:w-[80%] h-[100vh] p-[75px] section about" id = 'about'>
        <motion.div className = "flex flex-col justify-between w-full h-full"
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
            >About</motion.h1>
            <div>
                <motion.p className= "mb-5 text-2xl font-bold text-white md:text-3xl"
                  initial = {{y:25, opacity:0}}
                  animate = {{y:0, opacity:1}}
                  exit = {{y:-25, opacity:0}}
                  transition = {{type: 'spring', duration:1,delay:0.10}}
                >Hi, my name is Eduardo Sanchez</motion.p>


                <motion.p className = "text-gray-400 text-sm md:w-[70%]"
                  initial = {{y:25, opacity:0}}
                  animate = {{y:0, opacity:1}}
                  exit = {{y:-25, opacity:0}}
                  transition = {{type: 'spring', duration:1, delay:0.15}}
                >I am a front end developer based in New Jersey. I started my coding journey back in 2020 when I would modify shopify pages to create an e-commerce shop. Unknowingly, it became something I was deeply interested in.
                <br/>
                <br/>
                Fast forward to October of 2021. I took a college course on Web Development and fell in love. I then decided
                to study on my own.
                </motion.p>
            </div>
            <div>  
                <motion.p className = "mb-2 text-base font-bold text-gray-300 md:text-xl"
                  initial = {{y:25, opacity:0}}
                  animate = {{y:0, opacity:1}}
                  exit = {{y:-25, opacity:0}}
                  transition = {{type: 'spring', duration:1, delay: 0.20}}
                >Here are some of the technologies I use</motion.p>
                <motion.div className = "flex flex-col flex-wrap  h-[60%] md:h-[75px] md:h-[100px] text-gray-400  text-xs md:text-base gap-x-2 gap-y-1"
                  initial = {{y:25, opacity:0}}
                  animate = {{y:0, opacity:1}}
                  exit = {{y:-25, opacity:0}}
                  transition = {{type: 'spring', duration:1,delay:0.25}}
                >
                    <li>React Js</li>
                    <li>Next Js</li>
                    <li>Styled Components</li>
                    <li>Tailwind Css</li>
                    <li>Git & GitHub</li>
                    <li>Redux</li>
                    <li>Node Js</li>
                    <li>MySQL</li>
                </motion.div>
            </div>
        </motion.div>
      </div>
    )}
  </AnimatePresence>
)

export default about