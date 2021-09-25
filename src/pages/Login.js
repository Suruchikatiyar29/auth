import React, { useState, useContext } from "react";
import Header from "../components/Header";
import { Form, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import { Context } from "../context/index";
import axios from "axios";

const Login = ({ history }) => {
  const { dispatch } = useContext(Context);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`/auth/login`, { email, password })
      .then((response) => {
        dispatch({
          type: "LOGIN",
          payload: response.data.user.name,
        });

        window.localStorage.setItem("user", JSON.stringify(response.data.user));
        toast.success(`${response.data.user.name} welcome in home page`);
        history.push("/home");
      })
      .catch((err) => {
        console.log(err);
        toast.error("something went wrong");
      });
  };

  return (
    <>
      <Header />
      <div className="col-md-6 form">
        <Form onSubmit={handleSubmit}>
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

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};

export default Login;
