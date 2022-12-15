import React from 'react';
import "../App.css";
import Img_with_main_Text from '../Components/Img_with_main_Text';
import Main_blog from '../Components/Main_blog';
import Main__bg_Card from '../Components/Main__bg_Card';

import Tabs_main_Top_cards from '../Components/Tabs_main_Top_cards';

import Slick__Slider from '../Slider/Slick__Slider';

const Main = () => {
  return (
    <div>
      <div className="main_no_Auth__page_wrapper">
        <Slick__Slider />

        <div className="container">
          <Tabs_main_Top_cards />

          <Main__bg_Card />
          <Img_with_main_Text />
          <Main_blog />

        </div>

      </div>
    </div>
  )
}

export default Main;
