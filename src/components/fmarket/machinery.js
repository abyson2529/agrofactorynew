import React, {useState,useEffect} from "react";
import { Link, Route } from "react-router-dom";
import "./products.css";
import Header from "../header";
import { useHistory } from "react-router";
import Tool1 from "../../assets/tool2.jpg";

import {
  Button,
  Modal,
  Form
} from "react-bootstrap";
const axios = require('axios')

const token = window.localStorage.getItem("token");

const tokenVal = window.localStorage.getItem("token")
const Machinery = () => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const history = useHistory();
  const [machinery,setMachinery] = useState([]);
  async function getMachinery() {
    let response = await axios.get(
      "http://localhost:4000/superadmin/showMachinery",
    );
    if (response.status === 200) {
      setMachinery(response.data.response)
    }
  }
  function handleCart(){
    if(tokenVal){
      
    }
    else{
      history.push("/login")
    }
  }

  async function handleAddCart(machineryId){
    let userId = window.localStorage.getItem('userId')
    let data = {
        userId:userId,
        productId:machineryId,
        quantity:1,
        category:"machinery"
    }
    let response = await axios.post(
      "http://localhost:4000/superadmin/addCart",data,
      {
        headers: { Authorization: token },
      }
    ); 
  }

  useEffect(() => {
    getMachinery();
  }, []);
  return (
    <div>
      <Header/>   
      <div class="listing-section" style={{fontSize: "130%"}}>
      {machinery &&
                machinery.length > 0 &&
                machinery.map((p) => {

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
        <img async src={url} style={{ width: "25rem", height: "28rem" }} alt="" />
        <Modal.Body>
        <Modal.Title>{p.name} </Modal.Title>
        <Modal.Title>{p.price} </Modal.Title>
        {p.desc}
       {/* Gardenia Organic Manure provides the best nutrition for all types of plants and 
       promotes vigorous growth. It is perfectly aged in compost pits before packaging 
       and is plush with nutrients like Nitrogen but also provide an ideal growing option 
       for plants and leafy vegetables. Mix it with garden soil in equal quantities or as
        advised for the best growing medium. */}
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

export default Machinery;
