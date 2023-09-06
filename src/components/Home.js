import React from "react";
import {
  Navbar,
  Nav,
  Carousel,
  Card,
  Container,
  Row,
  Col,
  Button,
} from "react-bootstrap";
import "../App.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };
  return (
    <div>
      <div className="App   ">
        <Navbar
          bg="dark"
          variant="dark"
          expand="xl"
          className="flex justify-content-between"
        >
          <Navbar.Brand href="#home">CODING HUB</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/services">Services</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
            <div className="button">
              <Button onClick={handleLogin}>Login</Button>
            </div>
          </Navbar.Collapse>
        </Navbar>

        <div className="container-fluid  ">
          <div className="row my-2">
            <div className="col-sm-6">
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block vw-100 vh-100 img-fluid rounded"
                    src="https://img.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg?w=740&t=st=1693462182~exp=1693462782~hmac=796bf22458585be3e40eff0adb4c94e91d67b8b9f408247417421db750c251b0"
                    height="500px"
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block vw-100 vh-100 img-fluid rounded"
                    src="https://img.freepik.com/free-vector/hand-coding-concept-illustration_114360-8413.jpg?w=740&t=st=1693464152~exp=1693464752~hmac=18a4c3ceda98f97c90edcf105b13faafca02b1dc76d772baaea063b810f4edd9"
                    height="500px"
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block vw-100 vh-100 img-fluid rounded"
                    src="https://img.freepik.com/free-vector/hand-coding-concept-illustration_114360-8113.jpg?w=740&t=st=1693462229~exp=1693462829~hmac=ba9233686da03d67325f8b52116de1733bd34aa1cb64518f6bed37571c25c6ef"
                    height="500px"
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block vw-100 vh-100 img-fluid rounded"
                    src="https://img.freepik.com/free-vector/code-typing-concept-illustration_114360-3581.jpg?w=740&t=st=1693462258~exp=1693462858~hmac=2fba18ba24ee2b2b3bede40f5bc9660bc013cc27eb9fdb71cdb5a614b7cb1582"
                    height="500px"
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
            </div>
            <div className="col-sm-6  vh-50" height="50px">
              <h1 className="mt-5">
                Get World Class Course From World Class Mentors
              </h1>
              <p className="mx-5 mt-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>

        <h1 className="fancy-heading">Our Courses</h1>

        <Container className="mt-5">
          <Row>
            <Col md={4}>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://img.freepik.com/free-vector/app-development-illustration_52683-47743.jpg?w=740&t=st=1693461887~exp=1693462487~hmac=a9905e2202aebbd1c660c6fee9f5a3481d6ee1bc89d4015991f3af0d1904648c"
                />
                <Card.Body>
                  <Card.Title></Card.Title>
                  <Card.Text>
                    <h4>APP DEVELOPMENT</h4>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://img.freepik.com/free-vector/web-development-concept-with-programmer-ar_107791-17049.jpg?w=740&t=st=1693462013~exp=1693462613~hmac=6ac1a9df0152867671b4343d3b46ed338f9240e46e3eaff9a1942c36339b89c3"
                />
                <Card.Body>
                  <Card.Title></Card.Title>
                  <Card.Text>
                    <h4>WEB DEVELOPMENT</h4>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://img.freepik.com/free-vector/hand-drawn-flat-design-rpa-illustration_23-2149277643.jpg?w=740&t=st=1693462074~exp=1693462674~hmac=ff02437149113a621c2b1008aa23122a2f4a220bb272fcb65c89e15c9648551c"
                />
                <Card.Body>
                  <Card.Title></Card.Title>
                  <Card.Text>
                    <h4>Machine Learning</h4>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        <h1 className="fancy-heading">Get Hired</h1>
        <Container className="mt-5">
          <Row>
            <Col md={4}>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://img.freepik.com/free-vector/recruit-agent-analyzing-candidates_74855-4565.jpg?size=626&ext=jpg&ga=GA1.2.695701732.1683486515&semt=ais"
                />
                <Card.Body>
                  <Card.Title></Card.Title>
                  <Card.Text>
                    <h4>Part-Time Internship</h4>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://img.freepik.com/free-vector/tiny-people-searching-business-opportunities_74855-19928.jpg?size=626&ext=jpg&ga=GA1.1.695701732.1683486515&semt=sph"
                />
                <Card.Body>
                  <Card.Title></Card.Title>
                  <Card.Text>
                    <h4>Full-Time Internship</h4>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://img.freepik.com/free-vector/male-team-illustration_23-2150184954.jpg?size=626&ext=jpg&ga=GA1.1.695701732.1683486515&semt=sph"
                />
                <Card.Body>
                  <Card.Title></Card.Title>
                  <Card.Text>
                    <h4>Paid Internship</h4>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>

        <footer className="bg-dark text-light mt-5">
          <Container className="">
            <Row className="mt-5">
              <Col md={6}>
                <h4>About Us</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam consectetur ligula ut efficitur.
                </p>
              </Col>
              <Col md={6}>
                <h4>Contact Info</h4>
                <p>Email: codinghub@example.com</p>
                <p>Phone: +1234567890</p>
              </Col>
            </Row>
          </Container>
        </footer>
      </div>
    </div>
  );
};

export default Home;
