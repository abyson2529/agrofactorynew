import React, { useEffect, useState } from "react";

import User from "../assets/imguser.png";
import Header from "./header";
import LoginHeader from "./login-head";
import "./agri_class.css";
import {Card} from 'react-bootstrap';

const tokenVal = window.localStorage.getItem("token")
const axios = require("axios")

const Agri_class = () => {
  const token = ""
  const [agriClass,setAgriClass] = useState(false)
  async function getAgriClass(){
    let response = await axios.get(
      "http://localhost:4000/superadmin/showAgriClass",
      {
        headers: { Authorization: token },
      }
    );
    if (response.status === 200) {
      setAgriClass(response.data.response);
    }
  }
  useEffect(()=>{
    getAgriClass()
  },[])
  return (
    <div>
      {tokenVal? <Header/>:<LoginHeader/>}
      <div className="tbl-full">
         
      <section style={{margin: "50px"}}>
          {/*for demo wrap*/}
          <h1 className="tbl-head">Agricultural Education Portal</h1>
          <div className="tbl-header">
            <table cellPadding={0} cellSpacing={0} border={0} className="tble">
              <thead>
                <tr >
                  <th className="tbl-th">DATE</th>
                  <th className="tbl-th">TOPIC</th>
                  <th className="tbl-th">INSTRUCTOR</th>
                  <th className="tbl-th">TIME</th>
                  <th className="tbl-th">MEET LINK</th>
                </tr>
              </thead>
            </table>
          </div>
          <div className="tbl-content">
            <table cellPadding={0} cellSpacing={0} border={0} className="tble">
              <tbody>
          {agriClass &&
                agriClass.length > 0 &&
                agriClass.map((p) => {
                  return (
                <tr>
                  <td className="tbl-td">{p.date}</td>
                  <td className="tbl-td">{p.topic} </td>
                  <td className="tbl-td">{p.instructor}</td>
                  <td className="tbl-td">{p.time}</td>
                  <td className="tbl-td"><a href={p.meetlink}>Click Here to join</a></td>
                </tr>
                                
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Agri_class;
