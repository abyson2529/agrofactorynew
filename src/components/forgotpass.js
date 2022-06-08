import React from "react";
import { Link, Route } from "react-router-dom";
import "react-bootstrap";
import Header from "../components/header";
import LoginHeader from "../components/login-head";
import Newf1 from "../assets/newf1.png";
import Apple2 from "../assets/apple1.jpeg";
import Plus from "../assets/plus.png";
import "./forgotpass.css";

const tokenVal = window.localStorage.getItem("token")

const sample = () => {
  return (
    <div >
      {tokenVal? <Header/>:<LoginHeader/>}

      <div>
        <title>Forgot Password Page - HTML + CSS</title>
        <div className="newrow">
          <h1>Forgot Password</h1>
          <h6 className="information-text">Enter your registered phone number to reset your password.</h6>
          <div className="form-group">
            <input type="phonenumber" name="phonenumber" id="phonenumber" />
            <p><label htmlFor="username">Phone Number</label></p>
            <Link to ="/resetpass">
            <button onclick="showSpinner()">Reset Password</button>
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
};

export default sample;
