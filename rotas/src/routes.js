import React from 'react'
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import User from './pages/User'

export default function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/user' element={<User/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/signin' element={<SignIn/>}/>
      </Routes>
    </BrowserRouter>
  )
}
