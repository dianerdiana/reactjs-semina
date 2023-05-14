import React from 'react'

// ** RB
import { Container } from 'react-bootstrap'

// ** Components
import Carousel from './Carousel'
import HeroText from './HeroText'
import CompaniesLogo from './CompaniesLogo'
import FeaturedEvents from './FeaturedEvents'

const Home = () => {
  return (
    <>
      <Container>
        <HeroText />
        <Carousel />
      </Container>
      <CompaniesLogo />
      <FeaturedEvents />
    </>
  )
}

export default Home
