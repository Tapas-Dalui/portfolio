import React from 'react'
import Navbar from './Navbar/Navbar'
import Hero from './Hero/Hero'
import About from './About/About'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'
import Projects from './Projects/Projects'
import Exp from './Exp/Exp'
const MainPage = () => {
  return (
    <>
      <Navbar/>
      <Hero />
      <About />
      <Exp/>
      <Projects/>
      <Contact />
      <Footer />
    </>
  )
}

export default MainPage
