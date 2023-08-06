import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineEllipsis } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Xeleron from '../images/xeleronlogo.png';
import StormLogo from '../images/stormlogo.png'
import { FaBars } from 'react-icons/fa';
import { ConnectButton } from '@rainbow-me/rainbowkit';



function AltNav({current}) {
  const dispatch = useDispatch();
  const { status: connectStatus, account } = useSelector(
    (state) => state.connectionStatus
  );
  const { web3Modal } = useSelector((state) => state.web3);


  const [displayMobileNav, setDisplayMobileNav] = useState(false);

  function toggleMobileNav() {
    setDisplayMobileNav((prevValue) => !prevValue);
  }

  return (
    <nav className="flex items-center justify-between px-4 h-[80px] w-[90%] fixed overflow-x-hidden ml-[5%] z-[50] md:mt-2 bg-[#e0d8d8] rounded-2xl text-lg shadow-lg shadow-purple-900">
      <div className="w-fit">
        <Link to="/" className="text-[20px] md:text-[30px] text-[#6f1e8f] flex items-center">
          <img src={StormLogo} alt="" className="mr-3 md:w-[37.01px] md:h-[36.78px] w-[34px]" />{' '}
          Storm
        </Link>
      </div>

      <div
        className={`flex flex-col md:flex-row items-center fixed md:static top-[80px] ${
          displayMobileNav ? 'right-0' : 'right-[100%]'
        } md:scale-[1] w-full md:static justify-between md:w-[calc(100%-150px)]  text-purple-950 z-40 py-7 md:py-0 transition-all delay-300 duration-300 ease-in-out`}
      >
        <ul className="flex flex-col md:flex-row w-full items-center md:w-[40%]">
          <li className="w-fit md:w-3/12 text-center mb-5 md:mb-0 relative">
            <div className={`h-[2px] w-full absolute left-0 -bottom-1 md:-bottom-2 bg-white ${current === 'swap' ? 'block' : 'hidden'}`}></div>
            <Link to='/swap'>Swap</Link>
          </li>
          <li className="w-3/12 text-center mb-5 md:mb-0 relative">
            <div className={`h-[2px] w-full absolute left-0 -bottom-1 md:-bottom-2 bg-white ${current === 'pool' ? 'block' : 'hidden'}`}></div>
            <Link to='/pool'>Pool</Link>
          </li>
          <li className="w-3/12 text-center mb-5 md:mb-0 relative">
            <div className={`h-[2px] w-full absolute left-0 -bottom-1 md:-bottom-2 bg-white ${current === 'launchpad' ? 'block' : 'hidden'}`}></div>
            <Link to='/'>Farm</Link>
          </li>
          <li className="w-3/12 text-center mb-5 md:mb-0 relative">
            <div className={`h-[2px] w-full absolute left-0 -bottom-1 md:-bottom-2 bg-white ${current === 'launchpad' ? 'block' : 'hidden'}`}></div>
            <Link to='/'>Staking</Link>
          </li>
    
        </ul>

        <div className="md:flex items-center flex-col md:flex-row hidden">
          <ConnectButton chainStatus="icon" accountStatus="address" />
        </div>
      </div>

      <div className='flex items-center  space-x-3 pr-2 md:hidden'>
        <div className="flex items-center flex-col md:flex-row text-xs">
          <ConnectButton chainStatus="icon" accountStatus="address" />
        </div>
        <div className="cursor-pointer " onClick={toggleMobileNav}>
        {displayMobileNav ? <AiOutlineClose /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
}

export default AltNav;
