import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './App2.css'
import './Slider.css'
import NavScrollExample from './Components/Navbar'
import CardExample from './Components/Sec1'
import Sec2 from './Components/Sec2'
import Sec3 from './Components/Sec3'
import Sec4 from './Components/Sec4'
import Sec5 from './Components/Sec5'
import Counter from './Components/Counter'
import Timer from './Components/Timer'
import Footer from './Components/Footer'
import Slider from './Components/Slider'


function App() {
  

  return (
    <>
    <NavScrollExample/><br /> <br />
    <CardExample/><br /><br />
    <Sec2/><br />
    <Sec3/><br /><br />
    <Sec4/><br />
    <Sec5/>
    <Slider/>
    <Timer/><br />
    <Footer/>
   
    </>
  )
}

export default App
