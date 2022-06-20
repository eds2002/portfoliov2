import React from 'react'
import { projects } from '../constants/constant'
import Link from 'next/link'
import {motion, AnimatePresence} from 'framer-motion'

const Experience = ({animate}) => (
  <AnimatePresence>
    {animate && (
      <div className = "relative ml-auto lg:w-[80%] p-[100px] section experience h-full" id = 'experience' >
        <motion.div className = "flex flex-col mx-auto"
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

              <div className = "grid h-full grid-cols-2 gap-4 mt-5">
                {projects.map((project, i)=>(
                  <>
                    {project.featured && (
                      <div className = "col-span-2" key = {i}>
                        <motion.div key = {i} className = {`p-[25px] rounded-lg h-[100%] max-h-96 flex flex-col md:flex-row justify-between border border-indigo-900/50 hover:border-indigo-900 gap-x-10 transition group`}
                          initial = {{y:25, opacity:0}}
                          animate = {{y:0, opacity:1}}
                          exit = {{y:-25, opacity:0}}
                          transition = {{type: 'spring', duration:1,delay:0.15}}
                        >
                          <div className = "flex-1">
                            <h1 className = {`font-bold text-indigo-500/80 group-hover:text-indigo-600`} >{project.name}</h1>
                            <p className = "my-2 text-sm text-gray-300">{project.about}</p>
                            <div className = "flex flex-wrap items-center w-full gap-y-2 gap-x-5 text-xs mb-[15px] mt-[10px]">
                              {project.tools.map((tool, i)=>(
                                <p key = {i} className = {`text-white font-mono rounded-sm flex items-center justify-center bg-indigo-600 text-[12px] py-[1px] px-2 `}>{tool}</p>
                              ))}
                            </div>
                          </div>
                          <div className = "flex justify-between md:flex-1 md:flex md:flex-col md:justify-center gap-x-5">
                            <Link href = {project.webLink}>
                              <a target = "_blank" className = "w-full">
                                <button type = "text" className = {`w-[100%] py-[5px] ${project.pinned ? "bg-amber-600 hover:bg-amber-600/50 border-amber-900 active:bg-transparent":"bg-indigo-600 hover:bg-indigo-600/50 border-indigo-600 active:bg-transparent"} border font-mono rounded-md my-1 transition text-xs md:text-sm`}>
                                  Website
                                </button>
                              </a>
                            </Link>
                            <Link href = {project.resposLink}>
                              <a target = "_blank" className = "w-full">
                                <button type = "text" className = {`w-[100%] py-[5px] ${project.pinned ? "bg-amber-600 hover:bg-amber-600/50 border-amber-900 active:bg-transparent":"bg-indigo-600 hover:bg-indigo-600/50 border-indigo-600 active:bg-transparent"} border font-mono rounded-md my-1 transition md:text-sm text-xs`}>
                                  Git
                                </button>
                              </a>
                            </Link>
                          </div>
                        </motion.div>
                      </div>
                    )}
                  </>
                ))}
                <h1 className = "w-full col-span-2 text-xl font-bold text-center my-[50px]">Other portfolio worthy projects</h1>
                {projects.map((project, i)=>(
                  <>
                    {!project.featured && (
                      <div className = "col-span-2 md:col-span-1">
                        <motion.div key = {i} className = {`p-[25px] rounded-lg h-[100%] max-h-96 flex flex-col justify-between border border-gray-800 bg-gray-600/10 hover:bg-gray-600/20 transition group`}
                          initial = {{y:25, opacity:0}}
                          animate = {{y:0, opacity:1}}
                          exit = {{y:-25, opacity:0}}
                          transition = {{type: 'spring', duration:1,delay:0.15}}
                        >
                          <h1 className = {`font-mono text-base font-bold text-gray-500 group-hover:text-white text-md transition`} >{project.name}</h1>
                          <p className = "my-2 text-base text-gray-300">{project.about}</p>
                          <div className = "flex flex-wrap items-center w-full gap-2 text-xs mb-[15px] mt-[10px]">
                            {project.tools.map((tool, i)=>(
                              <p key = {i} className = {`font-bold text-white font-mono rounded-sm flex items-center justify-center bg-gray-500 px-2 py-[1px]`}>{tool}</p>
                            ))}
                          </div>
                          <div className = "flex justify-between gap-x-5">
                            <Link href = {project.webLink}>
                              <a target = "_blank" className = "w-full">
                                <button type = "text" className = {`w-[100%] py-[5px] bg-gray-600 hover:bg-gray-600/50 border-gray-600 active:bg-transparent border font-mono rounded-md my-1 transition  text-xs`}>
                                  Website
                                </button>
                              </a>
                            </Link>
                            <Link href = {project.resposLink}>
                              <a target = "_blank" className = "w-full">
                                <button type = "text" className = {`w-[100%] py-[5px] bg-gray-600 hover:bg-gray-600/50 border-gray-600 active:bg-transparent border font-mono rounded-md my-1 transition  text-xs`}>
                                  Git
                                </button>
                              </a>
                            </Link>
                          </div>
                        </motion.div>
                      </div>
                    )}
                  </>
                ))}
              </div>
            </div>
        </motion.div>
      </div>
    )}
  </AnimatePresence>
)

export default Experience