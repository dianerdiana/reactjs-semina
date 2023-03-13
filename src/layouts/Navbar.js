// ** React Import
import React, { useState } from 'react'

// ** Bootstrap Import
import { Button, Container, Dropdown, Nav, Navbar } from 'react-bootstrap'

// ** Third Party Components
import { NavLink, Link, useLocation } from 'react-router-dom'
import { Menu, Power } from 'react-feather'
import classnames from 'classnames'

// ** Utils
import themeConfig from '../configs/themeConfig'
import { getUserData } from '../utility/utils'
import { navigations } from './utils'
import imgProfile from '../assets/images/profile-default.png'

const MenuLink = ({ menu, isActive }) => {
  return (
    <>
      {menu.map((nav, index) => {
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
    </>
  )
}

const UserAuth = ({ user, expanded, isLoginPage }) => {
  if (isLoginPage) return
  if (user) {
    return (
      <div className="d-flex align-items-center">
        <p className="text-white me-3 mb-0">Hello, {user.fullname}</p>
        <Dropdown>
          <Dropdown.Toggle
            variant="success"
            id="dropdown-user"
            className="rounded-circle border-0 bg-transparent p-0"
            style={{ width: '60px' }}
          >
            <img
              src={imgProfile}
              alt={user.fullname}
              className="rounded-circle img-thumbnail rounded-circle p-0"
              width="60px"
            />
          </Dropdown.Toggle>

          <Dropdown.Menu align="end" variant="dark">
            <Dropdown.Item as={Link} to="/login">
              <Power size={16} className="me-1" /> Logout
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    )
  }

  return (
    <Link
      className={classnames('px-5 py-2 rounded-pill shadow-none btn', {
        'btn-dark': expanded,
        'btn-secondary': !expanded
      })}
      to="/login"
    >
      Sign In
    </Link>
  )
}

const Toggler = () => {}

const NavbarComponent = () => {
  // ** Hooks
  const location = useLocation()
  const user = getUserData()

  // ** Vars
  const isActive = (path) => path === location.pathname

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
          {user ? (
            <>
              <img
                src={imgProfile}
                alt={user.fullname}
                className="rounded-circle img-thumbnail rounded-circle p-0"
                width="60px"
              />
            </>
          ) : (
            <>
              <Menu color="white" />
            </>
          )}
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto gap-md-5">
            <MenuLink menu={navigations} isActive={isActive} />
          </Nav>
          <Nav>
            <UserAuth user={user} expanded={expanded} isLoginPage={isActive('/login')} />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarComponent
