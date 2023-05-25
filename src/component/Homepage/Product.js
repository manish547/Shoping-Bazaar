import React from 'react'

import "./Product.css"
import { BestSelling, Offer } from '../../asset/StaticData'
import { useState } from 'react'
import { hover } from '@testing-library/user-event/dist/hover'

const Product = () => {
    const[isHover, setIsHover] = useState([true])

    const hendleEnter = () => {
        setIsHover(true)
    }
    const hendleleave = () => {
        setIsHover(false)
    }
    console.log(isHover, "dsd")
    return (
        <>
            <div>
                <div className='offer-container'>
                    <div className='offer-div'>
                        {
                            Offer.map((item, index) => {
                                return <div key={index} className='offeritem'>
                                    <div className='offer-img'>
                                        <img src={item.img} alt='logo' className='offer-pic' />
                                    </div>
                                    <div className='offer-daitail'>
                                        <h4 className='offerh4'>
                                            {item.tital}
                                        </h4>
                                        <span className='offer-span'>
                                            {item.Daitail}
                                        </span>
                                    </div>
                                </div>

                            })
                        }

                    </div>
                </div>

                <div className='sellingProduct'>
                    <h2>Best selling Categories</h2>
                    <div className='sellingItem'>
                        {BestSelling.map((item, index) => {
                            return <div key={index} className='sellingCantainer'>
                                <img src={item.img} alt="Product" className='sellingimg' onMouseEnter={() => hendleEnter()} onMouseLeave={() => hendleleave()}/>
                               
                               <div className='sellingbtn'>
                                    <button className={`${isHover? "sellbtn" : ""}`} >{item.heading}</button>
                                   
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product