import NavBar from "./components/NavBar/NavBar"
import AboutMe from "./components/AboutMe/AboutMe"
import Projects from "./components/Projects/Projects"
import Studies from "./components/Studies/Studies"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/studies" element={<Studies />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='*' element={<div className='en-construccion'><h2>Este sitio no existe. Vuelve al</h2> <Link to='/'><h2>Inicio</h2></Link></div>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
