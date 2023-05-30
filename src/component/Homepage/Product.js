import React from 'react'

import "./Product.css"
import { Bazzaritem, BestSelling, FeaturedProducts, Offer } from '../../asset/StaticData'
import { useState } from 'react'
import CustomLabelData from '../common/CustomLabelData'
import BestProduct from '../common/BestProduct'
import BazaarItems from '../common/BazaarItems'
import FeaturedPro from '../common/FeaturedPro'
import SummerSale from '../common/SummerSale'

const Product = () => {
    const [isHover, setIsHover] = useState(true)
    const [isHoverProduct, setIsHoverProduct] = useState(true)
    const [FeaturedProduct, setFeaturedProduct] = useState(true)

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
    const EnterMouseFeaturedProduct = (index) => {
        setFeaturedProduct(index)
    }
    const LeaveMouseFeaturedProduct = () => {
        setFeaturedProduct(false)
    }


    //    const  ProductName= "manish"
    //    const  FashionName= "ffgdfgdfgdfg"
    //    const  Price= "fdgfdgfdgfg"
    //    const  ratiing= "sfhsrtjsrghsths"
    //    const  Reviews= "sthjsrtujatrjs"
    //    const  img= "stuateryiartikat"
    //    const  index= "teajiatkjaetjet"
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
                    {/* <CustomSlider > */}
                    {/* <BazaarItems images={img} ProductName={ProductName} FashionName={FashionName} Price={Price} rating={ratiing} Reviews={Reviews} LeaveMouse={LeaveMouse} EnterMouse={EnterMouse} index={index} isHoverProduct={isHoverProduct} /> */}
                    {Bazzaritem.map((item, index) => {
                        const { img, ProductName, FashionName, Price, ratiing, Reviews } = item
                        return <BazaarItems images={img} ProductName={ProductName} FashionName={FashionName} Price={Price} rating={ratiing} Reviews={Reviews} LeaveMouse={LeaveMouse} EnterMouse={EnterMouse} index={index} isHoverProduct={isHoverProduct} />
                    })}
                    {/* </CustomSlider> */}
                </div>
            </div>

            {/* Fratured Product */}
            <div>
                <h2 className='text-center mt-16 mb-8 text-2xl font-bold text-[#2B3445]'>Featured Product</h2>
                <div className='flex items-center justify-center flex-wrap mb-20'>
                    {
                        FeaturedProducts.map((item, index) => {
                            const {img, FashionName, ProductName, Price, ratiing,  Reviews} = item
                             return <FeaturedPro img={img} FashionName={FashionName} ProductName={ProductName} Price={Price} Reviews={Reviews} index={index} FeaturedProduct={FeaturedProduct} EnterMouseFeaturedProduct={EnterMouseFeaturedProduct} LeaveMouseFeaturedProduct={LeaveMouseFeaturedProduct} ratiing={ratiing} />
                        })
                    }
                </div>
            </div>

            <div className='mb-6'>
                <SummerSale />
            </div>
        </>
    )
}

export default Product
