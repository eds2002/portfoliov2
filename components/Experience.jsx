import React from 'react'
import { projects } from '../constants/constant'
import Link from 'next/link'
import {motion, AnimatePresence} from 'framer-motion'

const Experience = ({animate}) => (
  <AnimatePresence>
    {animate && (
      <div className = "absolute top-0 md:left-[20%] left-0 right-0 bottom-0 py-[100px] px-[75px] md:px-[0] overflow-scroll scrollbar z-10">
        <motion.div className = "flex flex-col md:w-[70%] h-100vh mx-auto bg-black"
          initial = {{opacity:0}}
          animate = {{opacity:1}}
          exit = {{opacity:0}}
          transition = {{type:'linear', duration: 0.5}}
        >
            <motion.h1 className = "text-xs font-bold text-gray-400"
              initial = {{y:25, opacity:0}}
              animate = {{y:0, opacity:1}}
              exit = {{y:-25, opacity:0}}
              transition = {{type: 'spring', duration:1}}
            >
            Experience</motion.h1>
            <div>
              <motion.p className = "text-3xl font-bold mt-9"
                initial = {{y:25, opacity:0}}
                animate = {{y:0, opacity:1}}
                exit = {{y:-25, opacity:0}}
                transition = {{type: 'spring', duration:1,delay:0.10}}
              >
                Here is some of my work.
              </motion.p>
              <div className = "grid h-full gap-4 mt-5 lg:grid-cols-2">
                {projects.map((project, i)=>(
                  <motion.div key = {i}className = " bg-slate-900 p-[25px] rounded-lg h-[100%] max-h-96 flex flex-col justify-between"
                    initial = {{y:25, opacity:0}}
                    animate = {{y:0, opacity:1}}
                    exit = {{y:-25, opacity:0}}
                    transition = {{type: 'spring', duration:1,delay:0.15}}
                  >
                    <h1 className = "font-bold text-[14px]">{project.name}</h1>
                    <p className = "my-2 text-xl">{project.about}</p>
                    <div>
                      <Link href = {project.webLink}><button type = "text" className = "w-[100%] py-[5px] bg-slate-500 hover:bg-slate-600 active:bg-slate-700 font-bold rounded-md my-1">Visit Website</button></Link>
                      <Link href = {project.resposLink}><button type = "text" className = "w-[100%] py-[5px] bg-slate-500 hover:bg-slate-600 active:bg-slate-700 font-bold rounded-md my-1">Visit Respository</button></Link>
                    </div>
                    
                    {/* {project.tools.map((tool)=>(
                      <li>{tool}</li>
                    ))} */}
                  </motion.div>
                ))}
              </div>
            </div>
        </motion.div>
      </div>
    )}
  </AnimatePresence>
)

export default Experience