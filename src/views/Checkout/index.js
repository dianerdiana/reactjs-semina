// ** React Import
import React from 'react'

// ** Third Party Component
import { Col, Row } from 'react-bootstrap'
import { MapPin, Clock, Calendar } from 'react-feather'

// ** Utils
import imgCheckout from '../../assets/images/checkout.png'

import { isLoggedInUser } from '../../utility/utils'
import GuestForm from './GuestForm'
import UserForm from './UserForm'

const CheckoutComponent = () => {
  const isLogin = isLoggedInUser()

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
        <Col md="8">{isLogin ? <UserForm /> : <GuestForm />}</Col>
      </Row>
    </Row>
  )
}

export default CheckoutComponent
