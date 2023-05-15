import React from 'react'

// ** Components
import Testimony from './Testimony'
import SimilarEvents from './SimilarEvents'

// ** Images
import details from 'assets/images/details/image-1.jpg'
import avatar from 'assets/images/avatar/avatar-1.jpg'

// ** RB
import { Card, Container, Col, Row, ListGroup, Button } from 'react-bootstrap'

// ** Utitilites
import { formatDate, formatTime } from 'utility/utils'

// ** images
import ic_place from 'assets/images/icons/ic_place.svg'
import ic_time from 'assets/images/icons/ic_time.svg'
import ic_calendar from 'assets/images/icons/ic_calendar.svg'

const Details = () => {
  const data = {
    title: 'Start Your Design Career With Design Sprint',
    img: details,
    speaker: {
      name: 'Shayna Putri',
      profession: 'Designer',
      avatar: avatar
    },
    place: 'Gowork',
    city: 'Bandung',
    time: '2023-05-15 15:00:00',
    price: '2,980',
    description: `
      Most realtors and investors are using Social Media (Facebook and Google)
      <b>ineffectively because</b> they don't know what they're doing or to start.
      They spend hours and hours trying different things and getting nowhere.
      This makes them feel like giving up on marketing altogether.
      <br></br>
      <br></br>
      We are a group of professionals who have decided to help people making
      travel experiences <b>whenever they want</b> and wherever they are.
      Our virtual tours have as their topic the beauties of the ancient world,
      such as Ancient Egypt or Ancient Rome, Art and History.
    `,
    keypoints: [
      {
        id: 1,
        text: 'Hours trying different things and getting nowhere makes them feel like giving up on marketing altogether.'
      },
      {
        id: 2,
        text: 'Hours trying different things and getting nowhere makes them feel like giving up on marketing altogether.'
      },
      {
        id: 3,
        text: 'Hours trying different things and getting nowhere makes them feel like giving up on marketing altogether.'
      }
    ]
  }

  return (
    <main>
      <Container as="section" className="px-8">
        <div className="py-6">
          <img src={details} alt="Details" className="img-fluid rounded-5" />
        </div>
        <Row className="justify-content-between">
          <Col lg="5" className="py-4">
            <h2 className="text-white lh-base">{data.title}</h2>
          </Col>
          <Col lg="4">
            <Card className="rounded-4 py-2">
              <Card.Body>
                <h6>Your Speaker</h6>
                <Container>
                  <Row className="border-bottom align-items-center pt-3 pb-4 pe-5">
                    <Col xs="4">
                      <img
                        src={data.speaker.avatar}
                        alt="Speaker"
                        className="rounded-circle img-fluid"
                      />
                    </Col>
                    <Col xs="8">
                      <h6>{data.speaker.name}</h6>
                      <p className="text-gray m-0 fs-7">{data.speaker.profession}</p>
                    </Col>
                  </Row>
                </Container>
                <h6 className="py-4 mb-0">Get Ticket</h6>
                <span className="d-block mb-4">
                  <span className="fs-1 fw-bold">${data.price}</span>
                  <span className="text-gray">/person</span>
                </span>
                <ListGroup className="mb-3">
                  <ListGroup.Item className="border-0 py-1 px-0">
                    <img
                      src={ic_place}
                      alt="Place"
                      className="img-thumbnail border-0 bg-transparent"
                    />
                    <span className="ms-2">
                      {data.place}, {data.city}
                    </span>
                  </ListGroup.Item>
                  <ListGroup.Item className="border-0 py-1 px-0">
                    <img
                      src={ic_time}
                      alt="Time"
                      className="img-thumbnail border-0 bg-transparent"
                    />
                    <span className="ms-2">{formatTime(data.time)} WIB</span>
                  </ListGroup.Item>
                  <ListGroup.Item className="border-0 py-1 px-0">
                    <img
                      src={ic_calendar}
                      alt="Calendar"
                      className="img-thumbnail border-0 bg-transparent"
                    />
                    <span className="ms-2">{formatDate(data.time)}</span>
                  </ListGroup.Item>
                </ListGroup>
                <Button
                  variant="success"
                  className="rounded-pill d-block w-100 fw-bold py-3"
                >
                  Join Now
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <SimilarEvents />
      <Testimony />
    </main>
  )
}

export default Details
