import React from 'react'

// ** RB
import { Container, Col, Row, Button, Card } from 'react-bootstrap'

// ** Custom Components
import Stars from 'components/stars'

// ** Images
import testimony from 'assets/images/testimony/image-1.jpg'
import figma from 'assets/images/logo/figma.svg'

// ** Thirdparty
import cn from 'classnames'

const Testimony = () => {
  const data = [
    {
      id: 1,
      value: 190000,
      title: 'Events Created'
    },
    {
      id: 2,
      value: 3000000,
      title: 'People Joined'
    },
    {
      id: 3,
      value: 5000,
      title: 'Success Startups'
    },
    {
      id: 4,
      value: 113000,
      title: 'Top Speakers'
    }
  ]

  const formatNumber = (value) => {
    if (value >= 1000000) {
      return (value / 1000000).toFixed(1) + 'M+'
    } else if (value >= 1000) {
      return (value / 1000).toFixed(1) + 'K+'
    }
    return value.toString()
  }

  return (
    <section className="bg-white py-8">
      <Container>
        {/* First Row */}
        <Row
          className="justify-content-center align-items-center py-8"
          style={{ minHeight: '624px' }}
        >
          <Col lg="5" className="position-relative mb-8">
            {/* Testimony Image */}
            <div className="w-100 text-center">
              <img src={testimony} alt="testimony" className="img-testimony rounded-5" />
            </div>

            {/* Testimony Card */}
            <div className="card-event-testimony">
              <Card className="border-0 shadow" style={{ marginLeft: '-70px' }}>
                <Card.Body className="pe-5">
                  <Row className="align-items-center mb-5">
                    <Col xs="4">
                      <img src={figma} alt="event" />
                    </Col>
                    <Col xs="8">
                      <h6>Learn Figma</h6>
                      <p className="fs-7 text-gray m-0">UI Design</p>
                    </Col>
                  </Row>
                  <Stars value={5} width={28} height={28} spacing={0} />
                  <h5 className="fs-7">12.5k joined</h5>
                </Card.Body>
              </Card>
            </div>
          </Col>

          {/* Testimony Text */}
          <Col lg="6" className="align-self-center text-center text-md-start ps-lg-6">
            <h5 className="text-pink">Story</h5>
            <h2 className="mb-6">
              One Great Event.
              <br></br>
              For The Better World.
            </h2>
            <p className="text-gray mb-5">
              Baca kisah bagaimana Shayna berhasil membangun sebuah Startup yang membantu
              warga untuk mendapatkan bantuan selama pandemic.
            </p>
            <Button variant="secondary" className="rounded-pill px-8 py-3">
              Read
            </Button>
          </Col>
        </Row>

        {/* Second Row */}
        <Row className="justify-content-center pb-5">
          {data.map((d, i) => {
            return (
              <Col
                sm="2"
                key={i}
                className={cn('text-center mb-3', {
                  'border-end': i != data.length - 1
                })}
              >
                <h3>{formatNumber(d.value)}</h3>
                <p className="m-0 text-gray fs-7">{d.title}</p>
              </Col>
            )
          })}
        </Row>
      </Container>
    </section>
  )
}

export default Testimony
