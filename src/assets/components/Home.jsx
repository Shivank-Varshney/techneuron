import React from "react";
import Particles from 'react-particles-js';
import City from "../images/city.png";
import About from "../images/about.png";
import Service1 from "../images/service-1.png";
import Service2 from "../images/service-2.png";
import Service3 from "../images/service-3.png";
import Service4 from "../images/service-4.png";
import Avatar from "../images/avatar.png";
import {NavHashLink} from "react-router-hash-link";
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000
      };
    return(
        <>
            <Particles 
                className="particle d-sm-block d-none"
                params={{particles: { "size": { "value": 2},line_linked: { enable:false,}}}}
            />


            {/* Header Section */}
            <header id="header">
                <div className="container">
                    <div className="row">
                        <div className="col py-5 px-lg-5">
                            <h1 className="header-title" data-aos="fade-in">let your software do the talking</h1>
                            <p className="header-content" data-aos="fade-in">At Techneuron, we have a team of executives who specialize in software development. We offer individual attention to each project and deliver the best we can. Our team is equipped with in-depth knowledge and all the latest automation. We customize software according to our client’s preferences and work until our clients are delighted.At Techneuron, we have a team of executives who specialize in software development. We offer individual attention to each project and deliver the best we can. Our team is equipped with in-depth knowledge and all the latest automation. We customize software according to our client’s preferences and work until our clients are delighted.</p>
                            <div className="d-flex justify-content-center my-5" data-aos="fade-in">
                                <NavHashLink smooth to="/#about-us" className="about-btn shadow mr-sm-4 mr-3">
                                    about us
                                </NavHashLink>
                                <NavHashLink smooth to="/#contact-us" className="contact-btn shadow">
                                    contact us
                                </NavHashLink>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <section id="city">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col d-flex align-items-end">
                            <img src={City} alt="city illustration" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </section>


            {/* About Section */}
            <section id="about-us">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h2 className="about-title mb-5" data-aos="fade-up">about us</h2>
                            <div className="row">
                                <div className="col-md-7" data-aos="fade-up">
                                    <img src={About} alt="about illustration" className="img-fluid" />
                                </div>
                                <div className="col-md-5 pt-4" data-aos="fade-up">
                                    <article>
                                        <p className="about-content">We are the top-level software development organization that offers sublime Software related Services because of our immense experience, group of talented experts, key business insights, and a devoted working routine. Techneuron has engineers that are specialists in their respective fields. They make use of their experience and mastery to deliver first class software solutions.</p>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Services Section */}
            <section id="services">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h2 className="services-title mb-3" data-aos="fade-up">our services</h2>
                            <p className="services-content px-lg-5 mx-lg-5 mb-5" data-aos="fade-up">We have an array of talented people who expertise in some of the other field required in software development. We stand to deliver projects on time and strive for customer satisfaction. You can always expect top-notch quality and creativity from our side.</p>
                            <div className="row"></div>
                        </div>
                    </div>
                    <div className="row">
                        <ServiceCard 
                            id = "web-development" imgsrc = {Service1} title = "web development"
                            content = "Our web development organization has been creating web applications for the custom business prerequisites of all our customers. Our engineer's abilities, experience and bleeding edge innovation will fabricate nothing but the best designs."
                        />
                        <ServiceCard 
                            id = "mobile-app" imgsrc = {Service2} title = "mobile app"
                            content = "We have an efficient team of mobile app developers who work according to the client's requirements, in their budget and according to their given timelines. "
                        />
                        <ServiceCard 
                            id = "ui-ux-design" imgsrc = {Service3} title = "ui/ux design"
                            content = "UIs should feel normal without numerous interruption, or the clients will get disappointed and leave the application inside and out. A larger piece of our plan includes slicing the mess to achieve a simple type of client experience."
                        />
                        <ServiceCard 
                            id = "hire-developers" imgsrc = {Service4} title = "hire developers"
                            content = "Increase your product advancement capacities with our committed, experienced, and talented designer of hand-picked specialists that will complete your task in the specified period given to them."
                        />
                    </div>
                </div>
            </section>


            {/* Testimonial Section */}
            <section id="testimonials">
                <div className="container mb-5">
                    <div className="row">
                        <div className="col">
                            <h2 className="testimonials-title my-4" data-aos="fade-up">user testimonials</h2>
                            <p className="testimonials-content px-lg-5 mx-lg-5 mb-5" data-aos="fade-up">Every project we received had its difficulties and challenges, but we faced everything. Hence, today we can share success stories of people who loved our work and how we could successfully convert those customers into our regular clients.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Slider {...settings}>
                                <div>
                                    <Testimonial />
                                </div>
                                <div>
                                    <Testimonial />
                                </div>
                                <div>
                                    <Testimonial />
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>


            {/* Background Image */}
            <section id="back-img"></section>

            {/* Contact Section */}
            <section id="contact-us">
                <div className="container pb-5">
                    <div className="row">
                        <div className="col mb-5">
                            <h2 className="contact-title mb-3" data-aos="fade-up">Contact Us</h2>
                            <p className="contact-content px-lg-5 mx-lg-5 mb-5" data-aos="fade-up">Give us a call, email us at the given mail id or fill in the form provided, and our staff will connect with you to provide an excellent work experience.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <form>
                                <div className="form-group" data-aos="fade-up">
                                    <label htmlFor="InputName">Name<span className="asterisk">*</span></label>
                                    <input type="text" className="form-control" placeholder="Enter your name" name="name" id="InputName" />
                                </div>
                                <div className="form-group" data-aos="fade-up">
                                    <label htmlFor="InputEmail">Email<span className="asterisk">*</span></label>
                                    <input type="email" className="form-control" placeholder="Enter your email" name="email" id="InputEmail" />
                                </div>
                                <div className="form-group" data-aos="fade-up">
                                    <label htmlFor="InputSubject">Subject<span className="asterisk">*</span></label>
                                    <input type="email" className="form-control" placeholder="Enter your subject" name="subject" id="InputSubject" />
                                </div>
                                <div className="form-group" data-aos="fade-up">
                                    <label htmlFor="InputMessage">Message<span className="asterisk">*</span></label>
                                    <textarea className="form-control" placeholder="Enter your message..." name="message" id="InputMessage" rows="4"></textarea>
                                </div>
                                <button type="submit" className="btn btn-submit" data-aos="fade-up">Submit</button>
                            </form>
                        </div>
                        <div className="col-md-5 offset-md-1 pt-lg-0 pt-5 contact-details">
                            <h4 className="detail-heading" data-aos="fade-up">contact details</h4>
                                <div className ="py-4 text-white detail" data-aos="fade-up">
                                    <h5><LocationOnIcon /> A-3 Rajouri Garden, New Delhi West, 110027 India.</h5>
                                    <h5 className="my-4"><MailIcon /> info.techinfo2003@gmail.com</h5>
                                    <h5><PhoneIcon /> +91-9555047692</h5>
                                </div>
                            <h4 className="detail-heading mt-4" data-aos="fade-up">Social Links</h4>
                                <div className ="detail-icon pt-3" data-aos="fade-up">
                                    <a className="text-white facebook" href="https://www.facebook.com/techinfopvtltd">
                                        <FacebookIcon />
                                    </a>
                                    <a className="text-white instagram mx-4" href="https://www.instagram.com/techinfopvtltd">
                                        <InstagramIcon />
                                    </a>
                                    <a className="text-white twitter" href="https://twitter.com/techinfopvtltd">
                                        <TwitterIcon />
                                    </a>
                                    <a className="text-white twitter ml-4" href="https://www.linkedin.com/company/techinfopvtltd">
                                        <LinkedInIcon />
                                    </a>
                                </div>
                        </div>
                    </div>
                    <div className="row my-5">
                        <div className="col" data-aos="fade-up">
                            <div className="embed-responsive embed-responsive-16by9">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448183.74528793746!2d76.8123666481234!3d28.646675804806918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1618745409995!5m2!1sen!2sin" className="embed-responsive-item" allowFullScreen="" loading="lazy" title="google map"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}


const ServiceCard = (props) => {
    return(
        <>
            <div className="col-xl-3 col-md-6" id={props.id} data-aos="fade-up">
                <div className="card mb-4">
                <div className="card-header d-flex align-items-center">
                    <img src={props.imgsrc} className="card-img-top p-2" alt="services of techneuron" />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.content}</p>
                </div>
                </div>
            </div>
        </>
    );
}

const Testimonial = () => {
    return(
        <>
            <div className="col-md-9 px-3 testimonial mx-auto text-center" data-aos="fade-up">
                <p className="testimonial-content my-4"><sup><FormatQuoteIcon /></sup>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas eos distinctio modi aliquam! Deserunt accusantium perferendis velit labore autem dolore, necessitatibus, quibusdam accusamus nesciunt possimus mollitia nulla facere excepturi<sub><FormatQuoteIcon /></sub></p>
                <div className="testimonial-title">
                    <h3>SHIVANK VARSHNEY</h3>
                </div>
                <div className="testimonial-img mt-3">
                    <img src={Avatar} alt="avatar for testimonial" className="mx-auto avatar-img" />
                </div>
            </div>
        </>
    );
}

export default Home;