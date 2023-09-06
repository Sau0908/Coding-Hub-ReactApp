import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import "./Signup.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    UserName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add your signup logic, e.g., sending data to an API
    const { UserName, email, password } = formData;
    if (UserName && email && password) {
      console.log(formData);
      axios.post("http://localhost:5000/register", formData).then((res) => {
        console.log(res.data.message);
        const s = "User already registerd";
        if (s == res.data.message) {
          alert(res.data.message);
        } else {
          navigate("/");
        }

        console.log(res.data.name);
      });
    } else {
      alert("invlid input");
    }
  };

  return (
    <Container className="main-container">
      <Row>
        <Col md={6}>
          <div className="signup-container">
            <Card style={{ transition: "none", transform: "none" }}>
              <Card.Body>
                <h1 className="text-decoration-underline">Register Here</h1>
                <Form onSubmit={handleSubmit}>
                  <Form.Group>
                    <Form.Label>User Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="UserName"
                      value={formData.UserName}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <div style={{ marginTop: "4px" }}>
                    <Button variant="primary" type="submit">
                      Sign Up
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </div>
        </Col>
        <Col md={6} className="d-none d-md-block">
          {" "}
          {/* This column will be hidden on small devices */}
          <div className="image-container">
            <img
              src="https://img.freepik.com/free-vector/two-factor-authentication-concept-illustration_114360-5598.jpg?w=740&t=st=1693925199~exp=1693925799~hmac=104e24afb78b44e84b892b80d14991a2dd052da25246f462ca3626406a8c3a82"
              alt="Signup"
              className="img-fluid"
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Signup;
