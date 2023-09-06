import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import "./Login.css"; // Import your custom CSS file
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";
import GoogleButton from "react-google-button";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";

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
    signInWithEmailAndPassword(auth, user.email, user.password)
      .then((res) => {
        navigate("/");
        alert("User Login Successfully !");
      })
      .catch((res) => {
        alert(res.message);
        console.log(res);
      });
  };

  function handleGoogle() {
    signInWithPopup(auth, provider)
      .then((res) => {
        console.log(res);
        alert("User Login Successfully !");
        navigate("/");
      })
      .catch((res) => {
        console.log(res);
        alert(res.message);
      });
  }

  return (
    <Container fluid className="login-container">
      <Row>
        <Col md={6} className="login-form mr-3">
          <h2 className="text-center text-decoration-underline mb-4">Login</h2>
          <Card style={{ transition: "none", transform: "none" }}>
            <Card.Body>
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
                    Register Here
                  </Link>
                </h5>
                <h2 style={{ textAlign: "center" }}>OR</h2>
              </Form>
            </Card.Body>
          </Card>
          <div>
            <GoogleButton style={{ width: "100%" }} onClick={handleGoogle} />
          </div>
        </Col>
        <Col md={6} className="d-none d-md-block">
          {" "}
          {/* This column will be hidden on small devices */}
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
