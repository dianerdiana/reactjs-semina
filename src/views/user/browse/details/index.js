import React from 'react'

// ** Components
import Testimony from './Testimony'
import SimilarEvents from './SimilarEvents'

// ** Images
import details from 'assets/images/details/image-1.jpg'

// ** RB
import { Container } from 'react-bootstrap'

const Details = () => {
  return (
    <main>
      <Container as="section" className="px-8">
        <div className="py-6">
          <img src={details} alt="Details" className="img-fluid rounded-5" />
        </div>
      </Container>
      <SimilarEvents />
      <Testimony />
    </main>
  )
}

export default Details
