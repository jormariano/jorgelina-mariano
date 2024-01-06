import './Footer.css'
import { motion } from 'framer-motion'
import ScrollToTop from "react-scroll-to-top"

const Footer = () => {

  const imgGitHub = "../../icon/footer-github.png"
  const imgLinkedIn = "../../icon/footer-linkedin.png"

  return (
    <>
      <div className='footer'>
        <ScrollToTop smooth to="20" color="#f03c90" width="20" style={{ right: "25px", width: "30px", height: "30px" }} />
        <div className='footer-socialnetworks'>
          <a href="https://linkedin.com/in/jorgelina-mariano" target="_blank">
            <motion.img
              whileHover={{ scale: 1.3 }}
              src={imgLinkedIn}
              alt="Link to LinkedIn" /></a>
          <a href="https://github.com/jormariano" target="_blank">
            <motion.img
              whileHover={{ scale: 1.3 }}
              src={imgGitHub}
              alt="Link to GitHub" /></a>
        </div>
        <div className='footer-copy-logo'>
          <p className='footer-copyright'> Copyright © 2023 - Jorgelina Mariano</p>
        </div>
      </div>
    </>
  )
}

export default Footer