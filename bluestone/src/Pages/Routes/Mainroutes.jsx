import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Home1 from '../Home1'
import Login from '../Login'
import SignUp from '../SignUp'
import Product from '../Product'
import SingleProduct from '../SingleProduct'
import Cart from '../Cart'

const Mainroutes = () => {
  return (
    <>
  
    <Routes>
        <Route path='/' element={<Home1/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/product' element={<Product/>}></Route>
        <Route path='/product/:id' element={<SingleProduct/>}></Route>

        {/* <Route path='*' element={<Pagenotfound/>}></Route> */}
    </Routes>

    
    </>
  )
}

export default Mainroutes