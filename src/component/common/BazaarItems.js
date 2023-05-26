import React from 'react'

const BazaarItems = ({images, ProductName, FashionName, Price, ratiing, Reviews, EnterMouse, LeaveMouse, index, isHoverProduct}) => {
    return (
        <div key={index} className='' >
            <div className=' w-[290px]   cursor-pointer overflow-hidden relative bg-[#E3E9EF]  ' onMouseEnter={() => EnterMouse(index)} onMouseLeave={() => LeaveMouse()}>
                {/* images div */}
                <img className='hover:scale-125 transition-all duration-1000' src={images} alt={ProductName} />
                <button className={`  text-black absolute top-3 transition-opacity duration-500  ${isHoverProduct === index ? "right-2" : "hidden"} transition-all duration-500 p-1 rounded-full  bg-[#00000037] `}><img className='w-4' src='./images/new26.svg' alt='cart' /></button>

                <button className={`   absolute top-14 -right-[18px]  ${isHoverProduct === index ? "right-2" : "hidden"} transition-all duration-500 p-1 rounded-full  bg-[#00000037] `}><img className=' w-4' src='./images/new25.svg' alt='cart' /></button>

                {isHoverProduct === index && <button className='bg-black absolute bottom-0 text-white w-full h-12'>Quick View</button>}
            </div>
            <div className='flex flex-col items-center justify-center text-black mt-3 '>
                {/* detail */}
                <span className='text-[#AEB4BE] block text-center text-xs w-full'>{FashionName}</span>
                <p className='mb-0 mt-0 text-sm font-semibold normal-case w-full text-center p-0.5'>{ProductName}</p>
                <h4 className='p-1 w-full text-center mt-0 mb-0 text-lg pt-1 normal-case font-bold'>{Price}</h4>
                <div className='flex items-center justify-center gap-2'>
                    <span className='cursor-pointer text-base'>{ratiing}</span>
                    <small className='text-xs font-semibold normal-case text-[#AEB4BE]'>{Reviews}</small>
                </div>

            </div>
        </div>
    )
}

export default BazaarItems