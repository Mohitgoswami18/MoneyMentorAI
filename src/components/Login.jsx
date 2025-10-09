import React from 'react';
import Signin from './Signin';
import Signup from './Signup';
import { Routes, NavLink, Route } from 'react-router-dom';
import { motion } from "framer-motion";
import {useInView} from 'react-intersection-observer'
import MMLogo from '../assets/icons/MMLogo.png'
import { useState,useEffect } from 'react'
 
function Login() {

    const NavLinkStyle = ({isActive}) => {
        isActive
        ? 'text-green-600'
        : 'text-black' ;
    }

    const [isMoved, setIsMoved] = useState(false);
      
        useEffect(() => {
          const timer = setTimeout(() => {
            setIsMoved(true);
          }, 1000);
          return () => clearTimeout(timer);
        }, []);

    const { ref, inView } = useInView({
        threshold:0.8,
        triggerOnce:false,
    })

  return (
    <motion.div
        ref={ref}
        className=' w-full bg-[#1F2937] h-screen font-[Poppins] items-center border-b-[0.5px] pb-8 border-[#374151]'>
    
          <div className='w-23 h-14 mr-55'>
           <motion.img src={MMLogo} alt="Money Mentor Logo"
            initial={{
              position: 'fixed',
              top: '40%',
              left: '45%',
              scale: 3,
            }}

            animate={{
              top: isMoved ? '-40px' : '40%',
              left: isMoved ? '0px' : '45%',
              scale: isMoved ? 1 : 3,
            }}

            transition={{ duration: 0.95, ease: 'easeInOut' }}
            style={{ zIndex: 1000, position: 'fixed', width: '180px' }}/>
          </div>
    <motion.div className="w-full  flex items-center justify-center bg-[#1F2937] h-screen fixed top-0"
    initial = {{opacity:0, scale:0.85}}
    animate = {inView ? { opacity:1, scale:1 } : {}}
    transition={{duration:0.5, ease:'easeInOut', delay:1.5}}>
      <main className=" w-[700px] relative rounded-2xl shadow-[#183A39] shadow-lg bg-blue-50 h-[500px] mx-auto " >
            <div className="flex items-center justify-around px-6 mt-12">

            <NavLink to={'/Login/Signin'} className={({ isActive }) => `${NavLinkStyle({ isActive })} font-bold text-2xl`}
                > Sign in</NavLink>
                <NavLink to={'/Login/Signup'} className={({ isActive }) => `${NavLinkStyle({ isActive })} font-bold text-2xl`}
                > Sign up</NavLink>
            </div>

            <Routes>
                <Route path='/' element={<Signup />}></Route>
                <Route path='/Signup' element={<Signup/>}></Route>
                <Route path='/Signin' element={<Signin/>}></Route>
            </Routes>

        </main>

    </motion.div>
    </motion.div>
  )
}

export default Login;