// ** Utils
import imgProfile from '../../assets/images/profile-default.png'
import { Menu } from 'react-feather'

const NavbarToggle = ({ user }) => {
  if (user) {
    return (
      <img
        src={imgProfile}
        alt={user.fullname}
        className="rounded-circle img-thumbnail rounded-circle p-0"
        width="60px"
      />
    )
  }

  return <Menu color="white" />
}

export default NavbarToggle
