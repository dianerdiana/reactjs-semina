// ** React Import
import React, { useState } from 'react'

// ** Bootstrap Import
import { Button, Container, Nav, Navbar } from 'react-bootstrap'

// ** Third Party Components
import { NavLink, Link, useLocation } from 'react-router-dom'
import { Menu } from 'react-feather'
import themeConfig from '../configs/themeConfig'

const navigations = [
  {
    path: '/',
    title: 'Home'
  },
  {
    path: '/browse',
    title: 'Browse'
  },
  {
    path: '/stories',
    title: 'Stories'
  },
  {
    path: '/about',
    title: 'About'
  }
]

function CollapsibleExample() {
  // ** Hooks
  const location = useLocation()

  // ** State
  const [expanded, setExpanded] = useState(false)
  const [bg, setBg] = useState('transparent') // set initial background color

  // ** Vars
  const isActive = (path) => path === location.pathname

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

  return (
    <Navbar
      collapseOnSelect
      expand={expanded ? 'false' : 'md'}
      bg={bg}
      variant="dark"
      onToggle={handleToggle}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="text-white">
          {themeConfig.app.appLogoImage}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{ color: 'white' }}>
          <Menu color="white" />
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto gap-md-5">
            {navigations.map((nav, index) => {
              return (
                <NavLink
                  to={nav.path}
                  key={index}
                  className={isActive(nav.path) ? 'nav-link active' : 'nav-link'}
                >
                  {nav.title}
                </NavLink>
              )
            })}
          </Nav>
          <Nav>
            <Button
              variant={expanded ? 'dark' : 'secondary'}
              className="px-5 py-2 rounded-pill shadow-none"
            >
              Sign In
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default CollapsibleExample
