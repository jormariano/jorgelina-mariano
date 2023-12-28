import './Studies.css'
import { Link } from 'react-router-dom'

const Studies = () => {

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
      <div>
        <h2> FORMATION </h2>
        <div>
          <p> Carrera Desarrollo Backend </p>
          <h3> Coderhouse </h3>
          <h3> In progress </h3>
        </div>
        <div>
          <p> Carrera Desarrollo Frontend </p>
          <h3> Coderhouse </h3>
          <Link target="_blank" to='https://www.coderhouse.com/certificados/64ececa954074c4963c57ee0?lang=es'><h3> View Certificate </h3></Link>
        </div>
        <div>
          <p> English elementary </p>
          <h3> Coderhouse </h3>
          <Link target="_blank" to='https://www.coderhouse.com/certificados/654540f9ce060016d195dcf6?lang=es' ><h3> View Certificate </h3></Link>
        </div>
      </div>
      <div>
        <h2> MY STACKS </h2>
        <div className='stacks-container'>
          <div className='icon-container'>
            <img src={imgReactjs} alt='Icon React Js' />
            <p>React Js</p>
          </div>
          <div className='icon-container'>
            <img src={imgJavascript} alt='Icon Javascript' />
            <p>JavaScript</p>
          </div>
          <div className='icon-container'>
            <img src={imgFirebase} alt='Icon Firebase' />
            <p>Firebase</p>
          </div>
          <div className='icon-container'>
            <img src={imgGit} alt='Icon Git' />
            <p>Git</p>
          </div>
          <div className='icon-container'>
            <img src={imgGithub} alt='Icon GitHub' />
            <p>GitHub</p>
          </div>
          <div className='icon-container'>
            <img src={imgHtml5} alt='Icon HTML 5' />
            <p>HTML 5</p>
          </div>
          <div className='icon-container'>
            <img src={imgCss3} alt='Icon CSS 3' />
            <p>CSS 3</p>
          </div>
          <div className='icon-container'>
            <img src={imgBootstrap} alt='Icon Bootstrap' />
            <p>Bootstrap</p>
          </div>
          <div className='icon-container'>
            <img src={imgCanva} alt='Icon Canva' />
            <p>Canva</p>
          </div>
          <div className='icon-container'>
            <img src={imgSass} alt='Icon Sass' />
            <p>Sass</p>
          </div>
          <div className='icon-container'>
            <img src={imgNodejs} alt='Icon Node Js' />
            <p>Node Js</p>
          </div>
          <div className='icon-container'>
            <img src={imgOffice} alt='Icon Office' />
            <p>Office</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Studies