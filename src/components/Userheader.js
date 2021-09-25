import React, { useContext } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Context } from "../context/index";
import { toast } from "react-toastify";

const Userheader = ({ history }) => {
  const { dispatch } = useContext(Context);
  const logout = () => {
    dispatch({
      type: "LOGOUT",
      payload: JSON.stringify(window.localStorage.removeItem("user")),
    });
    toast.success("logout Successfull");
    history.push("/");
  };

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="">React</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link onClick={logout}>Logout</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Userheader;
