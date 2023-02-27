import React from 'react'
import Slider from "react-slick";
import Card_detail_slider from "../Components/Cart_detail_slider";
import "../Style/card_detal.css";
import {FcRating} from "react-icons/fc"
const Card_detail = () => {
  return (
    <div>
      <div className="cart_section">
        <div className="container">
          <div className="main_heading">

            <h2>
            details about the product

            </h2>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <div className="slider_cart">
                <Card_detail_slider />

                <div className="reviews_sectr">
                <div className="h3">rating of product</div>
                <span class="fa fa-star checked"></span>
<span>
<FcRating/>
</span>
<span>
<FcRating/>
</span>
<span>
<FcRating/>
</span>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
            <div className="bref_desc">
              <h1>description</h1>
              <div className="detailing">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque reprehenderit quae nisi facilis. Dolorum voluptate neque excepturi iure iusto, harum voluptatum, aut porro tenetur totam molestiae consectetur! Consectetur, eligendi fugiat!
              </div>
              <div className="price_box">
              <div className="tittle_price">
              <h2>  price of the product</h2>
              </div>
                <h2>
                  pkr $ : 00000
                </h2>
              </div>
              <div className="detail_quantitiy_pdrct">
<h3>
  quantity of product
</h3>
<div id="incdec">
<button className='btn_number minus'>minus</button>
    <input type="number" value="0" className='form_control' />
    <button className='btn_number plus'>plus</button>
    
</div>
              </div>
              <div className="checkout_btn">
                <button className='btn btn_main'>
                  checkout 
                </button>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card_detail;