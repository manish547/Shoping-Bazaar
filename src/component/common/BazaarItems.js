import React, { useState } from 'react'

const BazaarItems = ({ images, ProductName, FashionName, Price, rating, Reviews, EnterMouse, LeaveMouse, index, isHoverProduct }) => {
    const [isLike, SetIsLike] = useState(false)
    const totalStars = 5

    const hendleLike = (index) => {
        SetIsLike(index)
    }
    const hendleDisLike = (index) => {
        SetIsLike(true)
    }

    return (
        <div key={index}  >
            <div className=' w-[290px]   cursor-pointer overflow-hidden relative bg-[#E3E9EF]  ' onMouseEnter={() => EnterMouse(index)} onMouseLeave={() => LeaveMouse()}>
                {/* images div */}
                <img className='hover:scale-125 transition-all duration-1000' src={images} alt={ProductName} />
                <button className={`  text-black absolute top-3 transition-opacity duration-500  ${isHoverProduct === index ? "right-2" : "hidden"} transition-all duration-500 p-1 rounded-full  bg-[#00000037] `}><img className='w-4' src='./images/new26.svg' alt='cart' /></button>

                {isLike === index ? (
                    <button onClick={() => hendleDisLike(index)} className={`absolute top-14 -right-[18px]  ${isHoverProduct === index ? "right-2" : "hidden"} transition-all duration-500 p-1 rounded-full  bg-[#00000037] `}>
                        <img className='w-4' src='./images/new27.svg' alt='cart' />
                    </button>
                ) : (
                    <button onClick={()=> hendleLike(index)} className={`absolute top-14 -right-[18px]  ${isHoverProduct === index ? "right-2" : "hidden"} transition-all duration-500 p-1 rounded-full  bg-[#00000037] `}>
                        <img className='w-4' src='./images/new25.svg' alt='cart' />
                    </button>
                )}


                {isHoverProduct === index && <button className='bg-black absolute bottom-0 text-white w-full h-12'>Quick View</button>}
            </div>
            <div className='flex flex-col items-center justify-center text-black mt-3 '>
                {/* detail */}
                <span className='text-[#AEB4BE] block text-center text-xs w-full'>{FashionName}</span>
                <p className='mb-0 mt-0 text-sm font-semibold normal-case w-full text-center p-0.5'>{ProductName}</p>
                <h4 className='p-1 w-full text-center mt-0 mb-0 text-lg pt-1 normal-case font-bold'>{Price}</h4>
                <div className='flex items-center justify-center gap-2'>
                    <div className='cursor-pointer text-base flex items-center justify-center'>
                        {Array(totalStars).fill(<span ><img className='w-4' src='./images/new29.svg' alt='star' /></span>).fill(<span ><img className='w-4' src='./images/new28.svg' alt='star' /></span>, 0, rating)}
                    </div>
                    <small className='text-xs font-semibold normal-case text-[#AEB4BE]'>{Reviews}</small>
                </div>

            </div>
        </div>
    )
}

export default BazaarItems