import React, { useEffect, useState } from "react";
import './profile.css'
import Profileimg from "../assets/profile.png";
import Header from "../components/header"
import LoginHeader from "../components/login-head";

const axios = require("axios");
const token = window.localStorage.getItem("token");
const tokenVal = window.localStorage.getItem("token");



const Profile = () => {

  const [users, setUsers] = useState([]);

  async function getUsers() {
    const username = window.localStorage.getItem("name");
    const data={
      username:username,
    };
    let response = await axios.post(
      "http://localhost:4000/superadmin/userprofile",data,
      {
        headers: { Authorization: token },
      }
    );
    if (response.status === 200) {
     
      setUsers(response.data.user)
      
    }
  }
  useEffect(() => {
    getUsers();
  }, []);
 
  return (
    <div>
      {tokenVal? <Header/>:<LoginHeader/>}
    <div className="container emp-profile">
    {users &&
        users.length > 0 &&
        users.map((p) => {
          return(

         
    <form method="post">
      <div className="row">
        <div className="col-md-4">
         
        </div>
        <div className="col-md-6">
          <div className="profile-head">
            <h5>
              {p.name}
            </h5>
            <h6>
              {p.role}
            </h6>
            <br />
            <br />
            <br />
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item">
                <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-2">
          <input type="button" className="btn my-4 font-weight-bold atlas-cta cta-green" name="btnAddMore" defaultValue="Edit Profile" />
        </div>
      </div>
      <div className="row">
        
        <div className="col-md-8">
          <div className="tab-content profile-tab" id="myTabContent">
            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
              <div className="row">
                <div className="col-md-6">
                  <label>User Id</label>
                </div>
                <div className="col-md-6">
                  <p>{p.username}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <label>Name</label>
                </div>
                <div className="col-md-6">
                  <p>{p.name}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <label>Email</label>
                </div>
                <div className="col-md-6">
                  <p>{p.email}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <label>Phone</label>
                </div>
                <div className="col-md-6">
                  <p>{p.phNum}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <label>User Type</label>
                </div>
                <div className="col-md-6">
                  <p>{p.role}</p>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
              <div className="row">
                <div className="col-md-6">
                  <label>Experience</label>
                </div>
                <div className="col-md-6">
                  <p>Expert</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <label>Hourly Rate</label>
                </div>
                <div className="col-md-6">
                  <p>10$/hr</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <label>Total Projects</label>
                </div>
                <div className="col-md-6">
                  <p>230</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <label>English Level</label>
                </div>
                <div className="col-md-6">
                  <p>Expert</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <label>Availability</label>
                </div>
                <div className="col-md-6">
                  <p>6 months</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <label>Your Bio</label><br />
                  <p>Your detail description</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>  
     );
    })}         
  </div>
  </div>
  );
};

export default Profile;
