import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import SingleProduct from './Pages/SingleProduct'
import Product from './Pages/Product'
// import Home1 from './Pages/Home1'
// import Login from './Pages/Login'
// import SignUp from './Pages/SignUp'
import Navbar from './Pages/Navbar'
import Header from './Pages/Header'
import Footer from './Pages/Footer'
import Mainroutes from './Pages/Routes/Mainroutes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Navbar/>
    {/* <SignUp/> */}
    {/* <Login/> */}
    
    {/* <Home1/> */}
    {/* <Product/> */}
    <Mainroutes/>
    <Footer/> 
    {/* <SingleProduct/> */}
    
    </>
  )
}

export default App
