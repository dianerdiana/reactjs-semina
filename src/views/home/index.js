import React from 'react'

// ** RB
import { Container } from 'react-bootstrap'

// ** Components
import Carousel from './Carousel'
import HeroText from './HeroText'
import Sponsors from './Sponsors'
import FeaturedEvents from './FeaturedEvents'

const Home = () => {
  return (
    <>
      <Container>
        <HeroText />
        <Carousel />
      </Container>
      <Sponsors />
      <FeaturedEvents />
    </>
  )
}

export default Home
