import React from 'react'
import Slider from "react-slick";
import Cards_at__city from './Cards_at__city';
const Main_head_card = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: false,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };
  return (
    <div>
    <Slider {...settings}>
    <div>
    <Cards_at__city/>
    </div>
    <div>
    <Cards_at__city/>
    </div>
    <div>
    <Cards_at__city/>
    </div>
    <div>
    <Cards_at__city/>
    </div>
    <div>
    <Cards_at__city/>
    </div>
    <div>
    <Cards_at__city/>
    </div>
  </Slider>
    
    </div>
  )
}

export default Main_head_card;