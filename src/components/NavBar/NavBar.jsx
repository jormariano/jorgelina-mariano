import './NavBar.css'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Languages from '../Languages/Languages'

const NavBar = () => {

  const { t } = useTranslation(['global'])

  const iconAboutme = './icon/navbar-aboutme.svg'
  const iconProjects = './icon/navbar-projects.svg'
  const iconStudies = './icon/navbar-studies.svg'
  const iconContactme = './icon/navbar-contactme.svg'

  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/" className="nav-link">
              <img src={iconAboutme} alt={t('navbar.aboutme')} />
              <h2> {t('navbar.aboutme')} </h2>
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" className="nav-link">
              <img src={iconProjects} alt={t('navbar.projects')} />
              <h2> {t('navbar.projects')} </h2>
            </NavLink>
          </li>
          <li>
            <NavLink to="/studies" className="nav-link">
              <img src={iconStudies} alt={t('navbar.studies')} />
              <h2>{t('navbar.studies')}</h2>
            </NavLink></li>
          <li>
            <NavLink to="/contact" className="nav-link">
              <img src={iconContactme} alt={t('navbar.contactme')}/>
              <h2> {t('navbar.contactme')}</h2>
            </NavLink>
          </li>
        </ul>
      </nav>
      <Languages />
    </header>
  )
}

export default NavBar