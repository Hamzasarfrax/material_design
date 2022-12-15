import React from 'react'
import Slider from "react-slick";
import Invest__Card from '../Cards/Invest__Card';
const Inves__Card_Slider = () => {
    const settings = {
        dots: true,
        infinite: false,
        slidesToShow: 3,
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
                    <div className="Slide_CARD">
                        <Invest__Card />
                    </div>
                </div>

                <div>
                <div className="Slide_CARD">
                    <Invest__Card />
                </div>
            </div>

            <div>
            <div className="Slide_CARD">
                <Invest__Card />
            </div>
        </div>

        <div>
        <div className="Slide_CARD">
            <Invest__Card />
        </div>
    </div>

    <div>
    <div className="Slide_CARD">
        <Invest__Card />
    </div>
</div>

<div>
<div className="Slide_CARD">
    <Invest__Card />
</div>
</div>


            </Slider>

        </div>
    )
}

export default Inves__Card_Slider