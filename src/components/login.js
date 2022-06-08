import React, { useState } from "react";
import "./login.css";
import { Link, Route, withRouter} from "react-router-dom";
import Photo from "../assets/avatar.png";
import { useHistory } from "react-router";
import { Nav,Navbar, Container, } from "react-bootstrap";
import Header from "../components/header"
import LoginHeader from "../components/login-head";

const tokenVal = window.localStorage.getItem("token")

const axios = require("axios");

const Login = () => {

  const history = useHistory();

  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [errmsg, setErrMsg] = useState("");

  const handleUsername = (event) => {
    setUsername(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleSubmit = async () => {
    const data = {
      username: username,
      password: password,
    };
    try {
      const response = await axios.post("http://localhost:4000/api/login", data);
      //alert(response.status);
      if (response.status === 200) {
        window.localStorage.setItem("token", response.data.token)
        window.localStorage.setItem("name",response.data.username)
        window.localStorage.setItem("role",response.data.role)
        window.localStorage.setItem("userId",response.data.id)
        window.localStorage.setItem("load","firstload")
        if (response.data.role === "superadmin"){

          history.push("/admin_pannel");
        }
        else{
          history.push("/dashboard");

        }
      }else{
        setErrMsg(response.data.message);
        console.log(errmsg);
      }
    } catch (e) {
      setErrMsg('Login failed');
    }
  };

  return (
    <div className="background-container">
      {tokenVal? <Header/>:<LoginHeader/>}
      <div className="wrapper fadeInDown">
        <div id="formContent">
          <Link to="/login">
            <h2 className="active" style={{fontSize: "1.5rem"}}> Sign In </h2>
          </Link>
          <Link to="/signup">
            {" "}
            <h2 className="inactive underlineHover" style={{fontSize: "1.5rem"}}>Sign Up </h2>
          </Link>

          <div className="fadeIn first">
            <img src={Photo} className="loginmg" alt="text" style={{height: "10rem", width: "10rem"}} />
          </div>

          <form className="form-container">
            <input
              type="text"
              id="login"
              className="fadeIn second"
              name="login"
              placeholder="Username"
              autoComplete="off"
              required
              onChange={handleUsername}
            ></input>
            <input
              type="password"
              id="password"
              className="fadeIn third"
              name="login"
              placeholder="Password"
              autoComplete="off"
              required
              onChange={handlePassword}
            ></input>
            <input
              type="button"
              className="fadeIn fourth"
              value="Login"
              id="lgn-btn"
              onClick={handleSubmit}
            ></input>
            <h4>{errmsg}</h4>

          </form>
          <Link to ="/forgotpass">
          <div id="formFooter">
            <a className="underlineHover" href="#" style={{textDecoration: "none",color: "black"}}>
              Forgot Password?
            </a>
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Login);
