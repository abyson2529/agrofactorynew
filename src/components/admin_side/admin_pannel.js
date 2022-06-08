import React, { useEffect, useState } from "react";
import Side_nav from "./side_nav";
import "./admin_pannel.css";
import Header from "../header"
import LoginHeader from "../login-head";
import {Card} from 'react-bootstrap';


const tokenVal = window.localStorage.getItem("token")
const axios = require("axios")

const Admin_panel = () => {
  const [farmersCount,setFarmersCount]= useState(false)
  const [customerCount, setCustomerCount] = useState(false);
  const [fertilizerCount, setFertilizerCount] = useState(false);
  const [machineryCount, setMachineryCount] = useState(false);
  const [seedsCount, setSeedsCount] = useState(false);
  const [newsCount, setNewsCount] = useState(false);
  const token = window.localStorage.getItem("token")

  async function getSeed() {
    let response = await axios.get("http://localhost:4000/superadmin/showSeed",{
      headers : {Authorization : token}
    });
    if (response.status === 200) {
      let count = response.data.response.length
      setSeedsCount(count);
    } 
  }
  async function getNews() {
    let response = await axios.get("http://localhost:4000/superadmin/showNews",{
      headers : {Authorization : token}
    });
    if (response.status === 200) {
      let count = response.data.response.length
      setNewsCount(count);
    } 
  }
  async function getMachinery() {
    let response = await axios.get("http://localhost:4000/superadmin/showMachinery",{
      headers : {Authorization : token}
    });
    if (response.status === 200) {
      let count = response.data.response.length
      setMachineryCount(count);
    } 
  }

  async function getFertilizers() {
    let response = await axios.get("http://localhost:4000/superadmin/showFertilizers",{
      headers : {Authorization : token}
    });
    if (response.status === 200) {
      let count = response.data.response.length
      setFertilizerCount(count);
    } 
  }

  async function getCustomers() {
    let response = await axios.get("http://localhost:4000/superadmin/showCustomers",{
      headers : {Authorization : token}
    });
    if (response.status === 200) {
      let count = response.data.response.length
      setCustomerCount(count);
    } 
  }

  async function getFarmers() {
    let response = await axios.get("http://localhost:4000/superadmin/showFarmers",{
      headers : {Authorization : token}
    });
    if (response.status === 200) {
      console.log(response)
      let count = response.data.response.length
      setFarmersCount(count);
    } 
  }
  useEffect(() => {
    getFarmers()
    getCustomers()
    getFertilizers()
    getMachinery()
    getNews()
    getSeed()
  }, []);
  return (
    <div>
      {tokenVal? <Header/>:<LoginHeader/>}
        <Side_nav />
        <div className="dash_cards">
          <Card  className="New_card" style={{ width: "20rem",height:"9rem", borderColor:"#00FFAD" }}>
            <Card.Body className="In_card">
          
              <Card.Title style={{ fontSize: "3rem",  }}>{farmersCount}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted" style={{ fontSize: "1.5rem" }} >
                Farmers
              </Card.Subtitle>
            </Card.Body>
            
          </Card>
          <Card  className="New_card1" style={{ width: "20rem",height:"9rem", borderColor:"#00FFAD" }}>
            <Card.Body>
              <Card.Title style={{ fontSize: "3rem" }}>{customerCount}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted" style={{ fontSize: "1.5rem" }}>
                Customers
              </Card.Subtitle>
            </Card.Body>
          </Card>
          <Card  className="New_card1" style={{ width: "20rem",height:"9rem", borderColor:"#00FFAD" }}>
            <Card.Body>
              <Card.Title style={{ fontSize: "3rem" }}>{fertilizerCount}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted" style={{ fontSize: "1.5rem" }}>
                Fertilizers
              </Card.Subtitle>
             
            </Card.Body>
          </Card>
          
        </div>
        <div style={{marginLeft: "18rem"}} className="dash_cards">
        <Card  className="New_card1" style={{ width: "20rem",height:"9rem", borderColor:"#00FFAD" }}>
            <Card.Body>
              <Card.Title style={{ fontSize: "3rem" }}>{machineryCount}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted" style={{ fontSize: "1.5rem" }}>
                Machinerys
              </Card.Subtitle>
            </Card.Body>
          </Card>
          <Card  className="New_card1" style={{ width: "20rem",height:"9rem", borderColor:"#00FFAD" }}>
            <Card.Body>
              <Card.Title style={{ fontSize: "3rem" }}>{seedsCount}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted" style={{ fontSize: "1.5rem" }}>
                Seeds
              </Card.Subtitle>
            </Card.Body>
          </Card>
          <Card  className="New_card1" style={{ width: "20rem",height:"9rem", borderColor:"#00FFAD" }}>
            <Card.Body>
              <Card.Title style={{ fontSize: "3rem" }}>{newsCount}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted" style={{ fontSize: "1.5rem" }}>
                News
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </div>
    </div>
  );
};

export default Admin_panel;
