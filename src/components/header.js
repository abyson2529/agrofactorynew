import React, {Link} from 'react-router-dom';
import {Navbar, Container, Nav, Dropdown} from 'react-bootstrap';
import User from "../assets/imguser.png";
import Cart from "../assets/cart.png";
import { useHistory } from "react-router";

const Header = () =>
{
  const name= window.localStorage.getItem("name");
  const history = useHistory();
  function logout(){
    window.localStorage.removeItem("token")
    window.localStorage.removeItem("name")
    localStorage.clear();
    history.push("/");
  }
    return(
<Navbar bg="light" variant="light" style={{fontSize: "120%"}}>
        <Container style={{ maxWidth: "90%" }}>
          <Navbar.Brand href="/" style={{ marginLeft: "30px",fontSize: "120%" }}>
            Agro Factory
          </Navbar.Brand>
          <Nav className="d-flex justify-content-end" >
            <Nav.Link href="/dashboard">Home</Nav.Link>
            <Nav.Link href="/fmarket">Farmers Market</Nav.Link>
            <Nav.Link href="/vegetables">Bio Market</Nav.Link>
            <Nav.Link href="/news">News</Nav.Link>
            <Nav.Link href="/aboutus">About Us</Nav.Link>

            <Link to="/sample">
            <img
                  src={Cart}
                  style={{ height: "30px", width: "30px", marginLeft: "20px" }}
                />
                </Link>
                            

            <Dropdown style={{fontSize: "120%"}}>
              <Dropdown.Toggle variant="light" bsPrefix="p-0">
                <img
                  src={User}
                  style={{ height: "30px", width: "30px", marginLeft: "20px" }}
                />
                <h6 id= {"lgn-name"}> {name}</h6>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="/profile" >Profile</Dropdown.Item>
                <Dropdown.Item ><Link onClick = {()=>{logout()}}>Logout</Link></Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

          </Nav>
        </Container>
      </Navbar>
    )
};

export default Header;

