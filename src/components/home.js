import React from "react";
import { Link, Route } from "react-router-dom";
import "./home.css";



import Logo from "../assets/mylogo.png";
import Banner from '../assets/fmm3.jpg';
import Banner2 from '../assets/img3.jpg';
import Smart1 from "../img/smart-protect-1.jpg";
import Smart2 from "../img/smart-protect-2.jpg";
import Smart3 from "../img/smart-protect-3.jpg";
import Feature from "../assets/landfar.png";
import Feature2 from "../assets/gif.gif";
import Header from "../components/header"
import LoginHeader from "../components/login-head";

const tokenVal = window.localStorage.getItem("token")

const home = () => {
  return (
    <div >
      {tokenVal? <Header/>:<LoginHeader/>}

        <div className="jumbotron jumbotron-fluid" id="banner" style={{backgroundImage: `url(${Banner})`}}>
          <div className="container text-center text-md-left">
            <header>
              <div className="row justify-content-between ">
                <div className="col-2" >
                  <img src={Logo} alt="logo" className="photo"  />
                </div>
                <div className="col-6 align-self-center text-right">
                  <a href="login" className="text-white lead">Login...</a>
                </div>
              </div>
            </header>
            <h1 data-aos="fade" data-aos-easing="linear" data-aos-duration={1000} data-aos-once="true" className="display-3 text-white font-weight-bold my-5 " style= {{fontSize:"52px"}}>
            The Agro Factory - Change The Way To Trade..
            </h1>
            <p data-aos="fade" data-aos-easing="linear" data-aos-duration={1000} data-aos-once="true" className="lead text-white my-5" style={{fontSize: "190%"}}>
            Agriculture Management System is to help farmers by providing various
          kinds of Agri related information and 
              <br /> they can sell their products to
          the customers in the website..
            </p>
            <Link to ="/dashboard">
            <button data-aos="fade" data-aos-easing="linear" data-aos-duration={1000} data-aos-once="true" className="btn my-4 font-weight-bold atlas-cta cta-green">Get Started</button>
          </Link>
          </div>
        </div>
        {/* three-blcok */}
        <div className="container my-5 py-2" style={{fontSize: "140%",marginTop: "100px"}}> 
          <h2 className="text-center font-weight-bold my-5 org" style={{marginLeft: "100px"}}>Smartest protection for your site</h2>
          <div className="row">
            <div data-aos="fade-up" data-aos-delay={0} data-aos-duration={1000} data-aos-once="true" className="col-md-4 text-center">
              <img src={Smart1} alt="Anti-spam" className="mx-auto photo" />
              <h4>RECENT NEWS</h4>
              <p>You can view reacent News</p>
            </div>
            <div data-aos="fade-up" data-aos-delay={200} data-aos-duration={1000} data-aos-once="true" className="col-md-4 text-center">
              <img src={Smart2} alt="Phishing Detect" className="mx-auto photo" />
              <h4>Purchase</h4>
              <p>You can Purchase different products</p>
            </div>
            <div data-aos="fade-up" data-aos-delay={400} data-aos-duration={1000} data-aos-once="true" className="col-md-4 text-center">
              <img src={Smart3} alt="Smart Scan" className="mx-auto photo" />
              <h4>SERVICES</h4>
              <p>Many services we are providing</p>
            </div>
          </div>
        </div>
        {/* feature (skew background) */}
        <div className="jumbotron jumbotron-fluid feature" id="feature-first" style={{fontSize: "140%"}}>
          <div className="container my-5">
            <div className="row justify-content-between text-center text-md-left">
              <div data-aos="fade-right" data-aos-duration={1000} data-aos-once="true" className="col-md-6">
                <h2 className="font-weight-bold org">ABOUT US !</h2>
                <p className="my-4"> Agro Factory help farmers by providing various
          kinds of Agri related 
                  <br /> information and they can sell their products to
          the customers in the website..</p>
                <a href="/aboutus" className="btn my-4 font-weight-bold atlas-cta cta-blue">Learn More</a>
              </div>
              <div data-aos="fade-left" data-aos-duration={1000} data-aos-once="true" className="col-md-6 align-self-center">
                <img src={Feature} alt="Take a look inside" className="mx-auto d-block photo" />
              </div>
            </div>
          </div>
        </div>
        {/* feature (green background) */}
        <div className="jumbotron jumbotron-fluid feature" id="feature-last" style={{fontSize: "140%"}}>
          <div className="container">
            <div className="d-flex row justify-content-between text-center text-md-left">
              <div data-aos="fade-right" data-aos-duration={1000} data-aos-once="true" className="col-md-6 align-self-center flex-md-first">
                <img src={Feature2} alt="Safe and reliable" className="mx-auto d-block photo" />
              </div>
              <div data-aos="fade-left" data-aos-duration={1000} data-aos-once="true" className="col-md-6 flex-md-last">
                <h2 className="font-weight-bold org">FEATURES</h2>
                <p className="my-4">
                  Farmers can sell their products to customers through online.
                  <br /> And also here you can buy the Machinery for Agriculture
                </p>
                <a href="/dashboard" className="btn my-4 font-weight-bold atlas-cta cta-blue">Explore Now!</a>
              </div>
            </div>
          </div>
        </div>
        {/* contact */}
        <div className="jumbotron jumbotron-fluid photo" id="contact" style={{backgroundImage: `url(${Banner2})`, fontSize:"140%"}}>
          <div className="container my-5">
            <div className="row justify-content-between">
              <div className="col-md-6 text-white" style={{marginTop: "30px"}}>
                <h2 className="font-weight-bold org">Contact Us</h2>
                <p className="my-4">
                  Agro Factory - Change The Way To Trade..
                  <br /> 
                </p>
                <ul className="list-unstyled">
                  <li>Email : abysonmathew@gmail.com</li>
                  <li>Phone : 9072222529</li>
                  <li>Address : kollamaparampil (h) attappallam, Kumily </li>
                </ul>
              </div>
              <div className="col-md-6">
                <form>
                  <div className="row">
                    <div className="form-group col-md-6">
                      <label htmlFor="name">Your Name</label>
                      <input type="name" className="form-control" id="name" />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="Email">Your Email</label>
                      <input type="email" className="form-control" id="Email" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea className="form-control" id="message" rows={3} defaultValue={""} />
                  </div>
                  <button type="submit" className="btn font-weight-bold atlas-cta atlas-cta-wide cta-green my-3">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* copyright */}
        <div className="jumbotron jumbotron-fluid" id="copyright">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-md-6 text-white align-self-center text-center text-md-left my-2">
                Copyright © 2021 aby, in this.
              </div>
              <div className="col-md-6 align-self-center text-center text-md-right my-2" id="social-media">
                <a href="#" className="d-inline-block text-center ml-2">
                  <i className="fa fa-facebook" aria-hidden="true" />
                </a>
                <a href="#" className="d-inline-block text-center ml-2">
                  <i className="fa fa-twitter" aria-hidden="true" />
                </a>
                <a href="#" className="d-inline-block text-center ml-2">
                  <i className="fa fa-medium" aria-hidden="true" />
                </a>
                <a href="#" className="d-inline-block text-center ml-2">
                  <i className="fa fa-linkedin" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default home;
