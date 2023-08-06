import React from 'react'

function Supportedfeatures() {
  return (
    <div className='text-white pt-[30px] md:pt-[60px] lg:pt-[100px] pb-[80px]'>
        <h1 className='text-[32px] sm:text-[40px] lg:text-[68px] text-center mb-4 lg:mb-7 text-purple-800'>Products</h1>

        <div className='px-3 sm:px-7 xl:px-14 flex flex-col items-center lg:flex-row justify-between text-[20px] text-center sm:text-left'>
            <section className='w-full sm:w-[450px] lg:w-[32%] h-[516.8px] bg-[rgba(162,67,185,0.11)] sm:px-7 px-3 flex flex-col justify-center lg:justify-end pb-[4%] lg:pb-[4px] xl:pb-[4%] rounded-[28px] pt-3 lg:pt-0 shadow-lg shadow-purple-800'>
                <h1 className='text-purple-950 text-[30px] lg:text-[32px] xl:text-[40px] mb-2 sm:mb-1 lg:mb-4 xl:mb-7'>Swap</h1>
                <p className='text-[18px] sm:text-[20px]'>Discover unparalleled Capital efficiency with our diverse range of investment opportunities. Benefit from high sustainable real yield across Xeleron farms, Single-side staking, and lending. Leverage up to 50% of your locked XLR in the Staking Vault as Collateral to borrow assets from Xeleron Lend.
</p>
            </section>

            <section className='w-full sm:w-[450px] lg:w-[32%] justify-center h-[516.8px] bg-purple-800 text-purple-300 sm:px-7 px-3 flex flex-col lg:justify-end pb-[8%] rounded-[28px] mt-8 lg:mt-[-60px] pt-2 lg:pt-7 shadow-lg shadow-purple-950'>
                <h1 className='text-purple-300 text-[30px] lg:text-[32px] xl:text-[40px] mb-4 sm:mb-7'>Farm</h1>
                <p className='text-white'>Navigate Xeleron effortlessly with our intuitive and efficient interface. Immerse yourself in a seamless user experience, while reaping exciting rewards across our interoperable infrastructures</p>
            </section>

            <section className='w-full sm:w-[450px] lg:w-[32%] justify-center h-[516.8px] bg-[rgba(162,67,185,0.11)] sm:px-7 px-3 flex flex-col lg:justify-end pb-[4%] rounded-[28px] mt-8 lg:mt-0 pt-7 lg:pt-0 shadow-lg shadow-purple-800'>
                <h1 className='text-purple-950 text-[30px] lg:text-[32px] xl:text-[40px] mb-4 sm:mb-7'>Stake</h1>
                <p>Stay ahead of the curve with Xeleron's ever growing decentralized ecosystem. Our commitment to continuous innovation ensures that we adapt and integrate new infrastructures in line with the dynamic nature of decentralized finance.</p>
            </section>
        </div>
    </div>
  )
}

export default Supportedfeatures