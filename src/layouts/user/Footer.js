import React from 'react'

// ** Third Party Components
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import themeConfig from '../../configs/themeConfig'

import { company, features, learn } from './utils'

// ** Custom Component
import Sponsor from 'components/sponsor'

const ListGroup = ({ list }) => {
  return (
    <Col sm="4" lg="2">
      <ul className="list-group">
        {list.map((li, index) => {
          return (
            <li key={index} className={li.head ? 'mb-3' : 'mb-2'}>
              <Link to={li.path} className={li.head ? 'list-link head' : 'list-link'}>
                {li.title}
              </Link>
            </li>
          )
        })}
      </ul>
    </Col>
  )
}

const FooterComponent = ({ auth, hidden }) => {
  const year = new Date().getFullYear()

  if (hidden) return

  return (
    <Container className="py-8">
      {auth ? (
        <Sponsor />
      ) : (
        <>
          <div className="mb-4">
            <span className="fs-4 text-white">{themeConfig.app.appLogoImage}</span>
          </div>
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
          <div className="text-center py-6">
            <span className="text-gray">
              All Rights Reserved. Semina Dian Erdiana {year}.
            </span>
          </div>
        </>
      )}
    </Container>
  )
}

export default FooterComponent
