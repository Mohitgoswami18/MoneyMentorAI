import React from 'react'
import{ app } from '../firebase/app.js'
import { getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import  { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Signin() {

  const auth = getAuth(app);
  const navigate = useNavigate ();

  function eventHandler () {
    signInWithEmailAndPassword (auth, email, password )
    .then ((users)=>{
      const newUser = users.user;
      navigate('/');
      console.log(newUser);

    })
    .catch((e)=>{
      console.log("an error is occurring")
      console.log(e);
    })
  }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <div className="flex flex-col p-4 mt-4">
          <span className="relative flex items-center justify-start mt-20 space-x-2"><i className="fa-solid fa-envelope py-2 px-2"></i>
          <input className="w-[300px] focus:outline-[#cac7c7] my-4 active:outline-[#f0f0f0] py-2 px-2 rounded-xl text-lg bg-[#d6d1d1] mt-2 " 
          type="email" id="email" placeholder="Email address" required 
          value={email}
          onChange={(e)=> setEmail(e.target.value)}/></span>
          <span className="relative flex items-center justify-start space-x-2"><i className="fa-solid fa-lock py-2 px-2 "></i>
          <input className="w-[300px] focus:outline-[#cac7c7] py-2 mb-0 px-2 rounded-xl text-lg bg-[#d6d1d1] mt-2 " 
          type="password" id="password" placeholder="Password" required 
          value={password}
          onChange={(e)=> setPassword(e.target.value)}/></span>
        </div>
        <button type="submit" id="submit-btn" className="ml-20 p-3 mb-2 fixed bottom-12
          hover:scale-110 transition-transform duration-100 rounded-2xl bg-green-900 text-center text-white mt-10 w-[15%]"
          onClick={eventHandler}>continue
        </button>
    
    </div>
  )
}

export default Signin
