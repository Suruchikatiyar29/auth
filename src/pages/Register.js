import React, { useState } from "react";
import Header from "../components/Header";
import { Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`auth/register`, {
        name,
        email,
        password,
      })
      .then((response) => {
        console.log(response);
        toast.success(` Registered successfully! Now Please Login`);
        history.push("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <Header />
      <div className="col-md-6 form">
        <Form onSubmit={handleSubmit}>
          <h1 className="text-center">Register</h1>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="formBasicCheckbox"
          ></Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};

export default Register;
