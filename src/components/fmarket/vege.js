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
const Vege = () => {

  const history = useHistory();
  const [vege,setVege] = useState([]);
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

  async function handleCreateVege(){
    const formData = new FormData();

    formData.append("file",file);
    formData.append("filename",filename);
    formData.append("name",name);
    formData.append("price",price);
    formData.append("desc",description);
    formData.append("quantity",quantity);
    console.log(formData);

    // let data = {
    //     name:name,
    //     price:price,
    //     desc:description,
    //     quantity:quantity
    // }
    // console.log(data)
    let response = await axios.post(
      "http://localhost:4000/superadmin/addVege",formData,
      {
        headers: { Authorization: token },
      }
    );  
    handleClose()
    getVege()
}
async function deleteVege(id){
  let response = await axios.post(
    "http://localhost:4000/superadmin/deleteVege",{vegeId:id},
    {
      headers: { Authorization: token },
    }
  );
  getVege()
}

  async function getVege() {
    let response = await axios.get(
      "http://localhost:4000/superadmin/showVege",
    );
    if (response.status === 200) {
      setVege(response.data.response)
    }
  }
  function handleCart(){
    if(tokenVal){
      
    }
    else{
      history.push("/login")
    }
  }

  async function handleAddCart(vegeId){
    let userId = window.localStorage.getItem('userId')
    let data = {
        userId:userId,
        productId:vegeId,
        quantity:1,
        category:"vege"
    }
    let response = await axios.post(
      "http://localhost:4000/superadmin/addCart",data,
      {
        headers: { Authorization: token },
      }
    ); 
  }

  useEffect(() => {
    getVege();
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
            Add Vegetables
          </Button>:<div></div>
      }
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Add Vegetables</Modal.Title>
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
              <Button variant="primary" onClick={handleCreateVege}>
              Add Vegetables
              </Button>
            </Modal.Footer>
          </Modal>

      <div class="listing-section" style={{fontSize: "130%"}}>
      {vege &&
                vege.length > 0 &&
                vege.map((p) => {

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


export default Vege;
