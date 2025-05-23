import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from '../firebase/app.js';

function SignUp() {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log("User created:", user);
      setErrorMessage('Sign Up was Successful');
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const googleSignin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log("Google Sign-In User:", user);
        navigate('/');
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  return (
    <div className=''>
      <div className="p-2 mt-12">
        <span className="transition-all duration-300 h-12 relative flex items-center justify-start space-x-2">
          <i className="fa-solid fa-user py-2 px-2"></i>
          <input
            className="w-[300px] py-2 px-2 rounded-xl text-lg bg-[#d6d1d1] mt-2"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </span>

        <span className="relative flex items-center justify-start space-x-2">
          <i className="fa-solid fa-envelope py-2 px-2"></i>
          <input
            className="w-[300px] py-2 px-2 rounded-xl text-lg bg-[#d6d1d1] mt-2"
            type="email"
            placeholder="Email address"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </span>

        <span className="relative flex items-center justify-start space-x-2">
          <i className="fa-solid fa-lock py-2 px-2 "></i>
          <input
            className="w-[300px] py-2 px-2 rounded-xl text-lg bg-[#d6d1d1] mt-2"
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </span>
      </div>

      <button
        type="button"
        className="ml-20 p-1 mb-2 absolute bottom-32 left-3 hover:scale-110 transition-transform duration-100 rounded-2xl bg-green-900 text-white mt-10 w-[30%]"
        onClick={handleSignUp}
      >
        Continue
      </button>

      <p className='text-center mt-16 font-bold fixed left-[610px] top-[200px]'>OR</p>

      <button
        type="button"
        className='mt-2 ml-20 text-xl fixed left-[600px] top-[220px] font-semibold text-violet-900 hover:underline cursor-pointer'
        onClick={googleSignin}
      >
        Continue With Google
      </button>

      <img
        src='https://cdn-icons-png.flaticon.com/256/2875/2875404.png'
        alt="Google Symbol"
        className='w-24 mx-auto p-2 fixed left-[720px] top-[270px] pointer-events-none opacity-50'
      />

      <div className='text-red-600 text-base p-4 mt-22 text-center'>
        {errorMessage && <p>{errorMessage}</p>}
      </div>
    </div>
  );
}

export default SignUp;
