// ** Third Party Components
import { Link } from 'react-router-dom'
import { Power } from 'react-feather'
import { Dropdown } from 'react-bootstrap'
import classnames from 'classnames'

// ** Utils
import imgProfile from 'assets/images/avatar/profile-default.png'

const UserAuth = ({ user, expanded, isLoginPage, toggleMenu }) => {
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
              src={user.avatar ? user.avatar : imgProfile}
              alt={user.fullname}
              className="rounded-circle img-thumbnail rounded-circle p-0"
              width="60px"
            />
          </Dropdown.Toggle>

          <Dropdown.Menu align="end" variant="dark">
            <Dropdown.Item as={Link} to="/login" onClick={expanded ? toggleMenu : ''}>
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
      onClick={expanded ? toggleMenu : ''}
    >
      Sign In
    </Link>
  )
}

export default UserAuth
