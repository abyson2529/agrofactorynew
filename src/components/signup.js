import React, { useState } from "react";
import "./login.css";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link, Route, useHistory } from "react-router-dom";
import Header from "../components/header"
import LoginHeader from "../components/login-head";
import {} from 'react-bootstrap';

const tokenVal = window.localStorage.getItem("token")

const axios = require("axios");

const Signup = () => {

  let history = useHistory();

  const [username, setUsername] = useState(null);
  const [name ,setName] =useState(null)
  const [password, setPassword] = useState(null);
  const [conpass, setConPass] = useState(null);
  const [email, setEmail] = useState(null);
  const [phonenumber, setPhonenumber] = useState(null);
  const [userNameError, setUserNameError] = useState(false);
  const [nameError, setnameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phNoError, setphNoError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [conpassError, setConPassError] = useState(false);
  const [role, setRole] = useState(false);

  const handleUsername = (event) => {
    setUsername(event.target.value);
  };
  const handleName = (event) => {
    setName(event.target.value);
  }; 
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePhonenumber = (event) => {
    setPhonenumber(event.target.value);
  };
  var emailChk =
    /^([a-z A-Z 0-9_\-\.])+\@([a-z A-Z 0-9_\-])+\.([a-z A-Z]{2,4}).$/;
  var phnoChk = /^([0-9_\-]{10,13})+$/;
  var userNameChk = /^(?=[a-zA-Z0-9._]{3,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/;
  var nameChk = /^[a-zA-Z]{3,20}/;
  var passwordChk =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const validateEmail = () => {
    if (!emailChk.test(email)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };
  const validatePhNum = () => {
    if (!phnoChk.test(phonenumber)) {
      setphNoError(true);
    } else {
      setphNoError(false);
    }
  };
  const validateUserName = () => {
    if (!userNameChk.test(username)) {
      setUserNameError(true);
    } else {
      setUserNameError(false);
    }
  };
  const validateName = () => {
    if (!nameChk.test(name)) {
      setnameError(true);
    } else {
      setnameError(false);
    }
  };
  const validatePassword = () => {
    if (!passwordChk.test(password)) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  };
  const passwordCheck = () => {
    if (password == conpass) {
      setConPassError(false);
    } else {
      setConPassError(true);
    }
  };
  const handleSubmit = async () => {
    if (
      userNameError == false &&
      nameError == false &&
      emailError == false &&
      phNoError == false &&
      passwordError == false &&
      conpassError == false
    ) {
      const data = {
        role:role,
        username: username,
        name:name,
        password: password,
        email: email,
        phNum: phonenumber,
      };
      try {
        const response = await axios.post(
          "http://localhost:4000/api/register",
          data
        );
        if (response.status === 200) {
          console.log("Inserted");
          history.push('/login')
        } else {
          console.log("Not Inserted");
        }
      } catch (e) {
        console.log("Network issue !!");
      }
    } else {
      alert("Fill All datas as required");
    }
  };
  console.log("data", username, password, email, phonenumber);

  return (
    <div className="background-container">
      
      {tokenVal? <Header/>:<LoginHeader/>}

      <div className="wrapper fadeInDown">
        <div id="formContent">
          <Link to="/login">
            <h2
              className="inactive underlineHover"
              style={{ fontSize: "1.5rem" }}
            >
              {" "}
              Sign In{" "}
            </h2>
          </Link>
          <Link to="/signup">
            {" "}
            <h2 className="active" style={{ fontSize: "1.5rem" }}>
              Sign Up{" "}
            </h2>
          </Link>

          <form className="form-container">

          <input
              type="text"
              id="login"
              className="fadeIn second"
              name="login"
              placeholder="Full Name"
              autoComplete="off"
              required
              onChange={handleName}
              onKeyUp={validateName}
            ></input>
            <div className="d-flex flex-column mb-4">
              <div
                className={
                  nameError ? "error error-visible " : "error error-hidden"
                }
              >
                <p>Please enter a valid Name</p>
              </div>
            </div>
            <input
              type="text"
              id="login"
              className="fadeIn second"
              name="login"
              placeholder="username"
              autoComplete="off"
              required
              onChange={handleUsername}
              onKeyUp={validateUserName}
            ></input>
            <div className="d-flex flex-column mb-4">
              <div
                className={
                  userNameError ? "error error-visible " : "error error-hidden"
                }
              >
                <p>Please enter a valid username</p>
              </div>
            </div>
            
            <input
              type="password"
              id="password"
              className="fadeIn third"
              name="login"
              placeholder="password"
              autoComplete="off"
              required
              onChange={handlePassword}
              onKeyUp={validatePassword}
            ></input>
            <div className="d-flex flex-column mb-4">
              <div
                className={
                  passwordError ? "error error-visible " : "error error-hidden"
                }
              >
                <p>Please enter a valid Password</p>
              </div>
            </div>
            <input
              type="password"
              id="password"
              className="fadeIn third"
              name="login"
              placeholder="Confirm password"
              autoComplete="off"
              required
              onChange={(e) => setConPass(e.target.value)}
              onKeyUp={passwordCheck}
            ></input>
            <div className="d-flex flex-column mb-4">
              <div
                className={
                  conpassError ? "error error-visible " : "error error-hidden"
                }
              >
                <p>Password Mismatch</p>
              </div>
            </div>
            
            <input
              type="text"
              id="login"
              className="fadeIn second"
              name="email"
              placeholder="email"
              autoComplete="off"
              required
              onChange={handleEmail}
              onKeyUp={validateEmail}
            ></input>
            <div className="d-flex flex-column mb-4">
              <div
                className={
                  emailError ? "error error-visible " : "error error-hidden"
                }
              >
                <p>Please enter a valid Email</p>
              </div>
            </div>
            <input
              type="text"
              id="login"
              className="fadeIn second"
              name="number"
              placeholder="Phone number"
              autoComplete="off"
              required
              onChange={handlePhonenumber}
              onKeyUp={validatePhNum}
            ></input>
            <div className="d-flex flex-column mb-4">
              <div
                className={
                  phNoError ? "error error-visible " : "error error-hidden"
                }
              >
                <p>Please enter a valid Phone Number</p>
              </div>
            </div>
            
        <input type="radio" value="customer" name="type"  onChange = {(e)=> setRole(e.target.value)} required/> Customer
        <input type="radio" value="farmer" name="type" onChange = {(e)=> setRole(e.target.value)} required/> Farmer
      
              <input
                type="button"
                className="fadeIn fourth"
                value="Sign Up"
                onClick={handleSubmit}
              ></input>
          </form>
          <div id="formFooter">
            Alredy have an accout?
            <Link to="/login">
              <a className="underlineHover">SIGN IN</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
