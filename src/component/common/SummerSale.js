import React from "react"

const SummerSale = () => {


  return (
    <dev className="relative  ">
                    <img src="./images/banner-11.jpg" alt="banner" className='h-[404px] w-screen ' />
                    <div className='absolute top-3 text-white flex flex-col items-center justify-center w-full mt-24 '>
                        <h3 className=' text-3xl font-normal '>Extra <span className=' text-[#D23F57] '>30% Off</span> Online</h3>
                        <h1 className='text-5xl font-bold'>Summer Season Sale</h1>
                        <span className=' text-lg font-semibold mt-2  '>Free Shipping On Orders Over $99</span>
                        <button className=' cursor-pointer text-base bg-[#222] font-semibold text-white capitalize shadow-[0px 4px 16px rgba(43, 52, 69, 0.1)] mt-8 px-11 py-3 '>Shop Now</button>
                    </div>
                </dev>
  )
}

export default SummerSale