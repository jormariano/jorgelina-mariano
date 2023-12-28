import './Projects.css'
import { Link } from 'react-router-dom'

const Projects = () => {

  const imgInuyasha = "../../img/project-inuyasha.png"
  const imgExcel = "../../img/project-excel.png"
  const imgMyTools = "../../img/project-mytools.png"
  const imgBookshop = "../../img/project-bookshop.png"
  const imgConstruction = '../../img/project-construction.png'

  return (
    <>
      <div className='project'>
        <Link target="_blank" to='https://inuyasha-fans.netlify.app'> <img className='project-img' src={imgInuyasha} /> </Link>
        <Link target="_blank" to='https://excelarq.netlify.app'> <img className='project-img' src={imgExcel} /> </Link>
        <Link target="_blank" to='https://my-tools-jmariano.netlify.app'> <img className='project-img' src={imgMyTools} /> </Link>
        <Link target="_blank" to='https://mybookshop2023.netlify.app'> <img className='project-img' src={imgBookshop} /> </Link>
        <Link target="_blank" to='*'> <img className='project-img' src={imgConstruction} /> </Link>
        <Link target="_blank" to='*'> <img className='project-img' src={imgConstruction} /> </Link>
      </div>
    </>
  )
}

export default Projects