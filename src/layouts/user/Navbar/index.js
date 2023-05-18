// ** React Import
import React, { useRef, useState } from 'react'

// ** Bootstrap Import
import { Container, Nav, Navbar } from 'react-bootstrap'

// ** Third Party Components
import { Link, useLocation } from 'react-router-dom'
import classnames from 'classnames'

// ** Utils
import themeConfig from 'configs/themeConfig'
import { getUserData } from 'utility/utils'
import { navigations } from '../utils'

// ** Custom Component
import MenuLink from './MenuLink'
import UserAuth from './UserAuth'
import NavbarToggle from './NavbarToggle'

const NavbarComponent = () => {
  // ** Hooks
  const location = useLocation()
  const user = getUserData()
  const navRef = useRef()

  // ** Vars
  const isActive = (path) => path === location.pathname
  const isLoginPage = isActive('/login')

  // ** State
  const [expanded, setExpanded] = useState(false)
  const [bg, setBg] = useState('transparent') // set initial background color

  // ** Handle when hamburger button toggler
  const handleToggle = (isExpanded) => {
    setExpanded(isExpanded)
    setTimeout(() => {
      if (isExpanded) {
        // if Navbar is expanded, set the background color based on the expand breakpoint
        setBg(expanded ? 'transparent' : 'secondary')
      } else {
        // if Navbar is collapsed, set the background color to the initial value
        setBg('transparent')
      }
    }, !isExpanded && 500)
  }

  const toggleMenu = () => {
    navRef.current.click()
  }

  return (
    <Navbar
      collapseOnSelect
      expand={expanded ? 'false' : 'md'}
      bg={bg}
      variant="dark"
      onToggle={handleToggle}
      className="py-4"
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="text-white">
          {themeConfig.app.appLogoImage}
        </Navbar.Brand>
        <Navbar.Toggle ref={navRef} aria-controls="responsive-navbar-nav text-white">
          <NavbarToggle user={user} />
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className={classnames('gap-md-5', isLoginPage ? 'ms-auto' : 'mx-auto')}>
            <MenuLink
              menu={navigations}
              expanded={expanded}
              isActive={isActive}
              toggleMenu={toggleMenu}
            />
          </Nav>
          <Nav>
            <UserAuth
              user={user}
              expanded={expanded}
              isLoginPage={isLoginPage}
              toggleMenu={toggleMenu}
            />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarComponent
