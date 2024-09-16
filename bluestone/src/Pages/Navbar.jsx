import React from 'react'
// import '../assets/login.css'
import '../assets/Home.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
   <>
   
   <div>
     
    {/* <!-- Navbar start --> */}
    <div class="navbar">

        <a>10+1 MONTHLY PLAN</a>
        <a> RINGS </a>
       
        <a>EARRINGS</a>
      
        <a>PENDANTS</a>
      
        <a>SOLITARIES</a>
      
        <a><Link  to={'/Product'}>ALL JEWELLERY</Link></a>
       
        <a>GIFTS</a>
      
        <a>COINS</a>

        <a>NEXT DAY DELIVERY</a>
    </div>

   {/* <!-- Navbar end --> */}
  </div>
  </>
  )
}

export default Navbar