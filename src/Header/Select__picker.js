import React from 'react'
import SelectPicker from 'rsuite/SelectPicker';
import "rsuite/dist/rsuite.css";
import Slick__Slider from '../Slider/Slick__Slider';
const data = ['Eugenia', 'Bryan', 'Linda', 'Nancy', 'Lloyd', 'Alice', 'Julia', 'Albert'].map(
    item => ({ label: item, value: item })
);
const Select__picker = () => {
    return (
        <div>
        <Slick__Slider/>
        <div className="container">
        <div className="main_select__picker">
        <SelectPicker data={data} block />

        </div>
        </div>
           

        </div>
    )
}

export default Select__picker;