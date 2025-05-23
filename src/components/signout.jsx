import React from 'react'
import { getAuth,signOut  } from 'firebase/auth'

function Signout( props) {

        
    const auth = getAuth();

    function eventHandler () {
        signOut(auth)
        .then(() => props.setUser(false));
    }


  return (
    <div className='h-screen w-full flex flex-col items-center '>
      <p className='mt-12 text-3xl text-center p-12 font-bold'>Do you want to sign Out from the current account</p>
      <button className='bg-green-300 px-2 py-2 rounded-2xl ring-2 ring-green-400
      font-bold hover:scale-105 transition-all duration-75'
      onClick={eventHandler}>Sign Out</button>
    </div>
  )
}

export default Signout
