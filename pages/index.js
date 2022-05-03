import Head from 'next/head'
import Link from 'next/link'
import About from '../components/About'
import Hero from '../components/Hero'
import Experience from '../components/Experience'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBreadSlice, faCaretRight, faTimes, falinkedin} from '@fortawesome/free-solid-svg-icons'
import { motion, AnimatePresence } from "framer-motion"
import Contact from '../components/Contact'
export default function Home() {
  const [dispHome, setDispHome] = useState(true)
  const [dispAbout, setDispAbout] = useState(false);
  const [dispExperience, setDispExperience] = useState(false)
  const [dispContact, setDispContact] = useState(false)

  const [showLabel, setShowLabel] = useState(false)

  const [nav, setNav] = useState(false);

  const handleClick = (e) =>{
    switch(e){
      case 'Home':
        setDispHome(true)
        setDispAbout(false)
        setDispExperience(false)
        setDispContact(false)
        if(showLabel){
          return
        }else{
          setShowLabel(true);
          setTimeout(()=>{
            setShowLabel(false)
          },2000)
        }
        break;
      case 'About':
          setDispHome(false)
          setDispAbout(true)
          setDispExperience(false)
          setDispContact(false)
          if(showLabel){
            return
          }else{
            setShowLabel(true);
            setTimeout(()=>{
              setShowLabel(false)
            },2000)
          }
        break;
      case 'Experience':
          setDispHome(false)
          setDispAbout(false)
          setDispExperience(true)
          setDispContact(false)
          if(showLabel){
            return
          }else{
            setShowLabel(true);
            setTimeout(()=>{
              setShowLabel(false)
            },2000)
          }
        break;
      case 'Contact':
        setDispHome(false)
        setDispAbout(false)
        setDispExperience(false)
        setDispContact(true)
        if(showLabel){
          return
        }else{
          setShowLabel(true);
          setTimeout(()=>{
            setShowLabel(false)
          },2000)
        }
        break;
    }
  }
  return (
    <div className = "bg-black w-[100vw] h-[100vh] text-gray-100">
      <Head>
        <title>Eduardo Sanchez - Portfolio</title>
        <meta name="description" content="Hi, I'm a front end developer based in NJ. Learn more about me." />
        <link rel="icon" href="/fav.png" />
      </Head>
      <div className = "max-w-[1920px] mx-auto p-[100px] h-full flex relative">
        <div className = "hidden md:w-[30%] md:block">
          <nav className = "flex flex-col gap-[50px]">
            <Link href = "/"><a className = {`text-base self-start transition-all ${dispHome ? 'text-indigo-600' : 'text-white'}`} onClick = {()=>handleClick("Home")}>Home</a></Link>
            <Link href = "/"><a className = {`text-base self-start ${dispAbout ? 'text-indigo-600' : 'text-white'} transition-all`} onClick = {()=>handleClick("About")}>About</a></Link>
            <Link href = "/"><a className = {`text-base self-start transition-all ${dispExperience ? 'text-indigo-600' : 'text-white'}`} onClick = {()=>handleClick("Experience")}>Experience</a></Link>
            <Link href = "/"><a className = {`text-base self-start transition-all ${dispContact ? 'text-indigo-600' : 'text-white'}`} onClick = {()=>handleClick("Contact")}>Contact</a></Link>
            {/* Nav indicator */}
            <div className = {`absolute top-[98px] left-0 w-[6px] h-[30px] bg-indigo-600 rounded-lg transition ease-in-out duration-600
            ${dispHome ? 'translate-y-0' : dispAbout ? 'translate-y-[72px]' : dispExperience ? 'translate-y-[147px]' : dispContact ? 'translate-y-[220px]' : ''}`}> {/* [147px] [220px]*/}  
            </div>

            {/* Desktop Logo & Socials */}
            <div className = "absolute bottom-0 left-0 right-0 p-[100px]">
              <h1 className = "text-base font-bold">Ed.</h1>
              <div className = "flex gap-5 mt-5">
                <Link href = "https://www.linkedin.com/in/eduardo-sanchez-93a191227/">
                  <a target = "_blank" className = "text-base font-thin transition hover:text-indigo-600">In</a>
                </Link>
                <Link href = "https://github.com/eds2002">
                  <a target = "_blank" className = "text-base font-thin transition hover:text-indigo-600 ">Git</a>
                </Link>
              </div>
            </div>
          </nav>
        </div>
        {/* Mobile Top Nav */}
        <div className = "fixed top-0 left-0 right-0 md:hidden flex items-center justify-center h-[75px] mx-[25px] z-50 bg-[hsla(360,0%,0%,0.6)]">
          <h1 className = "text-xl font-bold text-white cursor-pointer" onClick = {()=>handleClick("Home")}>Ed</h1>
        </div>

        {/* Pages transition animations */}
        <Hero animate = {dispHome}/>
        <About animate = {dispAbout}/>
        <Experience animate = {dispExperience}/>
        <Contact animate = {dispContact}/>
      </div>
      
      {/* Mobile Nav Right  */}
       <div className = "absolute  top-[50%] bottom-[50%] right-0 flex items-end justify-center md:hidden p-[25px] flex-col gap-10 z-50">
          <div className = "p-2 cursor-pointer" onClick = {()=>handleClick('Home')}>
            <div className = {`inner-circle ${dispHome ? 'bg-white' : 'bg-[hsla(360,0%,50%,0.5)]'} relative`}>
              <div className = {`outer-circle w-[30px] h-[30px] absolute border rounded-full ${dispHome ? 'scale-100' : 'scale-0'} transition-all border-indigo-600 duration-500 flex justify-center items-center`}>
              </div>
              <AnimatePresence>
                {dispHome & showLabel ? 
                  <motion.h1 className = "absolute left-[-55px] italic opacity-80 text-xs"
                    initial = {{x:7, opacity:0}}
                    animate = {{x:0, opacity:1}}
                    exit = {{x:7, opacity:0}}
                    transition = {{type: 'spring', duration:1}}
                  >Home</motion.h1>  
                :
                  ""
                }
              </AnimatePresence>
            </div>
          </div>

          <div className = "p-2 cursor-pointer" onClick = {()=>handleClick('About')}>
            <div className = {`inner-circle ${dispAbout ? 'bg-white' : 'bg-[hsla(360,0%,50%,0.5)]'}`} onClick = {()=>handleClick('About')}>
              <div className = {`outer-circle w-[30px] h-[30px] absolute border rounded-full ${dispAbout ? 'scale-100' : 'scale-0'} transition-all border-indigo-600  duration-500`}>  
              </div>
              <AnimatePresence>
                {dispAbout & showLabel ? 
                  <motion.h1 className = "absolute left-[-55px] italic opacity-80 text-xs"
                    initial = {{x:7, opacity:0}}
                    animate = {{x:0, opacity:1}}
                    exit = {{x:7, opacity:0}}
                    transition = {{type: 'spring', duration:1}}
                  >About</motion.h1>  
                :
                  ""
                }
              </AnimatePresence>
            </div>
          </div>

          <div className = "p-2 cursor-pointer" onClick = {()=>handleClick('Experience')}>
            <div className = {`inner-circle ${dispExperience ? 'bg-white' : 'bg-[hsla(360,0%,50%,0.5)]'}`} onClick = {()=>handleClick('Experience')}>
              <div className = {`outer-circle w-[30px] h-[30px] absolute border rounded-full ${dispExperience ? 'scale-100' : 'scale-0'} transition-all border-indigo-600 duration-500`}>  
              </div>
              <AnimatePresence>
                {dispExperience & showLabel ? 
                  <motion.h1 className = "absolute left-[-80px] italic opacity-80 text-xs"
                    initial = {{x:7, opacity:0}}
                    animate = {{x:0, opacity:1}}
                    exit = {{x:7, opacity:0}}
                    transition = {{type: 'spring', duration:1}}
                  >Experience</motion.h1>  
                :
                  ""
                }
              </AnimatePresence>
            </div>
          </div>


          <div className = "p-2 cursor-pointer" onClick = {()=>handleClick('Contact')}>
            <div className = {`inner-circle ${dispContact ? 'bg-white' : 'bg-[hsla(360,0%,50%,0.5)]'}`} onClick = {()=>handleClick('Contact')}>
              <div className = {`outer-circle w-[30px] h-[30px] absolute border rounded-full ${dispContact ? 'scale-100' : 'scale-0'} transition-all border-indigo-600 duration-500`}>  
              </div>
              <AnimatePresence>
                {dispContact & showLabel ? 
                  <motion.h1 className = "absolute left-[-80px] italic opacity-80 text-xs"
                    initial = {{x:7, opacity:0}}
                    animate = {{x:0, opacity:1}}
                    exit = {{x:7, opacity:0}}
                    transition = {{type: 'spring', duration:1}}
                  >Contact</motion.h1>  
                :
                  ""
                }
              </AnimatePresence>
            </div>
          </div>
      </div>
    </div>
  )
}
