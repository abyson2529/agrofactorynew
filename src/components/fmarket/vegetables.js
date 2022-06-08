import React, {useState,useEffect} from "react";
import { Link, Route } from "react-router-dom";
import "./products.css";
import Header from "../header";
import { useHistory } from "react-router";
import Ferti1 from "../../assets/ferti1.jpg";

import {
  Button,
  Modal,
  Form
} from "react-bootstrap";
const axios = require('axios')

const token = window.localStorage.getItem("token");

const tokenVal = window.localStorage.getItem("token")
const Vegetables = () => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const history = useHistory();
  const [fertilizer,setFertilizer] = useState([]);
  async function getFertilizers() {
    let response = await axios.get(
      "http://localhost:4000/superadmin/showFertilizers",
    );
    if (response.status === 200) {
      setFertilizer(response.data.response)
    }
  }
  function handleCart(){
    if(tokenVal){
      
    }
    else{
      history.push("/login")
    }
  }

  async function handleAddCart(fertilizerId){
    let userId = window.localStorage.getItem('userId')
    let data = {
        userId:userId,
        productId:fertilizerId,
        quantity:1,
        category:"fertilizer"
    }
    let response = await axios.post(
      "http://localhost:4000/superadmin/addCart",data,
      {
        headers: { Authorization: token },
      }
    ); 
  }

  useEffect(() => {
    getFertilizers();
  }, []);
  return (
    <div>
      <Header/>
  
         
      <div class="listing-section" style={{fontSize: "130%"}}>
      {fertilizer &&
                fertilizer.length > 0 &&
                fertilizer.map((p) => {

                  var url ="http://localhost:4000/Controllers/Images/"+p.imagename;

                  return (<div>
                    <div className="product">
                    <div className="image-box">
                    <img className="images" async src={url}   />
                    </div>
                    <div className="text-box">
                      <h2 className="item" style={{marginBottom: "-10px" }}>{p.name}</h2>
                      <h3 className="price">{p.price}</h3>
                      <p className="description">{p.desc}</p>
                      {/* <label htmlFor="item-1-quantity">Quantity:</label>
          <input className="proInput" type="text" name="item-1-quantity" id="item-1-quantity" defaultValue={1} /> */}
                      <button type="button" name="item-1-button" id="item-1-button" onClick={handleShow}>View More</button>
                      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>GARDENIA ORGANIC MANURE </Modal.Title>
        </Modal.Header>
        <img async src={url}  alt="" />
        <Modal.Body>
        {p.desc}
           </Modal.Body>
        <Modal.Footer>
        <Link to="/vegetables">
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          </Link>
          <Link to="/sample">
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

export default Vegetables;
