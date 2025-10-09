import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import MMLogo from '../assets/icons/MMLogo.png'
import { getAuth, signOut } from 'firebase/auth';

const scroll = ( ref ) => {
  ref.current.scrollIntoView({behavior:'smooth'});
}

function Navbar( {homeRef, workRef, aboutusRef, featuresRef, faqRef, setLoggingIn, user} ) {

  const auth = getAuth();

  function eventHandler () {
          signOut(auth)
          .then(() => props.setUser(false));
      }

    const [isMoved, setIsMoved] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);
    const [showSignout, setShowSignout] = useState(false);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setIsMoved(true);
      }, 1000); // Delay before moving to navbar
      return () => clearTimeout(timer);
    }, []);
  

  const { ref, inView } = useInView({
    threshold:0.8,
    triggerOnce:false,
  })

  return (
    <motion.div
    ref={ref}
     className='flex  font-[Poppins] items-center border-b-[0.5px] py-4 pb-8 border-[#374151]'>

      <div className='w-23 h-14 mr-50'>
       <motion.img src={MMLogo} alt="Money Mentor Logo"
        initial={{
          position: 'absolute',
          top: '50%',
          left: '45%',
          scale: 3,
        }}
        animate={{
          top: isMoved ? '-40px' : '50%',
          left: isMoved ? '0px' : '45%',
          scale: isMoved ? 1 : 3,
        }}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
        style={{ zIndex: 1000, position: 'fixed', width: '180px' }}/>
      </div>
      <motion.div className='flex justify-center'
      initial={{opacity:0}}
      animate={{scale:1, opacity:1}}
        transition={{duration:1.5,delay:2, ease:'easeInOut'}}>
        <div className='#161B22  items-center rounded-full bg-slate-500 backdrop-blur-2xl w-[650px] text-[#E6EDF3]'>
          <ul className='flex  h-12  items-center rounded-full'>
            <li className='m-4 hover:scale-110 transition-transform ml-14 font-semibold cursor-pointer hover:underline' onClick={()=>scroll(homeRef)}>Home</li>
            <li className='m-4 hover:scale-110 transition-transform font-semibold cursor-pointer hover:underline' onClick={()=>scroll(featuresRef)} >Features</li>
            <li className='m-4 hover:scale-110 transition-transform font-semibold cursor-pointer hover:underline' onClick={()=>scroll(workRef)} >Work Flow</li>
            <li className='m-4 hover:scale-110 transition-transform font-semibold cursor-pointer hover:underline' onClick={()=>scroll(faqRef)} >FAQ'S</li>
            <li className='m-4 hover:scale-110 transition-transform font-semibold cursor-pointer hover:underline' onClick={()=>scroll(aboutusRef)} >AboutUs</li>
            <li className='m-4 hover:scale-110 transition-transform mr-14 font-semibold cursor-pointer hover:underline'>News</li>
          </ul>
        </div>
      </motion.div>
      <motion.div className='cursor-pointer '
      initial={{opacity:0}}
      animate={{scale:1, opacity:1}}
        transition={{duration:1.5,delay:2, ease:'easeInOut'}}
      >
        {
          user ? ( <div><button 
            onClick={()=> setShowSignout(true)}
            className=' text-[#E6EDF3] bg-[#3B82F6] px-2 py-3 rounded-2xl ml-[150px] mr-10 cursor-pointer  text-center font-bold items-center text-sm'
            >signOut</button>
            <Link 
            to={'./Login'}
            className='text-white text-2xl hover:scale-110 transition-transform absolute top-5 right-35 bg-white/10 backdrop-blur-2xl rounded-full h-12 w-12 flex items-center justify-center'><i class="fa-solid fa-user"></i></Link></div>
        )
          : (<Link 
          to={'./Login'}
          className=' text-[#E6EDF3] bg-[#3B82F6] px-2 py-3 rounded-2xl ml-[100px] mr-10 cursor-pointer  text-center font-bold items-center text-sm'
          >login/register</Link>
          )


        }

        {
          showSignout ? (
          <div className='w-54 p-2 top-18 right-0 h-28 fixed bg-white rounded-2xl shadow-xl'>
            <div className=''></div>
            <p className='text-sm '> Are You Sure you want to sign out</p> 
            <div className='flex justify-center gap-3 pt-4'>
            <button onClick={() => {
              eventHandler(),
              setShowSignout(false)
            }
          }
            className='text-sm px-3 py-1 rounded-2xl  bg-[#3B82F6]'>Yes</button>
            <button 
            className='text-sm px-4 py-1 rounded-2xl  bg-[#3B82F6]' 
            onClick={()=>setShowSignout(false)}>No</button>
            </div>
          </div>
          ) : (<div> </div>)
        }
      </motion.div>
    </motion.div>
  );
}

export default Navbar;
