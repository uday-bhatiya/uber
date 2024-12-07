import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className='w-screen h-screen py-4 px-2 bg-[#5568AA] flex items-center justify-center'>

        <div className='w-full  md:w-[30%] h-full flex flex-col justify-between py-8 px-2 gap-2 bg-[url(assests/background.jpg)] bg-cover bg-center'>

          <img className='w-16 ml-8' src="assests/uber-logo.png" alt="uber-logo" />

          <div className='flex gap-2'>
            <Link 
            to='/login' 
            className='w-full text-white bg-black py-2 rounded-lg text-center'>Get started</Link>
          </div>

        </div>

    </div>
  )
}

export default Landing