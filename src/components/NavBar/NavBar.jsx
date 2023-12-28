import './NavBar.css'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <header>
      <nav className='nav-bar'>
        <ul className='un-list'>

          <li><NavLink to="/" className="nav-link">ABOUT ME</NavLink></li>

          <li><NavLink to="/projects" className="nav-link"> PROJECTS </NavLink></li>

          <li><NavLink to="/studies" className="nav-link"> STUDIES </NavLink></li>

          <li><NavLink to="/contact" className="nav-link"> CONTACT </NavLink></li>
        </ul>
        <button>Spanish</button>
      </nav>
    </header>
  )
}

export default NavBar