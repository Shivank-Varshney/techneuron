import React from "react";
import {NavHashLink} from "react-router-hash-link";
import MenuIcon from '@material-ui/icons/Menu';
import Logo from "../images/logo.png";

const Navbar = () => {
    return(
        <>
            <div className="container-fluid shadow" id="navbar">
                <div className="row">
                    <div className="col">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <nav className="navbar navbar-expand-lg" data-aos="fade-down" data-aos-offset="0">
                                        <a className="navbar-brand" href="/#">
                                            <img src={Logo} alt="header logo" className="header-logo" />
                                            Techneuron
                                        </a>
                                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                            <MenuIcon />
                                        </button>
                                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                            <ul className="navbar-nav ml-auto">
                                                <Navmenu linkaddress="/ #" linkname="home" />
                                                <Navmenu linkaddress="/#about-us" linkname="about us" />
                                                <Navmenu linkaddress="/#services" linkname="services" />
                                                <Navmenu linkaddress="/#testimonials" linkname="testimonial" />
                                                <Navmenu linkaddress="/#contact-us" linkname="contact us" />
                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

const Navmenu = (props) => {
    return(
        <>
            <li className="nav-item active">
                <NavHashLink smooth className="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show" to={props.linkaddress}>{props.linkname}</NavHashLink>
            </li>
        </>
    );
}

export default Navbar;