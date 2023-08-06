import React from 'react';
import { Link } from 'react-router-dom';
import Xeleron from '../images/xeleronlogo.png';
import icon1 from '../images/icon1.png';
import telegram from '../images/telegram.png';
import twitter from '../images/twitter.png';
import bubble from '../images/bubble.png';
import StormLogo from '../images/stormlogo.png'

function Footer() {
  return (
    <footer className='bg-purple-800 flex flex-col md:flex-row text-white justify-between md:mx-12 sm:px-8 py-4 rounded-t-xl'>
        <div className='w-4/6 md:w-[224px] flex flex-col justify-between'>
            <p className='md:hidden my-4 text-white text-[12px]'>Xeleron aims to cater to the evolving needs of her users with her innovative infrastructures</p>
            <div>
                <div className='flex mb-8'>
                    <a href='https://discord.com/' className='mr-2'><img src={icon1} alt="" /></a>
                    <a href='https://t.me/XeleronFi' className='mr-2'><img src={telegram} alt="" /></a>
                    <a href='https://twitter.com/XeleronFi' className='mr-2'><img src={twitter} alt="" /></a>
                    <a href='https://xeleronfi.medium.com/' className='mr-2'><img src={bubble} alt="" /></a>
                </div>
                <p className='text-white text-[12px] hidden md:block'>2023 StormSwap. All rights reserved</p>
            </div>
        </div>

        <div className='flex w-full md:w-8/12 justify-between flex-wrap'>
            <div className='w-1/2 md:w-fit mt-7 md:mt-0'>
                <h5 className='text-white mb-4 text-[20px]' id='network'>ScrollTestnet</h5>
                
                
            </div>

            <div className='w-1/2 md:w-fit mt-7 md:mt-0'>
                <h5 className='text-white mb-4 text-[20px]'>Developer</h5>
                <a href='https://github.com/'>
                <p className='mb-2'>GitHub</p>
                </a>
                
                <p className='mb-2'>Audit</p>
            </div>

            <div className='w-1/2 md:w-fit mt-7 md:mt-0'>
                <h5 className='text-white mb-4 text-[20px]'>About</h5>
                <p className='mb-2'>Blog</p>
                <p className='mb-2'>Terms of service</p>
                <p className='mb-2'>Cookies Privacy</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer