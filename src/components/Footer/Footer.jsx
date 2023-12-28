import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {

    const imgGitHub = "../../icon/footer-github.png"
    const imgLinkedIn = "../../icon/footer-linkedin.png"
    
  return (
    <>
    <div className='footer'>
      <div className='footer-socialnetworks'>
        <a href="https://linkedin.com/in/jorgelina-mariano" target="_blank"><img src={imgLinkedIn}
          alt="Enlace a LinkedIn" /></a>
        <a href="https://github.com/jormariano" target="_blank"><img src={imgGitHub}
          alt="Enlace a GitHub" /></a>
      </div>
      <div className='footer-copy-logo'>
        <p className='footer-copyright'> Copyright © 2023 - Jorgelina Mariano</p>
      </div>
    </div>
  </>
  )
}

export default Footer