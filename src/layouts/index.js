// ** React Imports
import React from 'react'

// ** Custom Components
import NavbarComponent from './Navbar'
import FooterComponent from './Footer'

import { Outlet } from 'react-router-dom'

const Layout = ({ auth, hidden }) => {
  return (
    <>
      <NavbarComponent />
      <Outlet />
      <FooterComponent auth={auth} hidden={hidden} />
    </>
  )
}

export default Layout
