import React, { useEffect, useState } from 'react';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';
import diamond from '../../../images/ashdiamond.png';
import green from '../../../images/greenpool.png';
import path from '../../../images/pathIcon.png';
import { useDispatch, useSelector } from 'react-redux';
import { showCreateAPair, showRemoveLiquidity } from '../../Features/PoolSlice';
import { useConnectModal } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';
import Logo from '../../../images/xeleronlogo.png'

function LiquidityMain() {
  const dispatch = useDispatch();

  const [pools, setPools] = useState([
    { name: 'ETH/XLR', id: 1, img: diamond, liquidity: false },
    { name: 'USDT/XLR', id: 2, img: diamond, liquidity: false },
  ]);

  function toggleDisplayFullPool(id) {
    setPools((prevValue) =>
      prevValue.map((pool) =>
        pool.id === id ? { ...pool, liquidity: !pool.liquidity } : pool
      )
    );
  }

  const { signer } = useSelector((state) => state.web3);

  const { openConnectModal } = useConnectModal();
  const { isConnected } = useAccount();

  function checkIsConnected() {
    if (!isConnected) {
      openConnectModal();
    }
  }
  return (
    <section className="w-full max-w-[586px] sm:w-[586px] mx-auto px-3 sm:px-0">
      <div className=' bg-purple-900 p-3 rounded-xl mt-3'>
      <p className="text-white mb-6">
        Liquidity providers earn a 0.3% fee on all trades proportional to their
        share of the pool. Fees are added to the pool, accrue in real time and
        can be claimed by withdrawing your liquidity.
      </p>
      

      <div className="flex items-center justify-between mt-9">
        <p className="text-[12px] sm:text-[16px] text-white">Your Liquidity</p>
        <div className="flex items-center text-[12px] sm:text-[16px]">
          <button
            onClick={() => {
              if (!signer) checkIsConnected();
              else dispatch(showCreateAPair());
            }}
            className="text-[#011718] bg-gray-300 shadow-lg shadow-purple-500 sm:w-[127px] h-[36px] sm:h-[48px] px-2 rounded-xl sm:rounded-xl ml-2 hover:brightness-75"
          >
            Add Liquidity
          </button>
        </div>
      </div>


      </div>
      
      {/* <p className=" ml-3 my-6 flex items-center text-purple-900">
        Account analysis and accrued fees{' '}
        <img src={path} alt="path" className="ml-2" />
      </p> */}

      <div className='mt-6'>
        {pools.map((pool) => {
          return (
            <div
              key={pool.id}
              className={`w-full overflow-hidden ${
                !pool.liquidity ? 'h-[105px]' : 'h-[330px]'
              } mb-4 bg-purple-800 rounded-xl px-3 sm:px-5`}
            >
              <div className="w-full bg-gray-300 shadow-lg shadow-purple-900 rounded-xl px-3 h-[80px] flex items-center justify-between mt-3">
                <div className="flex items-center p-3 rounded-xl text-white bg-purple-800">
                  <img className="mr-3" src={diamond} alt="diamond" />
                  <img className="mr-3 w-[15%]" src={Logo} alt="green" />
                  <p>{pool.name}</p>
                </div>
                <i
                  className="cursor-pointer"
                  onClick={() => toggleDisplayFullPool(pool.id)}
                >
                  {!pool.liquidity ? <AiOutlineDown /> : <AiOutlineUp />}
                </i>
              </div>

              <div className="mt-6 mb-7 text-[#DCDCDC]">
                <div className="flex items-center justify-between mb-2">
                  <p>Your total pool tokens</p>
                  <p>0.000000000</p>
                </div>

                <div className="flex items-center justify-between mb-2">
                  <p>Pooled ETH</p>
                  <p>0.000000000 ETH</p>
                </div>

                <div className="flex items-center justify-between mb-2">
                  <p>Pooled XLR</p>
                  <p>0.000000000 XLR</p>
                </div>

                <div className="flex items-center justify-between mb-2">
                  <p>Your pool share</p>
                  <p>0.00%</p>
                </div>

                <div>
                  

                  <div className="flex justify-between">
                    <button
                      className="bg-gray-300 text-purple-900 h-[48px] rounded-xl w-[48%] hover:bg-[#174849] duration-300"
                      onClick={() => dispatch(showRemoveLiquidity())}
                    >
                      Remove
                    </button>
                    <button className="bg-gray-300 text-purple-900 h-[48px] rounded-xl w-[48%] hover:bg-[#174849] duration-300">
                      Add
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <p className="text-center">
        Don't see a pool joined?{' '}
        <span className="text-purple-950 font-bold text-[14px] ml-3 cursor-pointer">import it</span>
      </p>
    </section>
  );
}

export default LiquidityMain;
