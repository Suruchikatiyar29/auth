import React, { useState, useEffect } from "react";
import Userheader from "../components/Userheader";
import { Form, Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Home = () => {
  const [data, setData] = useState();
  const [view, setView] = useState();

  useEffect(() => {
    load();
  }, []);

  const load = () => {
    axios
      .get(`/data/view`)
      .then((response) => {
        setView(response.data.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  if (!view) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`/data/`, { data })
      .then((response) => {
        console.log(response);
        load();
        toast.success("data inserted successfully");
      })
      .catch((err) => {
        toast.error(err);
      });
  };

  const handleRemove = (id) => {
    axios
      .delete(`/data/remove/${id}`)
      .then((response) => {
        load();
        toast.success("data deleted successfully");
      })
      .catch((err) => {
        toast.error(err);
      });
  };

  return (
    <>
      <Userheader />

      <div className="col-md-6 form">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicdata">
            <Form.Label>data</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter data"
              value={data}
              onChange={(e) => {
                setData(e.target.value);
              }}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Data</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {view.map((data) => (
              <tr>
                <td>{data.data}</td>
                <td>
                  <Link to={`/edit/${data._id}`} className="btn btn-success">
                    Edit
                  </Link>
                </td>
                <td>
                  <Button
                    className="btn btn-danger"
                    onClick={() => handleRemove(data._id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default Home;
