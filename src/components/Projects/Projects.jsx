import './Projects.css'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from "framer-motion";

const Projects = () => {

  const { t } = useTranslation(['global'])

  const imgInuyasha = "../../img/project-inuyasha.png"
  const imgExcel = "../../img/project-excelarq.png"
  const imgMyTools = "../../img/project-mytools.png"
  const imgBookshop = "../../img/project-bookshop.png"
  const imgLandscapes = "../../img/project-landscapes.png"
  const imgConstruction = '../../img/project-inconstruction.png'
  const imgGitHub = "../../icon/footer-github.png"

  const imgProjects = [
    { id: 1, link: 'https://inuyasha-fans.netlify.app', imgSrc: imgInuyasha, imgAlt: t('projects.inuyasha'), project: 'Inuyasha', githubLink: 'https://github.com/jormariano/FanPage-Inuyasha' },
    { id: 2, link: 'https://excelarq.netlify.app', imgSrc: imgExcel, imgAlt: t('projects.excel'), project: 'Excel.Arq', githubLink: 'https://github.com/jormariano/excel.arq' },
    { id: 3, link: 'https://my-tools-jmariano.netlify.app', imgSrc: imgMyTools, imgAlt: t('projects.mytools'), project: 'My Tools', githubLink: 'https://github.com/jormariano/My-Tools' },
    { id: 4, link: 'https://mybookshop2023.netlify.app', imgSrc: imgBookshop, imgAlt: t('projects.bookshop'), project: 'Bookshop', githubLink: 'https://github.com/jormariano/book-shop' },
    { id: 5, link: 'https://landscapesphotos.netlify.app', imgSrc: imgLandscapes, imgAlt: t('projects.construction'), project: 'Landscapes', githubLink: 'https://github.com/jormariano/landscapes' },
    { id: 6, link: '*', imgSrc: imgConstruction, imgAlt: t('projects.construction'), project: 'In construction' },
  ];

  const variants = {
    initial: {
      opacity: 0, scale: 0
    },
    animate: ({ index }) => ({
      opacity: 1, scale: 1, transition: {
        duration: 0.5,
        delay: index * 1
      }
    })
  }

  return (
    <section id='projects' className='projects-container'>
      <h3 className='projects-title'> {t('projects.title')} </h3>
      <div className='projects'>
        <AnimatePresence>
          {imgProjects.map((project, index) => (
            <a key={project.id} target="_blank" href={project.link} index={index}>
              <motion.img
                initial="initial"
                animate="animate"
                custom={{ index }}
                variants={variants}
                src={project.imgSrc}
                alt={project.imgAlt}
                className='projects-img'
              />
              <div className='projects-name'>
                <h2> {project.project} </h2>
                {project.githubLink && <a href={project.githubLink} target="_blank"><img src={imgGitHub} alt="GitHub" /></a>}
              </div>
            </a>
          ))}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Projects