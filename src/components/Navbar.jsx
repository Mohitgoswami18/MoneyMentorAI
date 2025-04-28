import React, { useEffect, useState } from 'react';

function Navbar() {

  return (
    <div className='flex font-[Poppins] items-center border-b-[0.5px] py-4 pb-8 border-[#374151]'>
      <h1 className=' text-[#E6EDF3] mr-[150px] text-center font-bold items-center text-2xl'>MoneyMentorAI</h1>
      <div className='flex justify-center'>
        <div className='#161B22 items-center rounded-full bg-[#1F2937] text-[#E6EDF3]'>
          <ul className='flex  h-12  items-center rounded-full'>
            <li className='m-4 hover:scale-110 transition-transform ml-14 font-semibold cursor-pointer hover:underline'>Home</li>
            <li className='m-4 hover:scale-110 transition-transform font-semibold cursor-pointer hover:underline'>Work Flow</li>
            <li className='m-4 hover:scale-110 transition-transform font-semibold cursor-pointer hover:underline'>Features</li>
            <li className='m-4 hover:scale-110 transition-transform font-semibold cursor-pointer hover:underline'>AboutUs</li>
            <li className='m-4 hover:scale-110 transition-transform mr-14 font-semibold cursor-pointer hover:underline'>News</li>
          </ul>
        </div>
      </div>
      <div>
        <button className=' text-[#E6EDF3] bg-[#3B82F6] px-3 py-3 rounded-2xl ml-[220px] cursor-pointer text-center font-bold items-center text-base'>signUp/ Login</button>
      </div>
    </div>
  );
}

export default Navbar;
