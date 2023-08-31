import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./Login.css"; // Import your custom CSS file
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(name);
    // console.log(value);

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Here you can implement your login logic
    const { email, password } = user;
    if (email && password) {
      console.log(user);
      axios.post("http://localhost:5000/login", user).then((res) => {
        alert(res.data.message);
        if (typeof res.data.userId != "undefined") {
          localStorage.setItem("user_login", res.data.userId);
          localStorage.setItem("user_name", res.data.name);
          console.log(`set`);
          navigate("/");
        }

        console.log(res.data.name);
      });
    } else {
      alert("invalid Input");
    }
  };

  return (
    <Container fluid className="login-container">
      <Row>
        <Col md={6} className="login-form">
          <h2 className="text-center text-decoration-underline mb-4">Login</h2>
          <Form onSubmit={handleLogin}>
            <Form.Group controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Email"
                name="email"
                value={user.email}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Password"
                name="password"
                value={user.password}
                onChange={handleChange}
              />
            </Form.Group>

            <Button className="btn-login" variant="primary" type="submit">
              Login
            </Button>
            <h5 className="Registerbtn">
              Don't have an account?{" "}
              <Link to="/signup" className="text-decoration-underline">
                Register here
              </Link>
            </h5>
          </Form>
        </Col>
        <Col md={6} className="image-col">
          <img
            src="https://img.freepik.com/free-vector/forgot-password-concept-illustration_114360-1123.jpg?w=740&t=st=1693468848~exp=1693469448~hmac=12971dfc40b737242f7b1c72c970fc4117477e98606557a897c99cefcc7c3243"
            alt="Login Image"
            className="login-image"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
