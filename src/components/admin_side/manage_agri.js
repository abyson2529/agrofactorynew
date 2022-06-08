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

function AgriClass() {
  const [users, setUsers] = useState([]);
  const [date, setDate] = useState(false);
  const [topic, setTopic] = useState(false);
  const [instructor, setInstructor] = useState(false);
  const [time, setTime] = useState(false);
  const [meetlink, setMeetlink] = useState(false);

  const [udate, updateDate] = useState(false);
  const [utopic, updateTopic] = useState(false);
  const [uinstructor, updateInstructor] = useState(false);
  const [utime, updateTime] = useState(false);
  const [umeetlink, updateMeetlink] = useState(false);

  const [show, setShow] = useState(false);
  const [newShow, setNewShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handlenewClose = () => setNewShow(false);
  const handlenewShow = () => setNewShow(true);

  async function handleCreateAgriClass() {
    let data = {
      date: date,
      topic: topic,
      instructor: instructor,
      time: time,
      meetlink: meetlink,
    };
    if(date.length!= null && topic.length!= null && instructor.length != null && time.length!= null&& meetlink.length!= null ){
    let response = await axios.post(
      "http://localhost:4000/superadmin/addAgriClass",
      data,
      {
        headers: { Authorization: token },
      }
    );
    handleClose();
    getAgriClass();

  } else{
    alert("Please fill all the fields")
  }
  }
  async function deleteAgriClass(id) {
    let response = await axios.post(
      "http://localhost:4000/superadmin/deleteAgriClass",
      { AgriClassId: id },
      {
        headers: { Authorization: token },
      }
    );
    getAgriClass();
  }
  async function handleUpdateAgriClass(id) {
    let data = {
      date: udate,
      topic: utopic,
      instructor: uinstructor,
      time: utime,
      meetlink: umeetlink,
    };
    console.log(data)
    // let response = await axios.post(
    //   "http://localhost:4000/superadmin/updateAgriClass",
    //   { agriClassId: id }, data,
    //   {
    //     headers: { Authorization: token },
    //   }
    // );
    // handlenewClose();
  }

  async function getAgriClass() {
    let response = await axios.get(
      "http://localhost:4000/superadmin/showAgriClass",
      {
        headers: { Authorization: token },
      }
    );
    if (response.status === 200) {
      setUsers(response.data.response);
    }
  }

  useEffect(() => {
    getAgriClass();
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
            Add Classes
          </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Add Classes</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form>
                <Form.Control
                  type="text"
                  placeholder="Date"
                  onChange={(e) => setDate(e.target.value)}
                />
                <br />
                <Form.Control
                  type="text"
                  placeholder=" Topic"
                  onChange={(e) => setTopic(e.target.value)}
                />
                <br />
                <Form.Control
                  type="text"
                  placeholder="Instructor"
                  onChange={(e) => setInstructor(e.target.value)}
                />
                <br />
                <Form.Control
                  type="text"
                  placeholder="Time"
                  onChange={(e) => setTime(e.target.value)}
                />
                <br />
                <Form.Control
                  type="text"
                  placeholder="Meet Link"
                  onChange={(e) => setMeetlink(e.target.value)}
                />
                <br />
              </form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={handleCreateAgriClass}>
                Add Classes
              </Button>
            </Modal.Footer>
          </Modal>

          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>Date</th>
                <th>Topic</th>
                <th>Instructor</th>
                <th>Time</th>
                <th>Meet Link</th>
              </tr>
            </thead>
            <tbody>
              {users &&
                users.length > 0 &&
                users.map((p) => {
                  return (
                    <tr>
                      <td>{p.date}</td>
                      <td>{p.topic}</td>
                      <td>{p.instructor}</td>
                      <td>{p.time}</td>
                      <td>{p.meetlink}</td>
                      <td colSpan="2">
                        <button
                          className="btn btn-success"
                          data-toggle="modal"
                          data-target="#exampleModal"
                          onClick={handlenewShow}
                        >
                          Edit <i className="fa fa-edit"></i>
                        </button>
                        <Modal show={newShow} onHide={handlenewClose}>
                          <Modal.Header closeButton>
                            <Modal.Title>Edit Classes</Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                            <form>
                              <Form.Control
                                type="text"
                                placeholder="Date"
                                onChange={(e) => updateDate(e.target.value)}
                              />
                              <br />
                              <Form.Control
                                type="text"
                                placeholder=" Topic"
                                onChange={(e) => updateTopic(e.target.value)}
                              />
                              <br />
                              <Form.Control
                                type="text"
                                placeholder="Instructor"
                                onChange={(e) =>
                                  updateInstructor(e.target.value)
                                }
                              />
                              <br />
                              <Form.Control
                                type="text"
                                placeholder="Time"
                                onChange={(e) => updateTime(e.target.value)}
                              />
                              <br />
                              <Form.Control
                                type="text"
                                placeholder="Meet Link"
                                onChange={(e) => updateMeetlink(e.target.value)}
                              />
                              <br />
                            </form>
                          </Modal.Body>
                          <Modal.Footer>
                            <Button
                              variant="primary"
                              onClick={handleUpdateAgriClass(p._id)}
                            >
                              Edit Datas
                            </Button>
                          </Modal.Footer>
                        </Modal>

                        <button
                          className="btn btn-danger"
                          onClick={(e) => deleteAgriClass(p._id)}
                        >
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

export default AgriClass;
