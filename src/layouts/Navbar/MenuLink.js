import { NavLink } from 'react-router-dom'

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

export default MenuLink
