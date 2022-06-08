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

function Manage_news() {
  const [users, setUsers] = useState([]);
  const [title, setTitle] = useState([]);
  const [description, setDescription] = useState(false)
  const [date, setDate] = useState(false)

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [file,setfile] = useState();
  const [filename, setFileName] = useState("");

  async function handleCreateNews(){
    const formData = new FormData();
    // let data = {
    //     title:title,
    //     description:description,
    //     date:date
    // }
    // console.log(data)
    formData.append("file",file);
    formData.append("filename",filename);
    formData.append("title",title);
    formData.append("description",description);
    formData.append("date",date);
    console.log(formData);
    if(title.length!= null && description.length != null && date.length!= null && filename.length !=0){
    let response = await axios.post(
      "http://localhost:4000/superadmin/addNews",formData,
      {
        headers: { Authorization: token },
      }
    );  
    handleClose()
    getNews()
  } else{
    alert("Please fill all the fields")
  }
}
async function deleteNews(id){
  let response = await axios.post(
    "http://localhost:4000/superadmin/deleteNews",{newsId:id},
    {
      headers: { Authorization: token },
    }
  );
  getNews()
}

  async function getNews() {
    let response = await axios.get(
      "http://localhost:4000/superadmin/showNews",
      {
        headers: { Authorization: token },
      }
    );
    if (response.status === 200) {
      setUsers(response.data.response);
    }
  }

  useEffect(() => {
    getNews();
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
            Add News
          </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Add News</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form>
                <Form.Control type="text" placeholder="Title" onChange={(e)=>setTitle(e.target.value)}/>
                <br />
                <Form.Control type="text" placeholder=" Description" onChange={(e)=>setDescription(e.target.value)}/>
                <br />
                <Form.Control type="text" placeholder="Date" onChange={(e)=>setDate(e.target.value)} />
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
              <Button variant="primary" onClick={handleCreateNews}>
              Add News
              </Button>
            </Modal.Footer>
          </Modal>

          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>News Head</th>
                <th>Description</th>
                <th>date</th>
              </tr>
            </thead>
            <tbody>
              {users &&
                users.length > 0 &&
                users.map((p) => {
                  return (
                    <tr>
                      <td>{p.title}</td>
                      <td>{p.description}</td>
                      <td>{p.date}</td>
                      <td colSpan="2">
                      <button
                          className="btn btn-success"
                          data-toggle="modal"
                          data-target="#exampleModal"
                        >
                         Edit{" "}
                          <i className="fa fa-edit" ></i>
                        </button>
                       
                        <button className="btn btn-danger" onClick = {(e)=>deleteNews(p._id)}>
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

export default Manage_news;
