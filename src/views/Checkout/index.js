// ** React Import
import React from 'react'

// ** Third Party Component
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import { MapPin, Clock, Calendar } from 'react-feather'

// ** Utils
import imgCheckout from '../../assets/images/checkout.png'
import mastercard from '../../assets/images/logo/bank/mastercard.svg'
import sewallet from '../../assets/images/logo/bank/sewallet.svg'

const styles = {
  label: 'text-white',
  input: 'shadow-none border-input bg-transparent text-white'
}

const CheckoutComponent = () => {
  const paymentMethods = [
    {
      name: 'Mastercard',
      icon: mastercard
    },
    {
      name: 'Sewallet',
      icon: sewallet
    }
  ]

  return (
    <Row className="py-8">
      <h1 className="text-center text-white mb-8">Invest In Yourself</h1>
      <Row className="justify-content-center mb-6">
        <Col md="4" className="mb-4 mb-md-0">
          <img
            src={imgCheckout}
            alt="checkout"
            className="img-checkout img-fluid"
            width="365px"
            height="255px"
          />
        </Col>
        <Col md="6" className="align-self-center">
          <Row>
            <Col sm="8">
              <h4 className="text-white mb-4">
                Start Your Design Career With Design Sprint
              </h4>
              <ul className="list-group">
                <li className="list-link-nl text-white mb-3 d-flex align-items-center">
                  <MapPin
                    className="img-thumbnail rounded-pill bg-secondary p-2 border-0 me-3"
                    color="white"
                    size={32}
                  />{' '}
                  Gowork Bandung
                </li>
                <li className="list-link-nl text-white mb-3 d-flex align-items-center">
                  <Clock
                    className="img-thumbnail rounded-pill bg-secondary p-2 border-0 me-3"
                    color="white"
                    size={32}
                  />{' '}
                  15.00 PM WIB
                </li>
                <li className="list-link-nl text-white mb-3 d-flex align-items-center">
                  <Calendar
                    className="img-thumbnail rounded-pill bg-secondary p-2 border-0 me-3"
                    color="white"
                    size={32}
                  />{' '}
                  13 Maret 2023
                </li>
              </ul>
            </Col>
            <Col className="align-self-center">
              <span className="text-white h1 db-underline">$2,980</span>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col md="8">
          <Form>
            <h6 className="text-gray">01</h6>
            <h6 className="text-white">Personal Details</h6>

            <Row className="mt-5">
              <Col sm="6" className="mb-5">
                <Form.Label className={styles.label}>First Name</Form.Label>
                <Form.Control className={styles.input} size="lg" />
              </Col>
              <Col sm="6" className="mb-5">
                <Form.Label className={styles.label}>Last Name</Form.Label>
                <Form.Control className={styles.input} size="lg" />
              </Col>
              <Col sm="6" className="mb-5">
                <Form.Label className={styles.label}>Email Address</Form.Label>
                <Form.Control className={styles.input} size="lg" />
              </Col>
              <Col sm="6" className="mb-5">
                <Form.Label className={styles.label}>Role</Form.Label>
                <Form.Control className={styles.input} size="lg" />
              </Col>
            </Row>

            <h6 className="text-gray mt-4">02</h6>
            <h6 className="text-white">Payment Method</h6>

            <Row className="mt-5">
              {paymentMethods.map((pay, index) => {
                return (
                  <Col sm="6" key={index}>
                    <Card
                      className="mb-5 border-white"
                      bg="transparent"
                      style={{ borderRadius: '14px' }}
                    >
                      <Card.Body>
                        <Row className="align-items-center">
                          <Col xs="auto">
                            <img src={pay.icon} alt={pay.name} className="img-fluid" />
                          </Col>
                          <Col>
                            <p className="text-white m-0">{pay.name}</p>
                          </Col>
                          <Col xs="auto" className="ms-auto">
                            <Form.Check
                              type="radio"
                              name="payment_method"
                              className="custom-radio shadow-none"
                            />
                          </Col>
                        </Row>
                      </Card.Body>
                    </Card>
                  </Col>
                )
              })}
            </Row>
          </Form>
        </Col>
      </Row>
    </Row>
  )
}

export default CheckoutComponent
