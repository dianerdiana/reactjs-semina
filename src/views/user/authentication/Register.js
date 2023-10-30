// ** React Import
import React from 'react'

// ** Bootstrap Import
import { Button, Card, Col, Form, Row } from 'react-bootstrap'

// Router DOM
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <Row className="justify-content-center mx-0 my-8">
      <Col md="6" className="py-md-8 mb-3 mb-lg-0">
        <h3 className="hero-title mt-md-8">Expand Your Knowledge & Skills</h3>
        <p className="text-gray">
          Kami menyediakan berbagai acara terbaik untuk membantu{' '}
          <br className="d-none d-lg-inline" /> anda dalam meningkatkan skills di bidang
          teknologi
        </p>
      </Col>
      <Col md="5">
        <Card bg="white" className="px-1 py-3">
          <Card.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>First Name</Form.Label>
                <Form.Control className="shadow-none" size="lg" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Last Name</Form.Label>
                <Form.Control className="shadow-none" size="lg" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email Address</Form.Label>
                <Form.Control className="shadow-none" size="lg" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Password (6 characters)</Form.Label>
                <Form.Control className="shadow-none" size="lg" />
              </Form.Group>
              <Form.Group className="mb-5">
                <Form.Label>Role</Form.Label>
                <Form.Control className="shadow-none" size="lg" />
              </Form.Group>
              <Form.Group className="d-grid">
                <Button
                  as={Link}
                  to="/home"
                  variant="success"
                  className="rounded-pill py-7 fw-bold text-dark"
                >
                  Sign Up
                </Button>
              </Form.Group>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}

export default Register
