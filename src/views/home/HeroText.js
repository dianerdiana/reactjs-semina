import React from 'react'

// ** RB
import { Row, Col, Button } from 'react-bootstrap'

// ** Text
import knowledge from '../../assets/images/text/knowledge.png'
import joining from '../../assets/images/text/joining.png'

const HeroText = () => {
  return (
    <Row className="justify-content-center mb-8">
      <Col xs="12" className="py-md-3 py-0"></Col>
      <Col sm="8" className="text-center py-6">
        <span className="text-white hero-title">
          Expand Your <img src={knowledge} alt="knowledge" className="text-knowledge" />
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
        <div className="mt-6">
          <Button
            variant="success"
            className="rounded-pill shadow-success fw-bold px-6 py-7"
          >
            Browse now
          </Button>
        </div>
      </Col>
    </Row>
  )
}

export default HeroText
