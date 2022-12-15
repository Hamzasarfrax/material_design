import React from 'react'
import { AiFillHome } from "react-icons/ai";
import "../Style/CardStyle.css"
const Cards_at__city = () => {
    return (
        <div>

            <div className="">
                <div className="">
                    <section className='card__Section__001'>

                        <div className="card_main_parents">
                            <div className="main_cards">
                                <div className="main__card_img">
                                    <img src="https://dummyimage.com/250x180/db284c/fff.png&text=card_imgs" alt="cards_Prb" className='img-fluid rounded' />
                                </div>
                                <div className="card_tittle">
                                    Gadap Town

                                </div>
                                <div className="card_body">
                                    <div className="main_card_flex__box">
                                        <div className="main_content_card">
                                            <div className="card_flex_for_adjust_contents">
                                                <div className="card_icon">
                                                    <i>    <AiFillHome /></i>
                                                </div>
                                                <div className="text_card_with_icons">123
                                                </div>
                                            </div>
                                            <div className="card_descriptions">
                                                On Rent
                                            </div>
                                        </div>

                                        <div className="main_content_card secondary">
                                            <div className="card_flex_for_adjust_contents">
                                                <div className="card_icon">
                                                    <i>    <AiFillHome /></i>
                                                </div>
                                                <div className="text_card_with_icons">123
                                                </div>
                                            </div>
                                            <div className="card_descriptions">
                                                On Sale
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>

                    </section>
                </div>

            </div>

        </div>
    )
}

export default Cards_at__city;