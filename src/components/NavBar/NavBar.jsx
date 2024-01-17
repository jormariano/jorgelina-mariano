import './NavBar.css'
import { Link as ScrollLink } from 'react-scroll'
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
            <ScrollLink to="aboutme"
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}
              className="nav-link">
              <img src={iconAboutme} alt={t('navbar.aboutme')} />
              <h2> {t('navbar.aboutme')} </h2>
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="projects"
              spy={true}
              smooth={true}
              offset={-110}
              duration={500}
              className="nav-link">
              <img src={iconProjects} alt={t('navbar.projects')} />
              <h2> {t('navbar.projects')} </h2>
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="studies"
              spy={true}
              smooth={true}
              offset={-120}
              duration={500}
              className="nav-link">
              <img src={iconStudies} alt={t('navbar.studies')} />
              <h2>{t('navbar.studies')}</h2>
            </ScrollLink></li>
          <li>
            <ScrollLink to="contact"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              className="nav-link">
              <img src={iconContactme} alt={t('navbar.contactme')} />
              <h2> {t('navbar.contactme')}</h2>
            </ScrollLink>
          </li>
        </ul>
      </nav>
      <Languages className="languages" />
    </header>
  )
}

export default NavBar