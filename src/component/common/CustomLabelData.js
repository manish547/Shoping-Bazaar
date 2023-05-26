import React from 'react'

function CustomLabelData({image, title, description,isborderVisible}) {
  return (
    <div  className={`offeritem ${isborderVisible && "border-rigth"} `}>
    <div className='offer-img'>
        <img src={image} alt='logo' className='offer-pic' />
    </div>
    <div className='offer-daitail'>
        <h4 className='offerh4'>
            {title ?? ""}
        </h4>
        <span className='offer-span'>
            {description ?? ""}
        </span>
    </div>
</div>
  )
}

export default CustomLabelData

