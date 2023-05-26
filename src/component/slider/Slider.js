import React from 'react'
import { SliderArray } from '../../asset/StaticData'

import "./Slider.css"
import CustomSlider from '../../asset/CustomSlider'

const Slider = () => {
    return (
        <>
            <CustomSlider  className='content1'>
                {SliderArray.map((item, index) => {
                    
                    return <div className="mainsilder" key={index}>
                        <div className="silderbox">
                            <div  className='slider'>
                                <div className='ditail'>
                                    <h1 className='heading'>{item.tital1}</h1>
                                    <h1 className='heading'> {item.tital2}</h1>
                                    <p className='discritionspan'>{item.discription}</p>
                                    <button className='shopbtn'>Shop Now</button>
                                </div>
                                <div >
                                    <img src={item.img} alt="product ing" className='pic' />
                                </div>
                            </div>
                        </div>
                    </div>

                })}
            </CustomSlider>

        </>
    )
}

export default Slider