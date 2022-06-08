import React, {useEffect} from "react";
import { Link, Route } from "react-router-dom";
import "react-bootstrap";
import Newf1 from "../assets/newf1.png";
import Chat1 from "../assets/chat1.png";
import Class from "../assets/class.png";
import "./dashboard.css";
import Header from "../components/header"
import LoginHeader from "../components/login-head";


const tokenVal = window.localStorage.getItem("token")
const firstLoad=window.localStorage.getItem("load")
if(firstLoad=="firstload"){
  window.location.reload(false);
  window.localStorage.removeItem("load");
}
  

const Dashboard = () => {
  // useEffect(() => {
  //   window.location.reload(false);
  //   return 0;
    
  // }, []);
  return (
    <div >
      {tokenVal? <Header/>:<LoginHeader/>}
      <div >
        <main className="main" >

        

        <h1  className="display-3 text-black font-weight-bold my-1 " style= {{fontSize:"40px", color: "black"}}>
            The Agro Factory - Change The Way To Trade..
            </h1>
            <p className="sub_des" style={{fontSize: "140%"}}>
          Agriculture Management System is to help farmers by providing various
          kinds of Agri related information and <br /> they can sell their products to
          the customers in the website..
        </p>
          <section className="card-area" > 
            {/* farmer market */}
            <section className="card-section" >
              <div className="card" >
                <div className="flip-card">
                  <div className="flip-card__container">
                    <div className="card-front">
                      <div className="card-front__tp card-front__tp--city">
                          
                        <h2 className="card-front__heading">Farmers Market</h2>
                        <p className="card-front__text-price">From £29</p>
                      </div>
                      <div className="card-front__bt">
                        <p className="card-front__text-view card-front__text-view--city">
                          View More
                        </p>
                      </div>
                    </div>
                    <div className="card-back">
                      <video className="video__container" autoPlay muted loop>
                        <source
                          className="video__media"
                          src="https://media.istockphoto.com/videos/decorating-a-variety-of-colorful-fruits-on-a-white-wooden-table-or-video-id1035538712"
                          type="video/mp4"
                        />
                      </video>
                    </div>
                  </div>
                </div>
                <div className="inside-page">
                  <div className="inside-page__container">
                    <h3 className="inside-page__heading inside-page__heading--city">
                      The Farmers Market
                    </h3>
                    <p className="inside-page__text">
                      Here is the Farmers Market. you can,
                      Eat better and Feel Better !!
                    </p>
                    <a
                      href="/fmarket"
                      className="inside-page__btn inside-page__btn--city"
                    >
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
            </section>
            {/* fertilizer */}
            <section className="card-section">
              <div className="card">
                <div className="flip-card">
                  <div className="flip-card__container">
                    <div className="card-front">
                      <div className="card-front__tp card-front__tp--ski">
                        <h2 className="card-front__heading">Crop Protection</h2>
                        <p className="card-front__text-price">From £199</p>
                      </div>
                      <div className="card-front__bt">
                        <p className="card-front__text-view card-front__text-view--ski">
                          View More
                        </p>
                      </div>
                    </div>
                    <div className="card-back">
                      <video className="video__container" autoPlay muted loop>
                        <source
                          className="video__media"
                          src="https://media.istockphoto.com/videos/plant-a-tomato-seedlings-in-the-ground-hands-gently-press-the-ground-video-id1005496576"
                          type="video/mp4"
                        />
                      </video>
                    </div>
                  </div>
                </div>
                <div className="inside-page">
                  <div className="inside-page__container">
                    <h3 className="inside-page__heading inside-page__heading--ski">
                      The Bio Fertilizers
                    </h3>
                    <p className="inside-page__text">
                      Here is the Fertilizers for 
                      your better crops. get more 
                      and give more !!
                    </p>
                    <a
                      href="/vegetables"
                      className="inside-page__btn inside-page__btn--ski"
                    >
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
            </section>
            {/* machinery */}
            <section className="card-section">
              <div className="card">
                <div className="flip-card">
                  <div className="flip-card__container">
                    <div className="card-front">
                      <div className="card-front__tp card-front__tp--beach">
                        <h2 className="card-front__heading">Machinery</h2>
                        <p className="card-front__text-price">From £229</p>
                      </div>
                      <div className="card-front__bt">
                        <p className="card-front__text-view card-front__text-view--beach">
                          View More
                        </p>
                      </div>
                    </div>
                    <div className="card-back">
                      <video className="video__container" autoPlay muted loop>
                        <source
                          className="video__media"
                          src="https://media.istockphoto.com/videos/slow-motion-farmer-digging-in-the-field-video-id1191612986"
                          type="video/mp4"
                        />
                      </video>
                    </div>
                  </div>
                </div>
                <div className="inside-page">
                  <div className="inside-page__container">
                    <h3 className="inside-page__heading inside-page__heading--beach">
                      The Machinery Shop
                    </h3>
                    <p className="inside-page__text">
                      Here is the tools and machinerys 
                      for your farming. Buy it and Start it !!
                    </p>
                    <a
                      href="/machinery"
                      className="inside-page__btn inside-page__btn--beach"
                    >
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
            </section>
            {/* seeds */}
            <section className="card-section">
              <div className="card">
                <div className="flip-card">
                  <div className="flip-card__container">
                    <div className="card-front">
                      <div className="card-front__tp card-front__tp--camping">
                        <h2 className="card-front__heading">Seeds</h2>
                        <p className="card-front__text-price">From £129</p>
                      </div>
                      <div className="card-front__bt">
                        <p className="card-front__text-view card-front__text-view--camping">
                          View More
                        </p>
                      </div>
                    </div>
                    <div className="card-back">
                      <video className="video__container" autoPlay muted loop>
                        <source
                          className="video__media"
                          src="https://media.istockphoto.com/videos/hands-with-wheat-grains-video-id180392000"
                          type="video/mp4"
                        />
                      </video>
                    </div>
                  </div>
                </div>
                <div className="inside-page">
                  <div className="inside-page__container">
                    <h3 className="inside-page__heading inside-page__heading--camping">
                      The Seed Shop
                    </h3>
                    <p className="inside-page__text">
                      Here is the seeds for Your 
                      field. Buy and enjoy the good foods !!
                    </p>
                    <a
                      href="/seeds"
                      className="inside-page__btn inside-page__btn--camping"
                    >
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
            </section>
            {/* news */}
            <section className="card-section">
              <div className="card">
                <div className="flip-card">
                  <div className="flip-card__container">
                    <div className="card-front">
                      <div className="card-front__tp card-front__tp--news">
                        <h2 className="card-front__heading">News</h2>
                        <p className="card-front__text-price">From £129</p>
                      </div>
                      <div className="card-front__bt">
                        <p className="card-front__text-view card-front__text-view--news">
                          View More
                        </p>
                      </div>
                    </div>
                    <div className="card-back">
                      <video className="video__container" autoPlay muted loop>
                        <source
                          className="video__media"
                          src="https://media.istockphoto.com/videos/news-newspaper-article-press-media-video-id970803432"
                          type="video/mp4"
                        />
                      </video>
                    </div>
                  </div>
                </div>
                <div className="inside-page">
                  <div className="inside-page__container">
                    <h3 className="inside-page__heading inside-page__heading--news">
                      Latest News
                    </h3>
                    <p className="inside-page__text">
                      Here is the latest news about
                       the  Agriculture. Read and Improve it !!
                    </p>
                    <a
                      href="/news"
                      className="inside-page__btn inside-page__btn--news"
                    >
                      View News
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </section>

          <div className="chatimg">
          <Link to="/agri_class" className="class">
            <figure>
              <img src={Class} width="60px" height="60px"/>
            </figure>
            </Link>
          <Link to="/Chat" className="chat">
            <figure>
              <img src={Chat1} width="60px" height="60px"/>
            </figure>
            </Link>
            </div>

          <footer className="footer">
            <p className="footer-text">© 2021 Created by Maza designDev</p>
          </footer>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
