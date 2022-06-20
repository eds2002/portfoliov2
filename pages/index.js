import Head from 'next/head'
import Link from 'next/link'
import About from '../components/About'
import Hero from '../components/Hero'
import Experience from '../components/Experience'
import { useState, useEffect, useRef} from 'react'
import { motion, AnimatePresence } from "framer-motion"
import Contact from '../components/Contact'
export default function Home() {

  const contactRef = useRef()

  const [showLabel, setShowLabel] = useState(false)
  const [inView, setView] = useState('')

  useEffect(()=>{
    setShowLabel(true);
    setTimeout(()=>{
      setShowLabel(false)
    },2000)
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
    <body className = "bg-black w-[100vw] h-full text-gray-100 max-w-[1920px] relative mx-auto ">
      <Head>
        <title>Eduardo Sanchez - Portfolio</title>
        <meta name="description" content="Hi, I'm a front end developer based in NJ. Learn more about me." />
        <link rel="icon" href="/fav.png" />
      </Head>

      {/* TODO Desktop navigation */}
      <div className = "fixed flex h-full mx-auto">
        {/* TODO Desktop left side navigation */}
        <div className = "hidden  p-[100px] lg:block">
          <nav className = "flex flex-col gap-[50px] items-center justify-center">
            <Link href = "#home"><a className = {`text-xs self-start transition-all text-white/50 hover:text-indigo-600 active:text-indigo-400 font-mono`}>Home</a></Link>
            <Link href = "#about"><a className = {`text-xs self-start text-white/50 hover:text-indigo-600 active:text-indigo-400 transition-all font-mono`}>About</a></Link>
            <Link href = "#experience"><a className = {`text-xs self-start transition-all text-white/50 hover:text-indigo-600 active:text-indigo-400 font-mono`}>Experience</a></Link>
            <Link href = "#contact"><a className = {`text-xs self-start transition-all text-white/50 hover:text-indigo-600 active:text-indigo-400 font-mono`}>Contact</a></Link>
            {/* Nav indicator */}

            {/* Desktop Logo & Socials */}
            <div className = "absolute bottom-0 left-0 right-0 p-[100px]">
              <h1 className = "text-base font-extrabold">Ed.</h1>
              <div className = "flex gap-5 mt-5">
                <Link href = "https://www.linkedin.com/in/eduardo-sanchez-93a191227/">
                  <a target = "_blank" className = "font-mono text-xs transition text-white/50 hover:text-indigo-600">In</a>
                </Link>
                <Link href = "https://github.com/eds2002">
                  <a target = "_blank" className = "font-mono text-xs transition text-white/50 hover:text-indigo-600 ">Git</a>
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>


      {/* Mobile Header Logo */}
      <div className = "fixed top-0 left-0 right-0 lg:hidden flex items-center justify-center h-[75px] z-50 bg-white/1 backdrop-blur-lg ">
        <a href = "#home" className = "text-xl font-bold text-white cursor-pointer" >Ed</a>
      </div>

      {/* Mobile right navigation */}
      <div className = "fixed top-[50%] bottom-[50%] right-0 flex items-end justify-center lg:hidden p-[25px] flex-col gap-10 z-[999999999999999]">
        <a href = "#home" className = "p-2 cursor-pointer group">
          <div className = {`inner-circle bg-white/25 group-hover:bg-white transition duration-500 relative`}>
            <div className = {`outer-circle w-[0px] h-[0px] cursor-pointer group-hover:w-[30px] group-hover:h-[30px] absolute border rounded-full  transition-all border-transparent group-hover:border-indigo-600 duration-500 flex justify-center items-center`}>
            </div>
          </div>
        </a>
        <a href = "#about" className = "p-2 cursor-pointer group">
          <div className = {`inner-circle bg-white/25 group-hover:bg-white relative transition duration-500`}>
            <div className = {`outer-circle w-[0px] h-[0px] cursor-pointer group-hover:w-[30px] group-hover:h-[30px] absolute border rounded-full  transition-all border-transparent group-hover:border-indigo-600 duration-500 flex justify-center items-center`}>
            </div>
          </div>
        </a>
        <a href = "#experience" className = "p-2 cursor-pointer group">
          <div className = {`inner-circle bg-white/25 group-hover:bg-white transition-all duration-500 relative`}>
            <div className = {`outer-circle w-[0px] h-[0px] cursor-pointer group-hover:w-[30px] group-hover:h-[30px] absolute border rounded-full  transition-all border-transparent group-hover:border-indigo-600 duration-500 flex justify-center items-center`}>
            </div>
          </div>
        </a>
        <a href = "#contact" className = "p-2 group">
          <div className = {`inner-circle bg-white/25 group-hover:bg-white transition-all duration-500 relative`}>
            <div className = {`outer-circle w-[0px] h-[0px] cursor-pointer group-hover:w-[30px] group-hover:h-[30px] absolute border rounded-full  transition-all border-transparent group-hover:border-indigo-600 duration-500 flex justify-center items-center`}>
            </div>
          </div>
        </a>
      </div>

      <Hero animate = {true} />
      <About animate = {true} />
      <Experience animate = {true} />
      <Contact animate = {true} contactRef = {contactRef}/>
    </body>
  )
}
