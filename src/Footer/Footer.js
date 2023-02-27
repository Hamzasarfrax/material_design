import React from 'react'
import { HiOutlineMail } from "react-icons/hi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { ImLocation2 } from "react-icons/im";
import { BsLinkedin,BsFacebook,BsTwitter,BsInstagram,BsYoutube,BsSearch } from "react-icons/bs";
const Footer = () => {
    return (
        <div>

            <footer id="footer" className="style_footer_wrapper__JVYT6">
                <section className="style_footer_widget_area__I7clD">
                    <div className="container">
                        <div className="style_footer_grid_row__xPIFY row">
                            <div className="style_footer_grid_col__B_KNE col-lg-3 col-sm-6 col-12">
                                <div className="style_footer_widget_wrapper__Uv1SC">
                                    <h4 className="style_footer_widget_title__Ssogf">About</h4>
                                    <ul className="style_footer_widget_navigation__dGe40">
                                        <li>
                                            <a href="/about">Our Story</a>
                                        </li>
                                        <li>
                                            {" "}
                                            <a
                                                id="blog"
                                                href="/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Our Blog
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/">Careers</a>
                                        </li>
                                        <li>
                                            <a href="/">Gurus</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="style_footer_grid_col__B_KNE col-lg-3 col-sm-6 col-12">
                                <div className="style_footer_widget_wrapper__Uv1SC">
                                    <h4 className="style_footer_widget_title__Ssogf">Quick Links</h4>
                                    <ul className="style_footer_widget_navigation__dGe40">
                                        <li>
                                            <a href="/">Projects in Pakistan</a>
                                        </li>
                                        <li>
                                            <a href="/">Projects in Karachi</a>
                                        </li>
                                        <li>
                                            <a href="/">Projects in Lahore</a>
                                        </li>
                                        <li>
                                            <a href="/">Projects in Islamabad</a>
                                        </li>
                                        <li>
                                            <a href="/s">
                                                Property Directory for Cities
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="style_footer_grid_col__B_KNE col-lg-3 col-sm-6 col-12">
                                <div className="style_footer_widget_wrapper__Uv1SC">
                                    <h4 className="style_footer_widget_title__Ssogf">Contact Us</h4>
                                    <address className="style_footer_contact_widget__evOeR">
                                        <div className="main_content_contact___us__footer">
                                            <span className='social__icons_ftr_vbr'>
                                                <i>
                                                    <HiOutlineMail />
                                                </i>

                                            </span>
                                            <span className='this__footer__contact_content-012'>
                                                info@gmail.com
                                            </span>

                                        </div>
                                        <div className="main_content_contact___us__footer">
                                            <span className='social__icons_ftr_vbr
                                    '>
                                                <i>
                                                    <BsFillTelephoneFill />
                                                </i>

                                            </span>
                                            <span className='this__footer__contact_content-012'>
                                                +1234567890
                                            </span>

                                        </div>
                                        <div className="main_content_contact___us__footer">
                                            <span className='social__icons_ftr_vbr'>
                                                <i>
                                                    <ImLocation2 />
                                                </i>

                                            </span>
                                            <span className='this__footer__contact_content-012'>
                                                info@gmail.com
                                            </span>

                                        </div>
                                    </address>
                                </div>
                            </div>
                            <div className="style_footer_grid_col__B_KNE col-lg-3 col-sm-6 col-12">
                                <div className="style_footer_widget_wrapper__Uv1SC">
                                    <h4 className="style_footer_widget_title__Ssogf">Follow Us</h4>
                                    <ul className="style_footer_social_widget__G4Cit">
                                        <li className="style_social_list_item__qb3Av">
                                            <a
                                                className="has-tooltip"
                                                data-tooltip="LinkedIn"
                                                href="/"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                <div className="all__Socials__Icons">
                                                    <i>
                                                        <BsLinkedin />
                                                    </i>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="style_social_list_item__qb3Av">
                                            <a
                                                className="has-tooltip"
                                                data-tooltip="Facebook"
                                                href="https://www.facebook.com/GraanaCom"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                <div className="all__Socials__Icons">
                                                    <i>
                                                        <BsFacebook />
                                                    </i>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="style_social_list_item__qb3Av">
                                            <a
                                                className="has-tooltip"
                                                data-tooltip="Instagram"
                                                href="https://www.instagram.com/graanacom/"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                <div className="all__Socials__Icons">
                                                    <i>
                                                        <BsTwitter />
                                                    </i>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="style_social_list_item__qb3Av">
                                            <a
                                                className="has-tooltip"
                                                data-tooltip="Twitter"
                                                href="https://twitter.com/GraanaCom"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                <div className="all__Socials__Icons">
                                                    <i>
                                                        <BsInstagram />
                                                    </i>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="style_social_list_item__qb3Av">
                                            <a
                                                className="has-tooltip"
                                                data-tooltip="Youtube"
                                                href="https://www.youtube.com/channel/UCZ2yzfZUnND6hHmPpwMAjyg"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                <div className="all__Socials__Icons">
                                                    <i>
                                                        <BsYoutube />
                                                    </i>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                    <div />
                                    <h4 className="style_footer_widget_title__Ssogf">
                                        Search Property by ID
                                    </h4>
                                    <div className="style_footer_subscribe_widget__CN9UY">
                                        <form action="#" className data-hs-cf-bound="true">
                                            <div className="mb-3 input-group">
                                                <input
                                                    required
                                                    type="number"
                                                    name="property_id"
                                                    placeholder="Property ID"
                                                    autoComplete="off"
                                                    className="style_footer_subscribe_widget_feild__8_niL form-control"
                                                />
                                                <button
                                                    type="submit"
                                                    className="style_footer_subscribe_widget_action__gIWwO  btn-md btn-accent btn-icon btn btn_main"
                                                >
                                                <i>
                                                <BsSearch/>
                                                </i>
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
              
            </footer>
            <footer id='copyright__main_ftr'>
            <section className="style_footer_copyright_area__varIK">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-12">
                        <p>
                            Copyright © <span>2022</span> Material_Design. All rights reserved.
                        </p>
                    </div>
                    <div className="col-lg-6 col-12">
                        <ul className="style_policy_menu__F2PEI">
                            <li>
                                <a href="/terms">Terms &amp; Conditions</a>
                            </li>
                            <li>
                                <a href="/policy">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="/">Disclaimer</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
            
            </footer>

        </div>
    )
}

export default Footer;