import React from "react";
import { Link, Route } from "react-router-dom";
import Vege from "../assets/vege.png";
import Frui from "../assets/frui.jpg";
import Grain from "../assets/grain.jpg";
import milk from "../assets/milk.jpg";
import Baked from "../assets/baked.jpg";
import Header from "../components/header"
import LoginHeader from "../components/login-head";
import "./fmarket.css";

import {
  Nav,
  Navbar,
  Container,
  NavDropdown,
  Dropdown,
  Card,
} from "react-bootstrap";

const tokenVal = window.localStorage.getItem("token")

const fmarket = () => {
  return (
    <div className="bkImg">
{tokenVal? <Header/>:<LoginHeader/>}
      <div>
        <h1 >Farmers Market - The Organic Farm...</h1>
      </div>
      <div className="icon-list fadeInDown">
        <div className="my-icon">
          <div>
            <figure>
              <img src={Vege}  />
            </figure>
            <Link to="/vege">
              <button className="btn-dash" style={{marginLeft: "20px",marginTop: "20px"}}>Vegetables</button>
            </Link>
          </div>
        </div>

        <div className="my-icon">
          <div>
            <figure>
              <img src={Frui} />
            </figure>
            <Link to="/fruits">
              <button className="btn-dash" style={{marginLeft: "20px",marginTop: "20px"}}>Fruits</button>
            </Link>
          </div>
        </div>

        <div className="my-icon">
          <div>
            <figure>
              <img src={Grain} />
            </figure>
            <Link to="/grains">
              <button className="btn-dash" style={{marginLeft: "20px",marginTop: "20px"}}>Grains</button>
            </Link>
          </div>
        </div>
        {/* <div className="my-icon"  style={{marginTop: "37px"}}>
          <div>
            <figure>
              <img src={milk} />
            </figure>
            <Link to="/vegetables">
              <button className="btn-dash" style={{marginLeft: "20px",marginTop: "37px"}}>Milk</button>
            </Link>
          </div>
        </div>
        <div className="my-icon">
          <div>
            <figure>
              <img src={Baked} />
            </figure>
            <Link to="/vegetables">
              <button className="btn-dash" style={{marginLeft: "20px",marginTop: "20px"}}>Baked Goods</button>
            </Link>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default fmarket;