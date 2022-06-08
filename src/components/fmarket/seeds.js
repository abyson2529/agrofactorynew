import React, {useState,useEffect} from "react";
import { Link, Route } from "react-router-dom";
import "./products.css";
import Header from "../header";
import { useHistory } from "react-router";
import Seed1 from "../../assets/seed1.jpg";

import {
  Button,
  Modal,
  Form
} from "react-bootstrap";
const axios = require('axios')

const token = window.localStorage.getItem("token");

const tokenVal = window.localStorage.getItem("token")
const Seeds = () => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const history = useHistory();
  const [seeds,setSeeds] = useState([]);
  async function getSeed() {
    let response = await axios.get(
      "http://localhost:4000/superadmin/showSeed",
    );
    if (response.status === 200) {
      setSeeds(response.data.response)
    }
  }
  function handleCart(){
    if(tokenVal){
      
    }
    else{
      history.push("/login")
    }
  }

  async function handleAddCart(seedId){
    let userId = window.localStorage.getItem('userId')
    if(userId){
      let data = {
          userId:userId,
          productId:seedId,
          quantity:1,
          category:"seeds"
      }
      let response = await axios.post(
        "http://localhost:4000/superadmin/addCart",data,
        {
          headers: { Authorization: token },
        }
      ); 
      history.push("/sample")
    }
    else{
      alert("Please Login to continue")
      history.push("/login")
    }
  }

  useEffect(() => {
    getSeed();
  }, []);
  return (
    <div>
      <Header/>
     
         
      <div class="listing-section" style={{fontSize: "130%"}}>
      {seeds &&
                seeds.length > 0 &&
                seeds.map((p) => {
                  
                  var url ="http://localhost:4000/Controllers/Images/"+p.imagename;
                  return (<div>
                    <div className="product">
                    <div className="image-box">
                    <img className="images"  async src={url}  />
                    </div>
                    <div className="text-box">
                      <h2 className="item">{p.name}</h2>
                      <h3 className="price">RS :{p.price}</h3>
                      <p className="description">{p.desc}</p>
                      {/* <label htmlFor="item-1-quantity">Quantity:</label>
          <input className="proInput" type="text" name="item-1-quantity" id="item-1-quantity" defaultValue={1} /> */}
                      <button type="button" name="item-1-button" id="item-1-button" onClick={handleShow}>View More</button>

                      <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
          <Modal.Title>{p.name} </Modal.Title>
        </Modal.Header>
        <img async src={url} alt="" />
        <Modal.Body>
        <Modal.Title>{p.name} </Modal.Title>
        <Modal.Title>{p.price} </Modal.Title>
        {p.desc}</Modal.Body>
        <Modal.Footer>
        <Link to="/vegetables">
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          </Link>
          <Link to="">
          <Button variant="primary" onClick ={()=>handleAddCart(p._id)}>
            Add To Cart
          </Button>
          </Link>
        </Modal.Footer>
        </Modal>

                    </div>
                  </div>
                  </div>
                  )})}
      </div>
    
    </div>
  );
};

export default Seeds;
