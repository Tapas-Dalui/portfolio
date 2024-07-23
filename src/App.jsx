import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MoreProjects from './components/MoreProjects'
import MainPage from './components/MainPage'


function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/projects' element={<MoreProjects />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
