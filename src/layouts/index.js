// ** React Imports
import React from 'react'

// ** Custom Components
import NavbarComponent from './Navbar'
import FooterComponent from './Footer'

// ** Third Party Component
import { Container } from 'react-bootstrap'
import { Outlet, useLocation } from 'react-router-dom'

const Layout = () => {
  // ** Hooks
  const location = useLocation()
  const isRegister = location.pathname === '/register'
  const hidden = location.pathname === '/login' || location.pathname === '/checkout'

  return (
    <>
      <NavbarComponent />
      <Outlet />
      <FooterComponent auth={isRegister} hidden={hidden} />
    </>
  )
}

export default Layout
