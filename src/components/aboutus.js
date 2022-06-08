import React from "react";
import { Link, Route } from "react-router-dom";
import "react-bootstrap";
import Header from "../components/header";
import LoginHeader from "../components/login-head";
import "./aboutus.css";
import {Card,CardGroup} from 'react-bootstrap';
import Fm5 from "../assets/fmm5.jpg";


const tokenVal = window.localStorage.getItem("token")

const aboutus = () => {
  return (
    <div >
      {tokenVal? <Header/>:<LoginHeader/>}
       <div>
       <div className="about-section">
          <h1>About Us !</h1>
          <p>The Agro Factory - Change The Way To Trade...</p>
          <p>Agriculture Management System is to help farmers by providing various
          kinds of Agri related information and <br /> they can sell their products to
          the customers in the website..</p>
        </div>
        <h2 style={{textAlign: "center"}}>Our Services</h2>
        <CardGroup>
  <Card className="aclass">
    <Card.Img variant="top" src="" />
    <Card.Body>
      <Card.Title>Farmer Friendly</Card.Title>
      <Card.Text>
        This is a Farmer friendly website which helps the farmers to sell their products to this site.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card className="aclass">
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Customer Friendly</Card.Title>
      <Card.Text>
        Customers can easily buy products through this site
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card className="aclass">
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>View News</Card.Title>
      <Card.Text>
        Both the farmers and customers can view news about agriculture
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 10 mins ago</small>
    </Card.Footer>
  </Card>
  <Card className="aclass">
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Buy Seeds and machinery</Card.Title>
      <Card.Text>
        customers and farmers can easily buy seeds and machinery through this agro factory
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 10 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup>
        </div>   
    </div>
  );
};

export default aboutus;

