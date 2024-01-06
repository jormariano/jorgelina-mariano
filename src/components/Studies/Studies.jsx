import './Studies.css'
import { useTranslation } from 'react-i18next'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const Studies = () => {

  const { t } = useTranslation(['global'])

  const imgSass = './icon/icon-sass.png'
  const imgBootstrap = './icon/icon-bootstrap.png'
  const imgCanva = './icon/icon-canva.png'
  const imgNodejs = './icon/icon-nodejs.png'
  const imgGit = './icon/icon-git.png'
  const imgGithub = './icon/icon-github.png'
  const imgHtml5 = './icon/icon-html5.png'
  const imgCss3 = './icon/icon-css3.png'
  const imgFirebase = './icon/icon-firebase.png'
  const imgJavascript = './icon/icon-javascript.png'
  const imgReactjs = './icon/icon-reactjs.png'
  const imgOffice = './icon/icon-office.png'

  const ref = useRef(null)
  const userView = useInView(ref, {
    once: true
  })

  return (
    <section id='studies'>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 100, }}
        animate={userView ? { opacity: 1, y: 0, transition: { duration: 2 } } : ""}
        className='studies-container'>
        <div className='career-container'>
          <h2 className='career-h2'> {t('studies.title')} </h2>
          <div className='career-styles'>
            <div className='career-studies'>
              <h3 className='career-studies-h3'> {t('studies.careerB')} </h3>
              <h4 className='career-studies-h4'> {t('studies.company')} </h4>
              <h5 className='career-studies-h5'> {t('studies.statusI')} </h5>
            </div>
            <div className='career-studies'>
              <h3 className='career-studies-h3'> {t('studies.careerEB')} </h3>
              <h4 className='career-studies-h4'> {t('studies.aba')} </h4>
              <h5 className='career-studies-h5'> {t('studies.statusI')} </h5>
            </div>
            <div className='career-studies'>
              <h3 className='career-studies-h3'> {t('studies.careerF')} </h3>
              <h4 className='career-studies-h4'> {t('studies.company')} </h4>
              <a className='career-studies-link' target="_blank" href='https://www.coderhouse.com/certificados/64ececa954074c4963c57ee0?lang=es'><h3 className='career-link'> {t('studies.certificate')} </h3></a>
            </div>
            <div className='career-studies'>
              <h3 className='career-studies-h3'> {t('studies.careerEA')} </h3>
              <h4 className='career-studies-h4'> {t('studies.company')} </h4>
              <a className='career-studies-link' target="_blank" href='https://www.coderhouse.com/certificados/654540f9ce060016d195dcf6?lang=es' ><h3 className='career-link'> {t('studies.certificate')} </h3></a>
            </div>
          </div>
        </div>
        <div className='stacks-container'>
          <h2 className='stacks-h2'> {t('studies.title2')} </h2>
          <div className='stacks-styles'>
            <div className='icon-container'>
              <img className='icon-container-img' src={imgReactjs} alt={`${t('studies.icon')} React Js`} />
              <p className='icon-container-p'>React Js</p>
            </div>
            <div className='icon-container'>
              <img className='icon-container-img' src={imgJavascript} alt={`${t('studies.icon')} Javascript`} />
              <p className='icon-container-p'>JavaScript</p>
            </div>
            <div className='icon-container'>
              <img className='icon-container-img' src={imgFirebase} alt={`${t('studies.icon')} Firebase`} />
              <p className='icon-container-p'>Firebase</p>
            </div>
            <div className='icon-container'>
              <img className='icon-container-img' src={imgNodejs} alt={`${t('studies.icon')} Node Js`} />
              <p className='icon-container-p'>Node Js</p>
            </div>
            <div className='icon-container'>
              <img className='icon-container-img' src={imgGit} alt={`${t('studies.icon')} Git`} />
              <p className='icon-container-p'>Git</p>
            </div>
            <div className='icon-container'>
              <img className='icon-container-img' src={imgGithub} alt={`${t('studies.icon')} GitHub`} />
              <p className='icon-container-p'>GitHub</p>
            </div>
            <div className='icon-container'>
              <img className='icon-container-img' src={imgHtml5} alt={`${t('studies.icon')} HTML 5`} />
              <p className='icon-container-p'>HTML 5</p>
            </div>
            <div className='icon-container'>
              <img className='icon-container-img' src={imgCss3} alt={`${t('studies.icon')} CSS 3`} />
              <p className='icon-container-p'>CSS 3</p>
            </div>
            <div className='icon-container'>
              <img className='icon-container-img' src={imgSass} alt={`${t('studies.icon')} Sass`} />
              <p className='icon-container-p'>Sass</p>
            </div>
            <div className='icon-container'>
              <img className='icon-container-img' src={imgBootstrap} alt={`${t('studies.icon')} Bootstrap`} />
              <p className='icon-container-p'>Bootstrap</p>
            </div>
            <div className='icon-container'>
              <img className='icon-container-img' src={imgCanva} alt={`${t('studies.icon')} Canva`} />
              <p className='icon-container-p'>Canva</p>
            </div>
            <div className='icon-container'>
              <img className='icon-container-img' src={imgOffice} alt={`${t('studies.icon')} Office`} />
              <p className='icon-container-p'>Office</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Studies