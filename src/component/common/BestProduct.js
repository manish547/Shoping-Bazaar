import React from 'react'

const BestProduct = ({image, button, hendleleave, hendleEnter, index, isHover}) => {
    return (
        <div key={index} className='sellingCantainer'>
            <img src={image} alt="Product" className={`${isHover === index ? "sellingimg" : "sellingimg1"}`} onMouseEnter={() => hendleEnter(index)} onMouseLeave={() => hendleleave()} />

            <div className='sellingbtn' >
                <button className={` ${isHover === index ? "sellbtn" : "sellbtn1"}`} onMouseEnter={() => hendleEnter(index)} onMouseLeave={() => hendleleave()} >{button}</button>
            </div>
        </div>
    )
}

export default BestProduct