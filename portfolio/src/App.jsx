import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Home from './Components/Home'
import About from './Components/About'
import Service from './Components/Service'
import Techstack from './Components/Techstack'
import Project from './Components/Project'
import Git from './Components/Git'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

function App() {

  return (
    <>
      <Header/>
      <Home/>
      <About/>
      <Service/>
      <Techstack/>
      <Project/>
      <Git/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
