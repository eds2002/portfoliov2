import React from 'react'
import { projects } from '../constants/constant'
import Link from 'next/link'
import {motion, AnimatePresence} from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

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
            <motion.h1 className = "font-mono text-xs text-indigo-600"
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
                  <motion.div key = {i}className = "p-[25px] rounded-lg h-[100%] max-h-96 flex flex-col justify-between border border-indigo-900"
                    initial = {{y:25, opacity:0}}
                    animate = {{y:0, opacity:1}}
                    exit = {{y:-25, opacity:0}}
                    transition = {{type: 'spring', duration:1,delay:0.15}}
                  >
                    <h1 className = "font-mono text-base font-bold text-indigo-500 text-md" >{project.name}</h1>
                    <p className = "my-2 text-base">{project.about}</p>
                    <div className = "flex flex-wrap items-center w-full gap-2 text-xs mb-[15px] mt-[10px]">
                      {project.tools.map((tool)=>(
                        <p className = "font-bold text-indigo-200 rounded-lg px-[10px] h-[20px] bg-indigo-900 flex items-center justify-center">{tool}</p>
                      ))}
                    </div>
                    <div>
                      <Link href = {project.webLink}><a target = "_blank"><button type = "text" className = "w-[100%] py-[5px] bg-indigo-900 hover:hover:bg-[hsla(242,47%,34%,0.4)] border border-indigo-900 active:bg-transparent font-mono rounded-md my-1 transition md:text-base text-xs">Visit Website</button></a></Link>
                      <Link href = {project.resposLink}>
                        <a target = "_blank"><button type = "text" className = "w-[100%] py-[5px] bg-indigo-900 hover:bg-[hsla(242,47%,34%,0.4)] border border-indigo-900 active:bg-transparent font-mono rounded-md my-1 transition md:text-base text-xs">Visit Git</button></a>
                      </Link>
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