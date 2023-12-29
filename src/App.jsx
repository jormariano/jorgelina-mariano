import './App.css'
import NavBar from "./components/NavBar/NavBar"
import AboutMe from "./components/AboutMe/AboutMe"
import Projects from "./components/Projects/Projects"
import Studies from "./components/Studies/Studies"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import { useTranslation } from "react-i18next"

const App = () => {

  const { t } = useTranslation(['global'])

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/studies" element={<Studies />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='*' element={<div className='not-found'><h2>{t('app.notfound')}</h2> <Link className='not-found-link' to='/'><h2>{t('navbar.aboutme')}</h2></Link></div>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
