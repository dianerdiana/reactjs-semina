// ** React Imports
import React from 'react'

// ** Custom Components
import NavbarComponent from './Navbar'
import FooterComponent from './Footer'

// ** Third Party Component
import { Container } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'

const Layout = ({ auth, hidden }) => {
  return (
    <>
      <NavbarComponent />
      <Container>
        <Outlet />
      </Container>
      <FooterComponent auth={auth} hidden={hidden} />
    </>
  )
}

export default Layout
