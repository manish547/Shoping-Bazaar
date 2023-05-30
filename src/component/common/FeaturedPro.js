import React, { useState } from 'react'

const FeaturedPro = ({ img, FashionName, ProductName, Price, ratiing, Reviews, index, LeaveMouseFeaturedProduct, EnterMouseFeaturedProduct, FeaturedProduct }) => {
    const [isliked, SetIsliked] = useState(false)
    const totalReating = 5

    const hendlLide = (index) => {
        SetIsliked(index)
    }
    const hendlDislike = (index) => {
        SetIsliked(true)
       
    }
    return (
        <> <div key={index} className='flex items-center justify-center flex-col w-[251px] overflow-hidden'>
            <div className=' overflow-hidden relative' onMouseEnter={() => EnterMouseFeaturedProduct(index)} onMouseLeave={() => LeaveMouseFeaturedProduct()} >

                <img src={img} alt={ProductName} className='w-56 h-56 bg-[#e3e9ef] hover:scale-110 transition-all duration-1000' />

                <button className={`w-7 h-7  absolute top-2 ${FeaturedProduct === index ? "right-2" : "hidden"} text-center rounded-full  hover:bg-[#0000000d]`}>

                    <img className='w-4 ml-[6px]' src='./images/new26.svg' alt='cart' />

                </button>
 
                {isliked === index ?(
                <button onClick={() => hendlDislike(index)} className={`w-7 h-7  absolute top-10  ${FeaturedProduct === index ? "right-2" : "hidden"} text-center rounded-full  hover:bg-[#0000000d]`}><img className='w-4 ml-[6px] ' src='./images/new27.svg' alt='cart' /></button>) : (<button onClick={() => hendlLide(index)} className={`w-7 h-7  absolute top-10  ${FeaturedProduct === index ? "right-2" : "hidden"} text-center rounded-full  hover:bg-[#0000000d]`}><img className='w-4 ml-[6px] ' src='./images/new25.svg' alt='cart' /></button>
                )  }



                {FeaturedProduct === index && <button className='w-full absolute bottom-0  bg-black text-white left-0 bottom-0 h-11 '>Quick View</button>}

            </div>
            <div className='flex items-center flex-col justify-center mt-3 '>
                <span className='text-[#AEB4BE] text-xs'>{FashionName}</span>
                <p className='text-sm font-bold py-1'>{ProductName}</p>
                <h4 className='text-base font-bold py-1'>{Price}</h4>
                <div className='flex items-center justify-center gap-1'>
                {Array(totalReating).fill(<span ><img className='w-4' src='./images/new29.svg' alt='star' /></span>).fill(<span ><img className='w-4' src='./images/new28.svg' alt='star' /></span>, 0, ratiing)}
                    <small className='text-xs font-semibold text-[#AEB4BE]'>{Reviews}</small>
                </div>
            </div>
        </div></>
    )
}

export default FeaturedPro