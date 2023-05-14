// ** React Import
import React, { useState } from 'react'

// ** Third Party Components
import { Form, Row, Button } from 'react-bootstrap'
import { useForm } from 'react-hook-form'

// ** Image
import Shield from 'assets/images/icons/shield-check.png'

// ** Custom Component
import PaymentCard from './PaymentCard'

const UserForm = () => {
  // ** State
  const [payment_method, setPaymentMethod] = useState(null)

  // ** Hooks
  const { handleSubmit } = useForm()

  const onSubmit = (data) => {
    return { data, payment_method }
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Row className="mt-5 mb-8">
        <PaymentCard setPaymentMethod={setPaymentMethod} />
      </Row>

      <div className="text-center">
        <Button
          type="submit"
          variant="success"
          className="shadow-success rounded-pill px-8 py-7 fw-bold"
        >
          Pay Now
        </Button>

        <p className="mt-3 text-white mb-0">
          <img
            src={Shield}
            alt="shield-check"
            className="img-thumbnail bg-transparent border-0 mb-1"
            width="32px"
            height="32px"
          />
          Your payment is secure and encrypted.
        </p>
      </div>
    </Form>
  )
}

export default UserForm
