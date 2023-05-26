import React from 'react'

import "./Product.css"
import { Bazzaritem, BestSelling, Offer } from '../../asset/StaticData'
import { useState } from 'react'
import CustomLabelData from '../common/CustomLabelData'
import BestProduct from '../common/BestProduct'
import BazaarItems from '../common/BazaarItems'

const Product = () => {
    const [isHover, setIsHover] = useState(true)
    const [isHoverProduct, setIsHoverProduct] = useState(true)

    const hendleEnter = (index) => {
        setIsHover(index)
    }
    const hendleleave = () => {
        setIsHover(false)
    }
    const EnterMouse = (index) => {
        setIsHoverProduct(index)
    }
    const LeaveMouse = () => {
        setIsHoverProduct(false)
    }


    return (
        <>
            {/* labeled data sectiob */}
            <div className='offer-container'>
                <div className='offer-div'>
                    {Offer.map((item, index) => {
                        const { img, tital: title, Daitail: detail } = item
                        return <CustomLabelData key={index} isborderVisible={index !== Offer.length - 1} image={img} title={title} description={detail} />
                    })}
                </div>
            </div>

            {/* best selling section */}
            <div className='sellingProduct'>
                <h2>Best selling Categories</h2>
                <div className='sellingItem'>
                    {BestSelling.map((item, index) => {
                        const { img, heading } = item
                        return <BestProduct image={img} button={heading} hendleEnter={hendleEnter} hendleleave={hendleleave} index={index} isHover={isHover} />
                    })}
                </div>
            </div>

            {/* Best Selling Product */}
            
                <div className='mt-16 ml-auto mr-auto'>
                    <h2 className='text-center mb-8 font-bold text-2xl'>Best Selling Product</h2>
                    {/* <div className='w-[314px] flex my-0 mx-44 items-center justify-center gap-5   m-0 bg-white' > */}
                    <div className=' flex-wrap flex my-0 mx-44 items-center justify-center gap-5   m-0 bg-white' >
                        {Bazzaritem.map((item, index) => {
                            const{img, ProductName, FashionName, Price, ratiing, Reviews } = item
                            return <BazaarItems images={img} ProductName={ProductName} FashionName={FashionName} Price={Price} ratiing={ratiing} Reviews={Reviews} LeaveMouse={LeaveMouse} EnterMouse={EnterMouse} index={index} isHoverProduct={isHoverProduct} />
                        })}
                    </div>
                </div>
        </>
    )
}

export default Product
