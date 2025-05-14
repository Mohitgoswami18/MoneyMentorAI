import React, { useEffect, useState } from 'react';
import {  motion, transform } from 'motion/react';
import { useInView } from 'react-intersection-observer';

const scroll = ( ref ) => {
  ref.current.scrollIntoView({behavior:'smooth'});
}

function Navbar( {homeRef, workRef, aboutusRef, featuresRef, faqRef} ) {

  const { ref, inView } = useInView({
    threshold:0.8,
    triggerOnce:false,
  })

  return (
    <motion.div
    ref={ref}
    initial={{opacity:0, scale:0.85}}
    animate ={ inView ? {opacity:1, scale:1} : {}}
    transition={{duration:1, ease:'anticipate'}}
     className='flex font-[Poppins] items-center border-b-[0.5px] py-4 pb-8 border-[#374151]'>

      <h1 className=' text-[#E6EDF3] mr-[130px] text-center font-bold items-center text-2xl'>MoneyMentorAI</h1>
      <div className='flex justify-center'>
        <div className='#161B22 items-center rounded-full bg-slate-500 text-[#E6EDF3]'>
          <ul className='flex  h-12  items-center rounded-full'>
            <li className='m-4 hover:scale-110 transition-transform ml-14 font-semibold cursor-pointer hover:underline' onClick={()=>scroll(homeRef)}>Home</li>
            <li className='m-4 hover:scale-110 transition-transform font-semibold cursor-pointer hover:underline' onClick={()=>scroll(featuresRef)} >Features</li>
            <li className='m-4 hover:scale-110 transition-transform font-semibold cursor-pointer hover:underline' onClick={()=>scroll(workRef)} >Work Flow</li>
            <li className='m-4 hover:scale-110 transition-transform font-semibold cursor-pointer hover:underline' onClick={()=>scroll(faqRef)} >FAQ'S</li>
            <li className='m-4 hover:scale-110 transition-transform font-semibold cursor-pointer hover:underline' onClick={()=>scroll(aboutusRef)} >AboutUs</li>
            <li className='m-4 hover:scale-110 transition-transform mr-14 font-semibold cursor-pointer hover:underline'>News</li>
          </ul>
        </div>
      </div>
      <div>
        <motion.button 
        whileHover={{scale:1.05}}
        transition={{ease:'anticipate'}}
        className=' text-[#E6EDF3] bg-[#3B82F6] px-2 py-2 rounded-2xl ml-[180px] mr-10 cursor-pointer text-center font-bold items-center text-base'>register</motion.button>
      </div>
    </motion.div>
  );
}

export default Navbar;
