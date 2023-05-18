import React from 'react'

// ** RB
import { Container, Col, Row, Button } from 'react-bootstrap'

// ** Map
import { Map } from 'react-map-gl'

// ** Styles
import 'mapbox-gl/dist/mapbox-gl.css'

// ** Image
import gmap from 'assets/images/details/gmap.jpg'

const EventDescription = ({ description, address }) => {
  return (
    <section className="bg-white section-description">
      <Container className="p-8">
        <Row className="bg-white">
          <Col lg="8">
            <h5 className="mb-3">Event Details</h5>
            <p dangerouslySetInnerHTML={{ __html: description }} className="lh-lg" />
          </Col>
        </Row>
        <Row>
          <Col xs="12" lg="6">
            <div className="position-relative border rounded-3 p-1">
              <img src={gmap} alt="gmap" className="img-fluid rounded-3" />
              <div className="bg-secondary position-absolute w-100 h-100 top-0 start-0 rounded opacity-25"></div>
              <Button
                as="a"
                href={`https://maps.google.com/?q=${address}`}
                target="_blank"
                variant="secondary"
                className="d-inline position-absolute rounded-pill px-3"
                style={{ top: '45%', right: '30%' }}
              >
                View in Google Map
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default EventDescription
