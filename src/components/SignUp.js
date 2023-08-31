import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
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

              <Button variant="primary" type="submit">
                Sign Up
              </Button>
            </Form>
          </div>
        </Col>
        <Col md={6}>
          <div className="image-container">
            <img
              src="https://img.freepik.com/premium-vector/secure-login-sign-up-concept-illustration-user-use-secure-login-password-protection-website-social-media-account-vector-flat-style_7737-2270.jpg?w=740"
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
