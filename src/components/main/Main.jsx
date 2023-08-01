import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../../pages/About'
import Portfolio from '../../pages/Portfolio'
import Contact from '../../pages/Contact'
import Home from '../../pages/Home'
import PageNot from '../../pages/PageNot'

 function Main() {
  return (
    <main className='main container'>
        <Routes>
          <Route path='/about' element={<About/>}/>
          <Route path='/portfolio' element={<Portfolio/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='*' element={<PageNot to='404' replace/>}/>
        </Routes>
    </main>
  )
}

export default Main