import './NavBar.css'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Languages from '../Languages/Languages'

const NavBar = () => {

  const { t } = useTranslation(['global'])

  const iconAboutme = './public/icon/navbar-aboutme.svg'
  const iconProjects = './public/icon/navbar-projects.svg'
  const iconStudies = './public/icon/navbar-studies.svg'
  const iconContactme = './public/icon/navbar-contactme.svg'

  return (
    <header>
      <nav>
        <ul>

          <li><NavLink to="/" className="nav-link"> <img src={iconAboutme} /> {t('navbar.aboutme')}</NavLink></li>

          <li><NavLink to="/projects" className="nav-link"> <img src={iconProjects} /> {t('navbar.projects')} </NavLink></li>

          <li><NavLink to="/studies" className="nav-link"> <img src={iconStudies} /> {t('navbar.studies')} </NavLink></li>

          <li><NavLink to="/contact" className="nav-link"> <img src={iconContactme} /> {t('navbar.contactme')} </NavLink></li>
        </ul>
      </nav>

      <Languages />

    </header>
  )
}

// <select className='language' id="languageSelector" onChange={handleChangeLanguage} value={i18n.language}>
// <option className='language-option' value="es">Español</option>
// <option className='language-option' value="en">English</option>
// </select>

export default NavBar