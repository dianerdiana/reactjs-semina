// ** React Import
import React from 'react'

// ** Bootstrap Import
import { Button, Card, Col, Form, Row } from 'react-bootstrap'

const Login = () => {
  return (
    <Row className="justify-content-center mx-0 py-8">
      <h1 className="text-center text-white mb-8">Sign In</h1>
      <Col md="5">
        <Card bg="white" className="px-1 py-3">
          <Card.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Email Address</Form.Label>
                <Form.Control className="shadow-none" size="lg" />
              </Form.Group>
              <Form.Group className="mb-5">
                <Form.Label>Password</Form.Label>
                <Form.Control className="shadow-none" size="lg" />
              </Form.Group>
              <Form.Group className="d-grid gap-3">
                <Button variant="success" className="rounded-pill py-7 fw-bold text-dark">
                  Sign In
                </Button>
                <Button variant="dark" className="rounded-pill py-7 fw-bold text-white">
                  Create New Account
                </Button>
              </Form.Group>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}

export default Login
