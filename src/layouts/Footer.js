import React from 'react'

// ** Third Party Components
import { Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import themeConfig from '../configs/themeConfig'

import { company, features, learn } from './utils'

const ListGroup = ({ list }) => {
  return (
    <Col sm="4" lg="2">
      <ul className="footer-group">
        {list.map((li, index) => {
          return (
            <li key={index} className={li.head ? 'mb-3' : 'mb-2'}>
              <Link to={li.path} className={li.head ? 'footer-link head' : 'footer-link'}>
                {li.title}
              </Link>
            </li>
          )
        })}
      </ul>
    </Col>
  )
}

const FooterComponent = () => {
  return (
    <Card className="rounded-0 border-0" bg="dark">
      <Card.Body>
        <Container>
          <Col className="mb-4">
            <span className="fs-4 text-white">{themeConfig.app.appLogoImage}</span>
          </Col>
          <Row>
            <Col sm="12" lg="4">
              <p className="text-gray">
                Semina adalah tempat di mana <br /> anda dapat mencari event sesuai <br />
                dengan minat & terdekat.
              </p>
            </Col>
            <ListGroup list={features} />
            <ListGroup list={company} />
            <ListGroup list={learn} />
            <Col lg="2" className="d-xs-none"></Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  )
}

export default FooterComponent
