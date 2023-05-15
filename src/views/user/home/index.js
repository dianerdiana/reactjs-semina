import React from 'react'

// ** RB
import { Container } from 'react-bootstrap'

// ** Components
import Carousel from './Carousel'
import HeroText from './HeroText'
import Sponsors from './Sponsors'
import FeaturedEvents from './FeaturedEvents'
import Testimony from './Testimony'

const Home = () => {
  return (
    <main>
      <Container>
        <HeroText />
        <Carousel />
      </Container>
      <Sponsors />
      <FeaturedEvents />
      <Testimony />
    </main>
  )
}

export default Home
