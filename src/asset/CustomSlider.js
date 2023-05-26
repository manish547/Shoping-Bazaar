import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../component/slider/Slider.css';



  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    duration: 4000,
    autoplay: false,
    autoplaySpeed: 0,
    
    
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const CustomSlider = ({children}) => {

  return (
    <div className="post-slider">
      <Slider {...settings} className="slick-slider-custom" >
        {children}
      </Slider>
    </div>
  );
};

export default CustomSlider;
