import React from "react";
import {NavHashLink} from "react-router-hash-link";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Logo from "../images/logo.png";

const curryear = new Date().getFullYear();

const Footer = () => {
    return(
        <>
            <footer>
                <div id="sub-footer">
                    <div className ="container">
                        <div className ="row d-flex justify-content-between py-5">
                            <div className ="col-xl-4 col-lg-5 col-md-7 col-sm-7 pb-sm-5 pb-3">
                                <NavHashLink to="/#" className ="footer-title">
                                    <img src={Logo} alt="footer logo" className="footer-logo" />
                                    techneuron
                                </NavHashLink>     
                                <div className ="py-4 text-white">
                                    <h5><LocationOnIcon /> A-3 Rajouri Garden, New Delhi West, 110027 India.</h5>
                                    <h5 className="my-4"><MailIcon /> info.techinfo2003@gmail.com</h5>
                                    <h5><PhoneIcon /> +91-9555047692</h5>
                                </div>
                                <div className ="footer-social pt-4">
                                    <a className="text-white facebook" href="https://www.facebook.com/techinfopvtltd">
                                        <FacebookIcon />
                                    </a>
                                    <a className="text-white instagram mx-4" href="https://www.instagram.com/techinfopvtltd">
                                        <InstagramIcon />
                                    </a>
                                    <a className="text-white twitter" href="https://twitter.com/techinfopvtltd">
                                        <TwitterIcon />
                                    </a>
                                    <a className="text-white linkedin ml-4" href="https://www.linkedin.com/company/techinfopvtltd">
                                        <LinkedInIcon />
                                    </a>
                                </div>
                            </div>
                            <div className ="col-xl-2 col-lg-2 col-md-4 col-sm-5 pb-sm-5 pb-3">
                                <h4>company</h4>
                                <ul>
                                    <li>
                                        <NavHashLink smooth className="navlink" to="/#">
                                            work
                                        </NavHashLink>
                                    </li>
                                    <li>
                                        <NavHashLink smooth className="navlink" to="/#contact-us">
                                            contact us
                                        </NavHashLink>
                                    </li>
                                    <li>
                                        <NavHashLink smooth className="navlink" to="/#testimonials">
                                            testimonials
                                        </NavHashLink>
                                    </li>
                                    <li>
                                        <NavHashLink smooth className="navlink" to="/privacy-policy#">
                                            privacy policy
                                        </NavHashLink>
                                    </li>
                                </ul>
                            </div>
                            <div className ="col-xl-2 col-lg-2 col-md-4 col-sm-5 pb-sm-5 pb-3">
                                <h4>services</h4>
                                <ul>
                                    <li>
                                        <NavHashLink smooth className="navlink" to="/#web-development">
                                            web development
                                        </NavHashLink>
                                    </li>
                                    <li>
                                        <NavHashLink smooth className="navlink" to="/#mobile-app">
                                            mobile app
                                        </NavHashLink>
                                    </li>
                                    <li>
                                        <NavHashLink smooth className="navlink" to="/#ui-ux-design">
                                            uI/UX design
                                        </NavHashLink>
                                    </li>
                                    <li>
                                        <NavHashLink smooth className="navlink" to="/#hire-developers">
                                            hire developers
                                        </NavHashLink>
                                    </li>
                                </ul>
                            </div>
                            <div className ="col-xl-2 col-lg-2 col-md-4 col-sm-5">
                                <h4>quick links</h4>
                                <ul>
                                    <li>
                                        <NavHashLink smooth className="navlink" to="/#">
                                            home
                                        </NavHashLink>
                                    </li>
                                    <li>
                                        <NavHashLink smooth className="navlink" to="/#about-us">
                                            about us
                                        </NavHashLink>
                                    </li>
                                    <li>
                                        <NavHashLink smooth className="navlink" to="/#services">
                                            services
                                        </NavHashLink>
                                    </li>
                                    <li>
                                        <NavHashLink smooth className="navlink" to="/#testimonials">
                                            testimonial
                                        </NavHashLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="main-footer">
                    <div className="container-fluid" id="main-footer">
                        <div className="row">
                            <div className="col-xl-12 text-center pt-3">
                            <p>© {curryear} <strong><a href="https://www.hardcipher.io" className="copyright-link">Hardcipher Pvt Ltd</a></strong> | All Rights Reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;