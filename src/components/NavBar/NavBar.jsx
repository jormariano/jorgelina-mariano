import './NavBar.css'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const NavBar = () => {

  const { t, i18n } = useTranslation(['global'])

  const handleChangeLanguage = (event) => {
    const selectedLanguage = event.target.value
    i18n.changeLanguage(selectedLanguage)
  }

  return (
    <header>
      <nav className='nav-bar'>
        <ul className='un-list'>

          <li><NavLink to="/" className="nav-link">{t('navbar.aboutme')}</NavLink></li>

          <li><NavLink to="/projects" className="nav-link"> {t('navbar.projects')} </NavLink></li>

          <li><NavLink to="/studies" className="nav-link"> {t('navbar.studies')} </NavLink></li>

          <li><NavLink to="/contact" className="nav-link"> {t('navbar.contactme')} </NavLink></li>
        </ul>
        <select id="languageSelector" onChange={handleChangeLanguage} value={i18n.language}>
          <option value="es">Español</option>
          <option value="en">English</option>
        </select>
      </nav>
    </header>
  )
}

export default NavBar