import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import SideBar from './Components/SideBar/SideBar'
import { Route, Routes } from 'react-router-dom'
import Add from './Pages/Add/Add'
import List from './Pages/List/List'
import Order from './Pages/Orders/Order'

const App = () => {
  return (
    <>
        <Navbar/>
        <hr />
        <div className="app-content">
          <SideBar/>
          <Routes>
            <Route path='/add' element={<Add/>}></Route>
            <Route path='/list' element={<List/>}></Route>
            <Route path='/order' element={<Order/>}></Route>
          </Routes>
        </div>
    </>
  )
}

export default App
