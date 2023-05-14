// ** React Import
import React, { useState } from 'react'

// ** Third Party Components
import * as Yup from 'yup'
import { Form, Row, Col, Button } from 'react-bootstrap'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import classnames from 'classnames'
import Select from 'react-select'

// ** Image
import Shield from 'assets/images/icons/shield-check.png'

// ** Custom Component
import PaymentCard from './PaymentCard'

// ** Styles
import { selectStyles, selectThemeColors } from 'utility/utils'

const styles = {
  label: 'text-white',
  input: 'shadow-none border-input bg-transparent text-white'
}

const roleOptions = [
  {
    value: 1,
    label: 'Engineer'
  },
  {
    value: 2,
    label: 'Developer'
  },
  {
    value: 3,
    label: 'Others'
  }
]

const GuestForm = () => {
  // ** State
  const [payment_method, setPaymentMethod] = useState(null)

  // ** Schema
  const Schema = Yup.object().shape({
    firstname: Yup.string().min(3).required(),
    lastname: Yup.string().min(3).required(),
    email: Yup.string().email(),
    role: Yup.object().required()
  })

  // ** Hooks
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({ mode: 'onChange', resolver: yupResolver(Schema) })

  const onSubmit = (data) => {
    console.log(data, payment_method)
  }

  const handleChangePayment = (payment_id) => {
    setPaymentMethod(payment_id)
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <h6 className="text-gray">01</h6>
      <h6 className="text-white">Personal Details</h6>

      <Row className="mt-5">
        <Col sm="6" className="mb-5">
          <Form.Label className={styles.label}>First Name</Form.Label>
          <Controller
            name="firstname"
            defaultValue=""
            control={control}
            render={({ field }) => {
              return (
                <Form.Control
                  className={styles.input}
                  size="lg"
                  isInvalid={errors.firstname && true}
                  {...field}
                />
              )
            }}
          />
        </Col>
        <Col sm="6" className="mb-5">
          <Form.Label className={styles.label}>Last Name</Form.Label>
          <Controller
            name="lastname"
            defaultValue=""
            control={control}
            render={({ field }) => {
              return (
                <Form.Control
                  className={styles.input}
                  size="lg"
                  isInvalid={errors.lastname && true}
                  {...field}
                />
              )
            }}
          />
        </Col>
        <Col sm="6" className="mb-5">
          <Form.Label className={styles.label}>Email Address</Form.Label>
          <Controller
            name="email"
            defaultValue=""
            control={control}
            render={({ field }) => {
              return (
                <Form.Control
                  className={styles.input}
                  size="lg"
                  isInvalid={errors.email && true}
                  {...field}
                />
              )
            }}
          />
        </Col>
        <Col sm="6" className="mb-5">
          <Form.Label className={styles.label}>Role</Form.Label>
          <Controller
            name="role"
            defaultValue=""
            control={control}
            render={({ field }) => {
              return (
                <Select
                  options={roleOptions}
                  styles={selectStyles}
                  className={classnames(`${styles.input}`, {
                    'is-invalid': errors.role && true
                  })}
                  theme={selectThemeColors}
                  {...field}
                />
              )
            }}
          />
        </Col>
      </Row>

      <h6 className="text-gray mt-4">02</h6>
      <h6 className="text-white">Payment Method</h6>
      <Row className="mt-5 mb-8">
        <PaymentCard setPaymentMethod={handleChangePayment} />
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

export default GuestForm
