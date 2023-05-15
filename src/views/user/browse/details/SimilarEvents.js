import React from 'react'

// ** RB
import { Card, Container, Row, Col } from 'react-bootstrap'

// ** Thirdparty
import { Link } from 'react-router-dom'

// ** Images
import image_1 from 'assets/images/events/image-1.jpg'
import image_2 from 'assets/images/events/image-2.jpg'
import image_3 from 'assets/images/events/image-3.jpg'
import image_4 from 'assets/images/events/image-4.jpg'

const SimilarEvents = () => {
  const events = [
    {
      id: 1,
      img: image_1,
      title: 'Lear Jira for Sprint Design Venture',
      price: '229',
      place: 'Bandung',
      date: '2022-01-22',
      category: 'Product Design'
    },
    {
      id: 2,
      img: image_2,
      title: 'Team Management for Long Term',
      price: '0',
      place: 'Jakarta',
      date: '2022-08-11',
      category: 'Product Design'
    },
    {
      id: 3,
      img: image_3,
      title: 'Set Marketing Target for SaaS Bii',
      price: '80',
      place: 'Bandung',
      date: '2022-01-22',
      category: 'Product Design'
    },
    {
      id: 4,
      img: image_4,
      title: 'Google Adsense from Zero to Big Bucks',
      price: '99',
      place: 'Jakarta',
      date: '2022-08-11',
      category: 'Product Design'
    }
  ]

  const formatDate = (date) => {
    const convert = new Date(date)
    const options = { day: 'numeric', month: 'short', year: 'numeric' }
    const formattedDate = convert.toLocaleDateString('en-GB', options)

    return formattedDate
  }

  return (
    <section className="bg-light">
      <Container>
        <Row className="py-8">
          <h5 className="text-pink">Next One</h5>
          <h2 className="mb-8">Similar Events</h2>
          {events.map((event) => {
            return (
              <Col key={event.id} sm="6" md="6" lg="3" className="mb-4">
                <Link to="#" className="text-decoration-none">
                  <Card className="rounded rounded-4 shadow border-0 position-relative">
                    <img
                      src={event.img}
                      alt={event.title}
                      className="img-fluid"
                      style={{
                        borderRadius: '1rem 1rem 0 0'
                      }}
                    />
                    <div className="position-absolute top-0 end-0 p-3">
                      <span className="bg-black text-success rounded-pill fs-7 px-2 py-1">
                        {event.price != 0 ? `$${event.price}` : 'FREE'}
                      </span>
                    </div>
                    <Card.Body>
                      <h6 className="text-secondary">{event.title}</h6>
                      <p className="text-gray fs-7">{event.category}</p>
                      <p className="text-secondary fs-7">
                        {event.place}, {formatDate(event.date)}
                      </p>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            )
          })}
        </Row>
      </Container>
    </section>
  )
}

export default SimilarEvents
