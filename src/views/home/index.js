import React from 'react'

// ** RB
import { Container } from 'react-bootstrap'

// ** Components
import Carousel from './Carousel'
import HeroText from './HeroText'

const Home = () => {
  return (
    <>
      <Container>
        <HeroText />
        <Carousel />
      </Container>
      <div
        style={{
          width: '100%',
          height: '240px',
          background: 'white',
          marginTop: '-275px'
        }}
      ></div>
    </>
  )
}

export default Home
