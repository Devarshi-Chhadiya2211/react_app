import React from 'react'
import '../assets/Home.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
      <div id="top">
        <div id="top-logo">
        <a>
        <img id="logo" src="https://kinclimg5.bluestone.com/f_webp/static/resources/themes/bluestone/images/new/bs-logo-2x.png" alt="logo" />
        </a>
        </div>
        <div id="search">
            <input id="field" type="text" placeholder="Search for Jewellery" />
            <button id="butn"><i class="fa-solid fa-magnifying-glass"></i></button>
        </div>
        <div id="top-corner">
            <div id="LS">
                <ul>
                    <li>1800-419-0066</li>

                    <li><a>Try At Home</a></li>
                    <li><Link  to={'/Login'}>Login</Link></li>
                    <li><Link to={'/SignUp'}>Signup</Link> </li>
                   
                 

                   
                  

                </ul>
            </div>
            <div id="icons">
                  <ul> <a>
                    <li><i class="fa-regular fa-clock"></i></li>
                    <li>Recently <br/> Viewed</li>
                   </a>
                  </ul>
        
                  <ul> <a>
                      <li><i class="fa-solid fa-shop"></i></li>
                      <li>Local <br/>Store</li>
                    </a>
                  </ul>
        
                  <ul> <a>
                      <li><i class="fa-regular fa-heart"></i></li>
                  </a>
                  </ul>
                  <ul> <a>
                    <li><i class="fa-solid fa-cart-arrow-down"></i></li>
                  </a>
                  </ul>
               
            </div>
            </div>
    </div>

    </>
  )
}

export default Header