import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ChooseUs from './components/ChooseUs'
import Work from './components/Work'
import Footer from './components/Footer'
import StatsSection from './components/Stats'
import FAQSection from './components/FAQ'

function App() {
  return (
    <div className='bg-gradient-to-b from-[#0c121b] to-[#1F2937] font-[Poppins]'>
      <Navbar />
      <HeroSection />
      <ChooseUs />
      <StatsSection />
      <Work />
      <FAQSection />
      <Footer />

    </div>
  )
}

export default App
