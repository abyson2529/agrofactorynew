import React, { useEffect, useState } from "react";

import Ferti from "../assets/newpro2.PNG";
import Ferti1 from "../assets/ferti1.jpg";
import Header from "../components/header";
import LoginHeader from "../components/login-head";
import "./product_desc.css";
import {Button,Modal} from 'react-bootstrap';

const tokenVal = window.localStorage.getItem("token")

const Product_desc = () => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      {tokenVal? <Header/>:<LoginHeader/>}
      <div >
         
      <>
      <Button variant="primary" 
      style={{ width: "10rem", margin: "1rem" }}
      onClick={handleShow}>
        View More
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>GARDENIA ORGANIC MANURE </Modal.Title>
        </Modal.Header>
        <img src={Ferti1} alt="" />
        <Modal.Body>
       {/* <img src={Ferti}  style={{ width: "38rem", height: "40rem" }} alt="" /> */}
       Gardenia Organic Manure provides the best nutrition for all types of plants and 
       promotes vigorous growth. It is perfectly aged in compost pits before packaging 
       and is plush with nutrients like Nitrogen but also provide an ideal growing option 
       for plants and leafy vegetables. Mix it with garden soil in equal quantities or as
        advised for the best growing medium.
           </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Add To Cart
          </Button>
        </Modal.Footer>
      </Modal>
    </>

      </div>
    </div>
  );
};

export default Product_desc;
