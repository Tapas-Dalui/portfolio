import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Experiences from './components/Experiences/Experiences'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Projects from './components/Projects/Projects'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Experiences />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
