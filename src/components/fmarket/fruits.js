import React, {useState,useEffect} from "react";
import { Link, Route } from "react-router-dom";
import "./products.css";
import Header from "../header";
import { useHistory } from "react-router";
import Apple1 from "../../assets/apple1.jpeg";

import {
  Button,
  Modal,
  Form
} from "react-bootstrap";
const axios = require('axios')

const token = window.localStorage.getItem("token");

const tokenVal = window.localStorage.getItem("token")
const Fruits = () => {

  const history = useHistory();
  const [fruits,setFruits] = useState([]);
  const [users, setUsers] = useState([]);
  const [name, setName] = useState(false)
  const [price, setPrice] = useState(false)
  const [description, setDescription] = useState(false)
  const [quantity, setQuantity] = useState(false)
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const role = window.localStorage.getItem("role")

  const [file,setfile] = useState();
  const [filename, setFileName] = useState("");

  async function handleCreateFruits(){
    const formData = new FormData();

    formData.append("file",file);
    formData.append("filename",filename);
    formData.append("name",name);
    formData.append("price",price);
    formData.append("desc",description);
    formData.append("quantity",quantity);
    console.log(formData);
    if(name.length!= null && price.length!= null && description.length != null && quantity.length!= null && filename.length !=0){

    // let data = {
    //     name:name,
    //     price:price,
    //     desc:description,
    //     quantity:quantity
    // }
    // console.log(data)
    let response = await axios.post(
      "http://localhost:4000/superadmin/addFruit",formData,
      {
        headers: { Authorization: token },
      }
    );  
    handleClose()
    getFruit()
  } else{
    alert("Please fill all the fields")
  }
}
async function deleteFruits(id){
  let response = await axios.post(
    "http://localhost:4000/superadmin/deleteFruit",{fruitId:id},
    {
      headers: { Authorization: token },
    }
  );
  getFruit()
}

  async function getFruit() {
    let response = await axios.get(
      "http://localhost:4000/superadmin/showFruit",
    );
    if (response.status === 200) {
      setFruits(response.data.response)
    }
  }
  function handleCart(){
    if(tokenVal){
      
    }
    else{
      history.push("/login")
    }
  }

  async function handleAddCart(fruitId){
    let userId = window.localStorage.getItem('userId')
    let data = {
        userId:userId,
        productId:fruitId,
        quantity:1,
        category:"fruits"
    }
    let response = await axios.post(
      "http://localhost:4000/superadmin/addCart",data,
      {
        headers: { Authorization: token },
      }
    ); 
  }

  useEffect(() => {
    getFruit();
  }, []);
  return (
    <div>
      <Header/>
     
      {role && role=='farmer'?
      <Button
            variant="primary"
            onClick={handleShow}
            style={{ width: "10rem", margin: "1rem" }}
          >
            Add Fruits
          </Button>:<div></div>
      }
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Add Fruits</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form>
                <Form.Control type="text" placeholder="Product Name"onChange={(e)=>setName(e.target.value)} />
                <br />
                <Form.Control type="text" placeholder=" Product Price" onChange={(e)=>setPrice(e.target.value)}/>
                <br />
                <Form.Control type="text" placeholder="Description" onChange={(e)=>setDescription(e.target.value)}/>
                <br />
                <Form.Control type="text" placeholder="Quantity" onChange={(e)=>setQuantity(e.target.value)}/>
                <br />
                <Form.Group controlId="formFile" style={{fontSize: "18px"}}>
                  <Form.Label>Product Image</Form.Label>
                  <Form.Control type="file"  onChange={(event)=> {
                    setfile(event.target.files[0]);
                    setFileName(event.target.files[0].name);
                  }}/>
                </Form.Group>
              </form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={handleCreateFruits}>
              Add Fruits
              </Button>
            </Modal.Footer>
          </Modal>

      <div class="listing-section" style={{fontSize: "130%"}}>
      {fruits &&
                fruits.length > 0 &&
                fruits.map((p) => {

                  var url ="http://localhost:4000/Controllers/Images/"+p.imagename;

                  return (<div>
                    <div className="product">
                    <div className="image-box">
                    <img className="images"  async src={url}   />
                    </div>
                    <div className="text-box">
                      <h2 className="item">{p.name}</h2>
                      <h3 className="price">RS :{p.price}</h3>
                      <p className="description">{p.desc}</p>
                      
                   
                      <Link to="/sample">
                      <Button variant="primary" onClick ={()=>handleAddCart(p._id)}>
                      Add To Cart
                      </Button>
                      </Link>
                    </div>
                  </div>
                  </div>
                  )})}
      </div>
    
    </div>
  );
};


export default Fruits;
