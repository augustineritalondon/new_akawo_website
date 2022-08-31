import { useState, useEffect } from 'react'
import { Routes, Route,  } from 'react-router-dom'
import {LandingPage, TC, Partners} from './pages/index'
import AOS from 'aos'
import 'aos/dist/aos.css'

function App() {
  useEffect(()=>{
    AOS.init();
  },[]);
  return (
    <>
      <Routes>
        <Route exact path="/" element={<LandingPage/>}/>
        <Route exact path="/t&c" element={<TC />}/>
        <Route exact path="/partners" element={<Partners />}/>
      </Routes>
    </>
  )
}

export default App
