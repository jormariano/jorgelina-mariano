import './Projects.css'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from "framer-motion";

const Projects = () => {

  const { t } = useTranslation(['global'])

  const imgInuyasha = "../../img/project-inuyasha.png"
  const imgExcel = "../../img/project-excel.png"
  const imgMyTools = "../../img/project-mytools.png"
  const imgBookshop = "../../img/project-bookshop.png"
  const imgConstruction = '../../img/project-construction.png'

  const imgProjects = [
    { id: 1, link: 'https://inuyasha-fans.netlify.app', imgSrc: imgInuyasha, imgAlt: t('projects.inuyasha') },
    { id: 2, link: 'https://excelarq.netlify.app', imgSrc: imgExcel, imgAlt: t('projects.excel') },
    { id: 3, link: 'https://my-tools-jmariano.netlify.app', imgSrc: imgMyTools, imgAlt: t('projects.mytools') },
    { id: 4, link: 'https://mybookshop2023.netlify.app', imgSrc: imgBookshop, imgAlt: t('projects.bookshop') },
    { id: 5, link: '*', imgSrc: imgConstruction, imgAlt: t('projects.construction') },
    { id: 6, link: '*', imgSrc: imgConstruction, imgAlt: t('projects.construction') },
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
      <div className='project'>
        <AnimatePresence>
          {imgProjects.map((project, index) => (
            <a key={project.id} target="_blank" href={project.link} index={index}>
              <motion.img
                initial="initial"
                animate="animate"
                custom={{ index }}
                whileHover={{ scale: 1.2 }}
                variants={variants}
                src={project.imgSrc}
                alt={project.imgAlt}
                className='project-img'
              />
            </a>
          ))}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Projects