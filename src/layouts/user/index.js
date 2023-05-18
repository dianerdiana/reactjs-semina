// ** React Imports
import React from 'react'

// ** Custom Components
import NavbarComponent from './Navbar'
import FooterComponent from './Footer'

// ** Third Party Component
import { Outlet, useLocation } from 'react-router-dom'

const Layout = () => {
  // ** Hooks
  const location = useLocation()
  const isRegister = location.pathname === '/register'
  const hidden = location.pathname === '/login' || location.pathname === '/checkout'

  return (
    <React.Fragment>
      <NavbarComponent />
      <Outlet />
      <FooterComponent auth={isRegister} hidden={hidden} />
    </React.Fragment>
  )
}

export default Layout
