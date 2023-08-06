import React from 'react'
import { Link } from 'react-router-dom';
import box1 from '../../images/Shapebox1.png';
import box2 from '../../images/Shapebox2.png';
import StormLogo from '../../images/stormlogo.png'

function Intro() {
  return (
    <div className='flex flex-col md:flex-row md:items-center mx-10 md:px-10 pb-16 md:mt-8'>
        <section className='w-full md:w-6/12'>
            <h1 className='text-black text-[40px] md:text-[50px] lg:text-[73.39px] leading-[50px] md:leading-[70px] lg:leading-[83px] font-[400px] text-center md:text-left'>We disrupt DeFi Like a
            <span className='text-purple-800'> Storm!</span> </h1>
            <p className='opacity-[0.7] text-black mt-8 text-[20px] lg:text-[24px] text-center md:text-left '>Your all-in-one platform for Trading, Earning, and Lending<span className='hidden sm:inline'>! Embrace unparalleled efficiency and user-friendliness that fully leverages the cutting-edge Arbitrum technology.</span></p>
            <Link to="/swap" className='mt-[50px]'><button className='bg-purple-800 rounded-[14px] text-white w-full md:w-[300px] h-[60px] mt-[30px] hover:brightness-75'>Swap</button></Link>
        </section>


        <section className='md:ml-auto mt-16 md:mt-0 w-full md:w-5/12 lg:w-4/12 flex flex-col items-center bg-gradient-to-b from-purple-300 to-purple-950 rounded-full shadow-lg'>
          <img src={StormLogo} alt='hero--logo' />
          </section>
    </div>
  )
}

export default Intro