import React from 'react'
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import User from './pages/User'

export default function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/user' element={<User/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </BrowserRouter>
  )
}
