import React, { useState } from "react";
import { Container, Form, Button, Row, Col, Card } from "react-bootstrap";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    userName: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form Data:", formData);
  };

  return (
    <Container className="d-flex min-vh-100 justify-content-center align-items-center">
      <Card style={{ width: "100%", maxWidth: "500px" }}>
        <Card.Body>
          <Card.Title className="text-center mb-4">Log In</Card.Title>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formUserName" className="mt-3">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                name="userName"
                value={formData.userName}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formPassword" className="mt-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-4 w-100">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default LoginForm;
