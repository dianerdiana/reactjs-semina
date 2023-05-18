import { NavLink } from 'react-router-dom'

const MenuLink = ({ menu, isActive, expanded, toggleMenu }) => {
  return (
    <>
      {menu.map((nav, index) => {
        return (
          <NavLink
            to={nav.path}
            key={index}
            onClick={expanded ? toggleMenu : ''}
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
