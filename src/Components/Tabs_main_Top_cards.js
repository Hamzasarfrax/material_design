import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Slick__Slider from '../Slider/Slick__Slider';
import "../Style/Tabs_Style.css";
import Main_head_card from "../Components/Main_head_card";
import { AiFillHome } from "react-icons/ai";

const Tabs_main_Top_cards = () => {
  return (
    <div>
      <div className="main__reat__tabs">
<div className="main_headings_all">
top areas by city
</div>
        <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Home</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Profile</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Contact</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#pills-disabled" type="button" role="tab" aria-controls="pills-disabled" aria-selected="false" >Disabled</button>
          </li>
        </ul>
        <div className="header_section_002">
          <a href="#" target="_blank">
            <div className="parent_top_card_flex">
              <div className="header_for_top_card">
                <div className="main_top_header_card">
                  <div className="icon">
                    <i>    <AiFillHome /></i>

                  </div>
                  <div className="tittle">
                    for rent :
                  </div>
                </div>
              </div>
              <div className="amonut_num">
                12345
              </div>
            </div>
          </a>
          <a href="#" target="_blank">
            <div className="parent_top_card_flex">
              <div className="header_for_top_card">
                <div className="main_top_header_card">
                  <div className="icon">
                    <i>    <AiFillHome /></i>

                  </div>
                  <div className="tittle">
                    for rent :
                  </div>
                </div>
              </div>
              <div className="amonut_num">
                12345
              </div>
            </div>
          </a>
        </div>
        <div class="tab-content" id="pills-tabContent">
          <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
            <Main_head_card />
          </div>
          <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">
            <Main_head_card />
          </div>
          <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabindex="0"> <Main_head_card /></div>
          <div class="tab-pane fade" id="pills-disabled" role="tabpanel" aria-labelledby="pills-disabled-tab" tabindex="0"> <Main_head_card /></div>
        </div>
      </div>


    </div>
  )
}

export default Tabs_main_Top_cards;