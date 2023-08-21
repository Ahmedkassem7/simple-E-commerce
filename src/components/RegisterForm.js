import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    alert("Register Successful ✔👌!");
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <Container style={{ height: "35.6rem", marginTop: "3rem" }}>
      <h2 className="mt-5 text-center">Register</h2>
      <Row className="justify-content-center">
        <Col md={6}>
          <Form onSubmit={handleRegister}>
            <Form.Group controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                className="mb-4"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                className="mb-4"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                className="mb-4"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              style={{
                display: "block",
                width: "15rem",
                margin: "30px auto",
              }}
            >
              Register
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default RegisterForm;
