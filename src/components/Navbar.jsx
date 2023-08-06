import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Xeleron from '../images/xeleronlogo.png';
import { FaBars } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'
import { AiFillTwitterCircle } from 'react-icons/ai';
import { BsTelegram, BsDiscord, BsMedium } from 'react-icons/bs';
import StormLogo from '../images/stormlogo.png'

function Navbar() {
  const [toggleMobileNav, setToggleMobileNav] = useState(true)
  const [showDropdown, setShowDropdown] = useState(false);
  


  const scrollToElement = () => {
    const element = document.getElementById('network');
    element.scrollIntoView({ behavior: 'smooth' });
  };

  function toggleNav(){
    setToggleMobileNav(prevValue => !prevValue)
    setShowDropdown(false);
  }
  return (
    <nav className='flex items-center justify-between h-[80px] px-6 lg:px-10 fixed top-0 md:w-[90%] mt-[2%] md:ml-[5%]  z-[999] bg-[#e0d8d8] rounded-2xl text-lg shadow-lg shadow-purple-900'>
        <Link className='text-[30px] text-purple-700 flex items-center'><img src={StormLogo} alt="" className='mr-3 w-[37.01px] h-[36.78px] font-extrabold'/> Storm</Link>
        <ul id='hide-scroll' className={`w-full lg:w-[35%] flex justify-between text-white lg:text-[14px] fixed lg:static lg:flex-row flex-col top-[80px] ${toggleMobileNav ? 'right-[-100%]' : 'right-0 max-h-[calc(100vh-80px)] overflow-y-scroll lg:overflow-y-hidden pb-9'} items-center bg-purple-800 z-[999] text-[24px] p-5 lg:px-3 rounded-xl lg:pb-0  transition-all duration-300 delay-300 ease-in-out`}>
        <li className={`lg:mb-0 mb-6  relative ${showDropdown ? 'z-10' : ''}`} onClick={() => setShowDropdown((prevValue) => !prevValue)}>
  <Link className='hover:opacity-70 text-lg'>Swap</Link>
</li>

            <li className='lg:mb-0 mb-6 hover:opacity-70 text-lg'><a href='https://github.com/'>Pool</a></li>
            <li onClick={scrollToElement} className='lg:mb-0 mb-6 hover:opacity-70 text-lg'  ><Link>Farm</Link></li>
            <li className='lg:mb-0 mb-6 hover:opacity-70 text-lg'><a href='https://xeleron.gitbook.io/xeleron/' >Stake</a></li>
            <li className='lg:hidden block text-[16px] w-full mb-5'><a href='https://t.me/XeleronFinance'><button className='h-[60px] text-[#69CED1] border border-[#69CED1] rounded-[14px] bg-[#011718] w-full hover:opacity-50'>Connect Wallet</button></a></li>
            <li className='lg:hidden block text-[16px] w-full'><Link to='/swap'><button className='h-[60px] bg-purple-800 rounded-[14px] text-white w-full hover:opacity-50'>Swap</button></Link></li>
        </ul>
        <div  className='hidden lg:block'><button className='h-[50px] bg-purple-800 rounded-2xl text-white px-7'><a href='https://t.me/XeleronFinance'>Connect Wallet</a></button></div>

        <div className='lg:hidden text-[#69CED1] cursor-pointer text-2xl' onClick={toggleNav}>{ toggleMobileNav ? <FaBars /> : <AiOutlineClose />}</div>
    </nav>
  )
}

export default Navbar