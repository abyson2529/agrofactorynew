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
          <h1>Reset Password</h1>
          <div className="form-group">
            <input type="email" name="user_email" id="user_email" />
            <p><label htmlFor="username">Enter the otp send to your mail</label></p>
            <button onclick="showSpinner()">Verify</button>
            <input type="email" name="user_email" id="user_email" />
            <p><label htmlFor="username">New Password</label></p>
            <input type="email" name="user_email" id="user_email" />
            <p><label htmlFor="username">Confirm Password</label></p>s
            <button onclick="showSpinner()">Reset Password</button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default sample;
