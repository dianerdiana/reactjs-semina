import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import Carousel from './Carousel'
import knowledge from '../../assets/images/text/knowledge.png'
import joining from '../../assets/images/text/joining.png'

const Landing = () => {
  return (
    <>
      <Container>
        <Row className="justify-content-center mb-8">
          <Col xs="12" className="py-md-3 py-0"></Col>
          <Col sm="8" className="text-center py-6">
            <span className="text-white hero-title">
              Expand Your{' '}
              <img src={knowledge} alt="knowledge" className="text-knowledge" />
              <br />
              by <img src={joining} alt="joining" className="text-joining" /> Our Greatest
              Events
            </span>
          </Col>
          <Col sm="8" className="text-center">
            <span className="text-gray">
              Kami menyediakan berbagai acara terbaik untuk membantu{' '}
              <br className="d-none d-md-inline" />
              anda dalam meningkatkan skills di bidang teknologi
            </span>
          </Col>
        </Row>
        <Carousel />
      </Container>
      <div
        style={{
          width: '100%',
          height: '240px',
          background: 'white',
          marginTop: '-275px'
        }}
      ></div>
    </>
  )
}

export default Landing
