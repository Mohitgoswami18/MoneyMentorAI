import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ChooseUs from './components/ChooseUs';
import Work from './components/Work';
import Footer from './components/Footer';
import StatsSection from './components/Stats';
import FAQSection from './components/FAQ';
import { useRef, useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { NavLink, Routes, Route } from 'react-router-dom';
import Chatbot from './components/Chatbot';
import News from './components/News.jsx';

function App() {


  const [mousePointer, setMousePointer] = useState({
    x:0,
    y:0,
  })

  const mouse = useEffect(()=>{
    const handleMouseMove = e => {
      setMousePointer({
        x:e.clientX,
        y:e.clientY,
      });
    }


    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [])

  const homeRef = useRef(null);
  const workRef = useRef(null);
  const aboutusRef = useRef(null);
  const featuresRef = useRef(null);
  const faqRef = useRef(null);
  const marketNewsRef = useRef(null);

  const cursor = {
      position: 'fixed',
      top: mousePointer.y,
      left: mousePointer.x,
      width: '80px',
      height: '80px',
      backgroundColor: '#60A5FA', 
      borderRadius: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: 9999,
      opacity: 1,
      filter: 'blur(80px)',
      pointerEvents: 'none',
      transition: 'top 0.03s linear, left 0.03s linear',
  }

  const [chatBotEnabled, setChatBotEnabled] = useState(false);
  return (
    <div className=' font-[Poppins] '>
      <div className='' style={cursor}></div>
      <div className='bg-no-repeat bg-cover  bg-[url("https://media.istockphoto.com/id/2030192156/photo/global-data-flow-and-connectivity-east-asia.webp?b=1&s=612x612&w=0&k=20&c=igZA6fE1A6qq0jyHDRUAxtbuHeQu2pqiRTdr4t2BPfI=")]'>
        <div className=''>
          <Navbar homeRef={homeRef} workRef={workRef} aboutusRef={aboutusRef} featuresRef={featuresRef} faqRef={faqRef} /> 
        </div>        
        <div id='homeRef' ref={homeRef}><HeroSection />
        </div>
      </div>

      <motion.button

      animate={{x:[0,5,10]}}
      transition={{duration:Infinity}}

      className=' w-fit z-99 cursor-pointer hover:scale-110 transition-transform fixed bottom-[20px] right-[10px] drop-shadow-[0px_0px_10px_rgba(31,41,55,0.6)] text-white'
      onClick={ () =>  setChatBotEnabled (true)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi text-3xl bi-alexa" viewBox="0 0 16 16">
  <path d="M7.996 0A8 8 0 0 0 0 8a8 8 0 0 0 6.93 7.93v-1.613a1.06 1.06 0 0 0-.717-1.008A5.6 5.6 0 0 1 2.4 7.865 5.58 5.58 0 0 1 8.054 2.4a5.6 5.6 0 0 1 5.535 5.81l-.002.046-.012.192-.005.061a5 5 0 0 1-.033.284l-.01.068c-.685 4.516-6.564 7.054-6.596 7.068A7.998 7.998 0 0 0 15.992 8 8 8 0 0 0 7.996.001Z"/>
</svg>
</motion.button>  
      {
        
        chatBotEnabled && 
        ( <div className='h-[470px] rounded-lg shadow-2xl shadow-black w-[400px] bg-white z-999 fixed top-15 p-4 right-5'>
          <button className='px-3 py-1 fixed top-6 cursor-pointer right-2 bg-black text-white rounded-full'
          onClick={()=>setChatBotEnabled(false)}>X</button>
          <Chatbot />
          </div>
        )
      }

      <div className='bg-gradient-to-b mt-0 from-[#0c121b] to-[rgb(31,41,55)]'>
        <div id='featuresRef' ref={featuresRef}><ChooseUs /></div>
        {/* <div><News /></div> */}
        <StatsSection />
        <div id='workRef' ref={workRef}><Work /></div>
        <div ref={faqRef} id='faqRef'><FAQSection /></div>
        <div id='aboutusRef' ref={aboutusRef}><Footer /></div>
      </div>
      <Chatbot />
    </div>
  )
}

export default App
