// ** React Imports
import React, { useEffect, useState } from 'react'

// ** Utils
import mastercard from 'assets/images/logo/bank/mastercard.svg'
import sewallet from 'assets/images/logo/bank/sewallet.svg'

// ** Third Party
import { Card, Col, Form, Row } from 'react-bootstrap'

const PaymentCard = ({ setPaymentMethod }) => {
  const [payment_id, setPaymentId] = useState(1)

  // ** Payment Methods
  const paymentMethods = [
    {
      id: 1,
      name: 'Mastercard',
      icon: mastercard
    },
    {
      id: 2,
      name: 'Sewallet',
      icon: sewallet,
      balance: '50.000'
    }
  ]

  useEffect(() => {
    setPaymentMethod(payment_id)
  }, [payment_id, setPaymentMethod])

  return (
    <>
      {paymentMethods.map((pay, index) => (
        <Col sm="12" md="10" lg="6" key={index}>
          <Card className="mb-5 border-white p-2 card-payment-method" bg="transparent">
            <Card.Body>
              <Row className="align-items-center">
                <Col xs="auto">
                  <img src={pay.icon} alt={pay.name} className="img-fluid" />
                </Col>
                <Col>
                  <span className="text-white">{pay.name}</span>
                  {pay.balance ? (
                    <span className="d-block text-white" style={{ fontSize: '14px' }}>
                      Balance: ${pay.balance}
                    </span>
                  ) : (
                    ''
                  )}
                </Col>
                <Col xs="auto" className="ms-auto">
                  <Form.Check
                    type="radio"
                    name="payment_method"
                    className="cursor-pointer shadow-none"
                    onChange={() => setPaymentId(pay.id)}
                    defaultChecked={index === 0 && true}
                  />
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </>
  )
}

export default PaymentCard
