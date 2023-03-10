import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { NavLink, useLocation } from 'react-router-dom'

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

function NavbarComponent() {
  const location = useLocation()
  const isActive = (path) => path === location.pathname
  console.log(navigations.map((nav) => isActive(nav.path)))

  return (
    <Navbar bg="transparent" expand="md">
      <Container>
        <Navbar.Brand href="#" className="me-auto text-white">
          セミナー
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar" />
        <Navbar.Collapse id="navbar">
          <Nav className="mx-auto my-2 my-md-0 gap-5" style={{ maxHeight: '100px' }}>
            {navigations.map((nav, index) => {
              return (
                <NavLink key={index} to={nav.path} className="nav-link">{nav.title}</NavLink>
              )
            })}
          </Nav>
          <Nav>
            <Button variant="secondary" size="sm" className="rounded-pill px-5 py-2">
              Sign In
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarComponent
