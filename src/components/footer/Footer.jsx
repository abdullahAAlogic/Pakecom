import React from 'react'
import { FaTwitter ,FaFacebookF , FaInstagram , FaLinkedinIn , FaPaperPlane } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="main_footer">
        <div className="blue_overlay2"></div>
        <div className="container">
            <div className="row">
                <div className="col-xl-3  col-md-6 col-lg-6 col-12">
                    <div className="footer_desc  ">
                        <img src="images/logo.png" className="img-fluid" alt="img" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                    </div>
                </div>


                <div className="col-xl-3  col-md-6 col-lg-6 col-12">
                    <div className="newsletter_footer mt-5  ">
                        <h4>Newsletter</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, </p>
                        <form>
                            <input type="text" name="email" placeholder="Your mail address"/>
                            <button type="submit"><FaPaperPlane/></button>
                        </form>
                        <ul className="footer_social d-flex align-items-center">
                            <li><a href="index.html"><FaTwitter/> </a></li>
                            <li><a href="index.html"><FaFacebookF /></a></li>
                            <li><a href="index.html"><FaInstagram /></a></li>
                            <li><a href="index.html"><FaLinkedinIn /></a></li>
                        </ul>
                    </div>
                </div>

                <div className="col-xl-3  col-md-6 col-lg-6 col-12">
                    <div className="footer_contact mt-5   ">
                        <h4>Official info:</h4>
                        <ul>
                            <li>
                                <a href="index.html#">
                                    <i className="fas fa-map-marker-alt"></i>
                                    <span>Lorem ipsum street 1875</span>
                                </a>
                            </li>
                            <li>
                                <a href="tel:8044322573">
                                    <i className="fas fa-phone-alt"></i>
                                    <span>8044322573</span>
                                </a>
                            </li>
                            <li>
                                <a href="mailto:adambotteicher@gmail.com">
                                    <i className="fas fa-envelope"></i>
                                    <span>adambotteicher@gmail.com</span>
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>

                <div className="col-xl-3  col-md-6 col-lg-6 col-12">
                    <div className="insta-gal mt-5 ">
                        <h4>Instagram</h4>
                        <ul>
                            <li><img src="images/inta-img-1.jpg" alt="images"/></li>
                            <li><img src="images/inta-img-2.jpg" alt="images"/></li>
                            <li><img src="images/inta-img-3.jpg" alt="images"/></li>
                            <li><img src="images/inta-img-4.jpg" alt="images"/></li>
                            <li><img src="images/inta-img-5.jpg" alt="images"/></li>
                            <li><img src="images/inta-img-1.jpg" alt="images"/></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer_bottom">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-8">
                        <div className="footer_bottom_text  ">
                            <p>2022 © All Rights Reserved by Lorem Ipsum</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="footer_bottom_img  ">
                            <img src="images/card-img.png" alt="images"/></div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer