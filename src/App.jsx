import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ChooseUs from './components/ChooseUs'
import Work from './components/Work'
import Footer from './components/Footer'
import StatsSection from './components/Stats'
import FAQSection from './components/FAQ'
import { useRef } from 'react'

function App() {

  const homeRef = useRef (null);
  const workRef = useRef (null);
  const aboutusRef = useRef (null);
  const featuresRef = useRef (null);
  const faqRef = useRef (null);


  return (
    <div className=' font-[Poppins] '>
      <div className='bg-no-repeat bg-cover  bg-[url("https://media.istockphoto.com/id/2030192156/photo/global-data-flow-and-connectivity-east-asia.webp?b=1&s=612x612&w=0&k=20&c=igZA6fE1A6qq0jyHDRUAxtbuHeQu2pqiRTdr4t2BPfI=")]'>
         <Navbar homeRef={homeRef} workRef={workRef} aboutusRef={aboutusRef} featuresRef={featuresRef} faqRef={faqRef}/>
        <div id='homeRef' ref={homeRef}><HeroSection /></div>
      </div>
      
      <div className='bg-gradient-to-b mt-0 from-[#0c121b] to-[#1F2937]'>
        <div id='featuresRef' ref={featuresRef}><ChooseUs /></div>
        <StatsSection />
        <div id='workRef' ref={workRef}><Work /></div>
        <div ref={faqRef} id='faqRef'><FAQSection /></div>
        <div id='aboutusRef' ref={aboutusRef}><Footer /></div>
      </div>

    </div>
  )
}

export default App
