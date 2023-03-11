// ** React Imports
import React from 'react'

// ** Custom Components
import NavbarComponent from './Navbar'
import FooterComponent from './Footer'

import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <NavbarComponent />
      <Outlet />
      <FooterComponent />
    </>
  )
}

export default Layout
