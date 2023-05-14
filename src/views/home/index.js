import React from 'react'

// ** RB
import { Container } from 'react-bootstrap'

// ** Components
import Carousel from './Carousel'
import HeroText from './HeroText'
import CompaniesLogo from './CompaniesLogo'

const Home = () => {
  return (
    <>
      <Container>
        <HeroText />
        <Carousel />
      </Container>
      <CompaniesLogo />
    </>
  )
}

export default Home
