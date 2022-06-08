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

function Manage_seeds() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState(false)
  const [price, setPrice] = useState(false)
  const [description, setDescription] = useState(false)
  const [quantity, setQuantity] = useState(false)

  const [show, setShow] = useState(false);
  const [newshow, setNewShow] = useState(false)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handlenewClose = () => setNewShow(false);
  const handlenewShow = () => setNewShow(true);

  //image
  const [file,setfile] = useState();
  const [filename, setFileName] = useState("");

  async function handleCreateSeeds(){
    var formData = new FormData();
  //   let data = {
  //     name:name,
  //     price:price,
  //     desc:description,
  //     quantity:quantity,
  //     fname:filename,
  //     file:file

  // }
  // console.log(data)
    formData.append("file",file);
    formData.append("filename",filename);
    formData.append("name",name);
    formData.append("price",price);
    formData.append("desc",description);
    formData.append("quantity",quantity);
    console.log(name.length,price.length);
    if(name.length!= null && price.length!= null && description.length != null && quantity.length!= null && filename.length !=0){
    let response = await axios.post(
      "http://localhost:4000/superadmin/addSeed",formData,
      {
        headers: { Authorization: token },
      }
    );
   if(response.status==200){
    handleClose()
    window.location.reload(false);
    getSeed()
   }
  } else{
    alert("Please fill all the fields")
  }
}
async function deleteSeeds(id){
  let response = await axios.post(
    "http://localhost:4000/superadmin/deleteSeed",{seedId:id},
    {
      headers: { Authorization: token },
    }
  );
  getSeed()
}

  async function getSeed() {
    let response = await axios.get(
      "http://localhost:4000/superadmin/showSeed",
      {
        headers: { Authorization: token },
      }
    );
    if (response.status === 200) {
      setUsers(response.data.response);
    }
  }

const handleEdit = async (id) => {
  let data = {
    name:name,
    price:price,
    desc:description,
    quantity:quantity,
    seedId:id
  }
  console.log(data)
  let response = await axios.post("http://localhost:4000/superadmin/updateSeed",data);
  if(response.status == 200){
    handlenewClose()
    getSeed()

  }

}

  useEffect(() => {
    getSeed();
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
            Add Seeds
          </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Add Seeds</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form>
                <Form.Control type="text" placeholder="Product Name"onChange={(e)=>setName(e.target.value)} />
                <br />
                <Form.Control type="number" placeholder=" Product Price" onChange={(e)=>setPrice(e.target.value)} min="1"/>
                <br />
                <Form.Control type="text" placeholder="Description" onChange={(e)=>setDescription(e.target.value)}/>
                <br />
                <Form.Control type="number" placeholder="Quantity" onChange={(e)=>setQuantity(e.target.value)} min="1"/>
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
              <Button variant="primary" onClick={handleCreateSeeds}>
              Add Seeds
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
                      <button
                          className="btn btn-success"
                          data-toggle="modal"
                          data-target="#exampleModal"
                          onClick={handlenewShow}
                        >
                         Edit{" "}
                          <i className="fa fa-edit" ></i>
                        </button>

                    <Modal show={newshow} onHide={handlenewClose}>
            <Modal.Header closeButton>
              <Modal.Title>Edit Seeds</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form>
                <Form.Control type="text" onChange={(e)=>setName(e.target.value)} defaultvalue = {p.name} placeholder = {p.name}/>
                <br />
                <Form.Control type="number"  onChange={(e)=>setPrice(e.target.value)} defaultvalue = {p.price} placeholder = {p.price}min="1"/>
                <br />
                <Form.Control type="text"  onChange={(e)=>setDescription(e.target.value)} defaultvalue = {p.desc} placeholder = {p.desc}/>
                <br />
                <Form.Control type="number"  onChange={(e)=>setQuantity(e.target.value)} defaultvalue = {p.quantity} placeholder = {p.quantity}min="1"/>
                <br />
              </form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={(e)=>handleEdit(p._id)}>
              Edit Item
              </Button>
            </Modal.Footer>
          </Modal>

                        <button className="btn btn-danger"  onClick = {(e)=>deleteSeeds(p._id)}>
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

export default Manage_seeds;
