import Head from 'next/head'
import Link from 'next/link'
import About from '../components/About'
import Hero from '../components/Hero'
import Experience from '../components/Experience'
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from "framer-motion"
import Contact from '../components/Contact'
import { useInView } from 'react-intersection-observer';
export default function Home() {
  const heroRef = useRef()
  const aboutRef = useRef()
  const experienceRef = useRef()
  const contactRef = useRef()
  const { ref, inView, entry } = useInView(options);

  const [dispHome, setDispHome] = useState(true)
  const [dispAbout, setDispAbout] = useState(false);
  const [dispExperience, setDispExperience] = useState(false)
  const [dispContact, setDispContact] = useState(false)
  const [showLabel, setShowLabel] = useState(false)

  useEffect(()=>{
    setShowLabel(true);
    setTimeout(()=>{
      setShowLabel(false)
    },2000)
  },[])

  useEffect(()=>{
    const observer = new IntersectionObserver((entries )=>{
      setDispHome(entries[0]?.isIntersecting)
      setDispAbout(entries[0]?.isIntersecting)
      setDispExperience(entries[0]?.isIntersecting)
      setDispContact(entries[0]?.isIntersecting)
    })
    observer.observe(heroRef.current)
    observer.observe(aboutRef.current)
    observer.observe(experienceRef.current)
    observer.observe(contactRef.current)
  },[])


  // Nav page switching logic
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

      {/* Body */}
      <div className = "max-w-[1920px] mx-auto h-full flex relative">
        {/* TODO Desktop left side navigation */}
        <div className = "hidden md:w-[30%] pl-[100px] py-[100px] md:block">
          <nav className = "flex flex-col gap-[50px]">
            <Link href = "/"><a className = {`text-sm self-start transition-all ${dispHome ? 'text-indigo-600' : 'text-gray-400'} font-mono`} onClick = {()=>handleClick("Home")}>Home</a></Link>
            <Link href = "/"><a className = {`text-sm self-start ${dispAbout ? 'text-indigo-600' : 'text-gray-400'} transition-all font-mono`} onClick = {()=>handleClick("About")}>About</a></Link>
            <Link href = "/"><a className = {`text-sm self-start transition-all ${dispExperience ? 'text-indigo-600' : 'text-gray-400'} font-mono`} onClick = {()=>handleClick("Experience")}>Experience</a></Link>
            <Link href = "/"><a className = {`text-sm self-start transition-all ${dispContact ? 'text-indigo-600' : 'text-gray-400'} font-mono`} onClick = {()=>handleClick("Contact")}>Contact</a></Link>
            {/* Nav indicator */}

            {/* Desktop Logo & Socials */}
            <div className = "absolute bottom-0 left-0 right-0 p-[100px]">
              <h1 className = "text-base font-extrabold">Ed.</h1>
              <div className = "flex gap-5 mt-5">
                <Link href = "https://www.linkedin.com/in/eduardo-sanchez-93a191227/">
                  <a target = "_blank" className = "font-mono text-[15px] transition hover:text-indigo-600">In</a>
                </Link>
                <Link href = "https://github.com/eds2002">
                  <a target = "_blank" className = "font-mono text-[15px] transition hover:text-indigo-600 ">Git</a>
                </Link>
              </div>
            </div>
          </nav>
        </div>

        {/* Mobile Top Nav */}
        {/* <div className = "fixed top-0 left-0 right-0 md:hidden flex items-center justify-center h-[75px] mx-[25px] z-50 bg-[hsla(360,0%,0%,0.6)]">
          <h1 className = "text-xl font-bold text-white cursor-pointer" onClick = {()=>handleClick("Home")}>Ed</h1>
        </div> */}

        {/* Pages transition animations */}
        <div className = "overflow-scroll snap-mandatory snap-y">
          <Hero animate = {true} heroRef = {heroRef}/>
          <About animate = {true} aboutRef = {aboutRef}/>
          <Experience animate = {true} experienceRef = {experienceRef}/>
          <Contact animate = {true} contactRef = {contactRef}/>
        </div>
      </div>
      
      {/* Mobile Nav Right Indicitors  */}
      {/* On link click, nav title appears briefly sliding from the right to left */}
       <div className = "absolute  top-[50%] bottom-[50%] right-0 flex items-end justify-center md:hidden p-[25px] flex-col gap-10 z-50">
          <div className = "p-2 cursor-pointer" onClick = {()=>handleClick('Home')}>
            <div className = {`inner-circle ${dispHome ? 'bg-white' : 'bg-[hsla(360,0%,50%,0.5)]'} relative`}>
              <div className = {`outer-circle w-[30px] h-[30px] absolute border rounded-full ${dispHome ? 'scale-100' : 'scale-0'} transition-all border-indigo-600 duration-500 flex justify-center items-center`}>
              </div>
              <AnimatePresence>
                {dispHome & showLabel ? 
                  <motion.h1 className = "absolute left-[-55px] text-xs font-mono text-indigo-300"
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
                  <motion.h1 className = "absolute left-[-60px] text-xs font-mono text-indigo-300"
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
                  <motion.h1 className = "absolute left-[-100px] text-xs font-mono text-indigo-300"
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
                  <motion.h1 className = "absolute left-[-80px] text-xs font-mono text-indigo-300"
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
