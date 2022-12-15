import React from 'react'
import Slider from "react-slick";
import "../Style/Other.css"
import Main_selct_picker from '../Components/Main_selct_picker';
const Slick__Slider = () => {
  const settings = {
    dots:false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <div>
    <div className="main_carousel_landing">
    <Slider {...settings}>
    <div>
      <div className="Slide_imgs">

        <img src="https://dummyimage.com/1200x500/d6c3d6/fff.png&text=mail_slider_imgs" alt="" />
      </div>
    </div>
    <div>
      <div className="Slide_imgs">

        <img src="https://dummyimage.com/1200x500/d6c3d6/fff.png&text=mail_slider_imgs" alt="" />
      </div>
    </div>
    <div>
      <div className="Slide_imgs">

        <img src="https://dummyimage.com/1200x500/d6c3d6/fff.png&text=mail_slider_imgs" alt="" />
      </div>
    </div>

  </Slider>

  <div className="all_content_main_page_of_text">
  <Main_selct_picker/>
  
  </div>
    </div>
    </div>
  )
}

export default Slick__Slider;