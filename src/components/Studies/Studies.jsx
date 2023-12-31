import './Studies.css'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

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

  return (
    <div className='studies-container'>
      <div className='career-container'>
        <h2 className='career-h2'> {t('studies.title')} </h2>
        <div className='career-styles'>
          <div className='career-studies'>
            <h3 className='career-studies-h3'> {t('studies.careerB')} </h3>
            <h4 className='career-studies-h4'> {t('studies.company')} </h4>
            <h4 className='career-studies-h4'> {t('studies.status')} {t('studies.statusI')} </h4>
          </div>
          <div className='career-studies'>
            <h3 className='career-studies-h3'> {t('studies.careerEB')} </h3>
            <h4 className='career-studies-h4'> {t('studies.aba')} </h4>
            <h4 className='career-studies-h4'> {t('studies.status')} {t('studies.statusI')} </h4>
          </div>
          <div className='career-studies'>
            <h3 className='career-studies-h3'> {t('studies.careerF')} </h3>
            <h4 className='career-studies-h4'> {t('studies.company')} </h4>
            <h4 className='career-studies-h4'> {t('studies.status')} {t('studies.statusC')} </h4>
            <Link className='career-studies-link' target="_blank" to='https://www.coderhouse.com/certificados/64ececa954074c4963c57ee0?lang=es'><h3 className='career-link'> {t('studies.certificate')} </h3></Link>
          </div>
          <div className='career-studies'>
            <h3 className='career-studies-h3'> {t('studies.careerEA')} </h3>
            <h4 className='career-studies-h4'> {t('studies.company')} </h4>
            <h4 className='career-studies-h4'> {t('studies.status')} {t('studies.statusC')} </h4>
            <Link className='career-studies-link' target="_blank" to='https://www.coderhouse.com/certificados/654540f9ce060016d195dcf6?lang=es' ><h3 className='career-link'> {t('studies.certificate')} </h3></Link>
          </div>
        </div>
      </div>
      <div className='stacks-container'>
        <h2 className='stacks-h2'> {t('studies.title2')} </h2>
        <div className='stacks-styles'>
          <div className='icon-container'>
            <img className='icon-container-img' src={imgReactjs} alt='Icon React Js' />
            <p className='icon-container-p'>React Js</p>
          </div>
          <div className='icon-container'>
            <img className='icon-container-img' src={imgJavascript} alt='Icon Javascript' />
            <p className='icon-container-p'>JavaScript</p>
          </div>
          <div className='icon-container'>
            <img className='icon-container-img' src={imgFirebase} alt='Icon Firebase' />
            <p className='icon-container-p'>Firebase</p>
          </div>
          <div className='icon-container'>
            <img className='icon-container-img' src={imgNodejs} alt='Icon Node Js' />
            <p className='icon-container-p'>Node Js</p>
          </div>
          <div className='icon-container'>
            <img className='icon-container-img' src={imgGit} alt='Icon Git' />
            <p className='icon-container-p'>Git</p>
          </div>
          <div className='icon-container'>
            <img className='icon-container-img' src={imgGithub} alt='Icon GitHub' />
            <p className='icon-container-p'>GitHub</p>
          </div>
          <div className='icon-container'>
            <img className='icon-container-img' src={imgHtml5} alt='Icon HTML 5' />
            <p className='icon-container-p'>HTML 5</p>
          </div>
          <div className='icon-container'>
            <img className='icon-container-img' src={imgCss3} alt='Icon CSS 3' />
            <p className='icon-container-p'>CSS 3</p>
          </div>
          <div className='icon-container'>
            <img className='icon-container-img' src={imgSass} alt='Icon Sass' />
            <p className='icon-container-p'>Sass</p>
          </div>
          <div className='icon-container'>
            <img className='icon-container-img' src={imgBootstrap} alt='Icon Bootstrap' />
            <p className='icon-container-p'>Bootstrap</p>
          </div>
          <div className='icon-container'>
            <img className='icon-container-img' src={imgCanva} alt='Icon Canva' />
            <p className='icon-container-p'>Canva</p>
          </div>
          <div className='icon-container'>
            <img className='icon-container-img' src={imgOffice} alt='Icon Office' />
            <p className='icon-container-p'>Office</p>
          </div>
        </div>
      </div>
    </div>


  )
}

export default Studies