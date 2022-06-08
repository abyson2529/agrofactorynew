import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link, Route, useLocation } from "react-router-dom";
import Side_nav from "./side_nav";
import Header from "../header";
import LoginHeader from "../login-head";
import { Modal, Button, Form } from "react-bootstrap";

const axios = require("axios");
const token = window.localStorage.getItem("token");

const tokenVal = window.localStorage.getItem("token");

function Manage_grains() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState(false)
  const [price, setPrice] = useState(false)
  const [description, setDescription] = useState(false)
  const [quantity, setQuantity] = useState(false)

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [file,setfile] = useState();
  const [filename, setFileName] = useState("");

  async function handleCreateGrains(){
    const formData = new FormData();
    
    formData.append("file",file);
    formData.append("filename",filename);
    formData.append("name",name);
    formData.append("price",price);
    formData.append("desc",description);
    formData.append("quantity",quantity);
    console.log(formData);
    if(name.length!= null && price.length!= null && description.length != null && quantity.length!= null && filename.length !=0){
  // async function handleCreateGrains(){
  //   let data = {
  //       name:name,
  //       price:price,
  //       desc:description,
  //       quantity:quantity
  //   }
  //   console.log(data)
    let response = await axios.post(
      "http://localhost:4000/superadmin/addGrain",formData,
      {
        headers: { Authorization: token },
      }
    );  
    handleClose()
    getGrain()
  } else{
    alert("Please fill all the fields")
  }
}
async function deleteGrains(id){
  let response = await axios.post(
    "http://localhost:4000/superadmin/deleteGrain",{grainId:id},
    {
      headers: { Authorization: token },
    }
  );
  getGrain()
}

  async function getGrain() {
    let response = await axios.get(
      "http://localhost:4000/superadmin/showGrain",
      {
        headers: { Authorization: token },
      }
    );
    if (response.status === 200) {
      setUsers(response.data.response);
    }
  }

  useEffect(() => {
    getGrain();
  }, []);

  const data = {};
  return (
    <div>
      {tokenVal ? <Header /> : <LoginHeader />}
      {console.log(users)}
      <Side_nav />
      <div>
        <div
          className="modal fade"
          id="editHospitalModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        ></div>
        <div
          className="main__container"
          style={{ marginLeft: "19rem", margintop: "2.5rem" }}
        >
          <Button
            variant="primary"
            onClick={handleShow}
            style={{ width: "10rem", margin: "1rem" }}
          >
            Add Grains
          </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Add Grains</Modal.Title>
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
              <Button variant="primary" onClick={handleCreateGrains}>
              Add Grains
              </Button>
            </Modal.Footer>
          </Modal>

          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Price</th>
                <th>Description</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {users &&
                users.length > 0 &&
                users.map((p) => {
                  return (
                    <tr>
                      <td>{p.name}</td>
                      <td>{p.price}</td>
                      <td>{p.desc}</td>
                      <td>{p.quantity}</td>
                      <td colSpan="2">
                    
                        <button className="btn btn-danger"  onClick = {(e)=>deleteGrains(p._id)}>
                          <i className="fa fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default Manage_grains;
