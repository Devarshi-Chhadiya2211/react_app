import React, { useState } from 'react'
import '../assets/product.css'
import '../assets/Home.css'
// import { useDispatch, useSelector } from 'react-redux'
// import { FetchData } from './Redux/Productpage/action'
import { Link } from 'react-router-dom'


function Product() {
    const [data,setdata]=useState([])
    fetch(`https://mock-server-app-3ssy.onrender.com/product`)
    .then((res)=>res.json())
    .then((res)=>{
        setdata(res)
    })
    .catch((err)=>{
    })

    let FilteredData = data
    const [filterData,setFilter] = useState()
    const [sortData,setSort] = useState("")
    
    if(sortData){
      FilteredData = FilteredData.sort((a,b)=>{
         if(sortData == "asc"){
           return a.price - b.price
         }else if(sortData == "dec"){
          return b.price - a.price
        }else if(sortData == "Aasc"){
            return a.image.localeCompare(b.title)
         }else if(sortData == "Ddesc"){
          return b.image.localeCompare(a.title)
       }
      })
      
   }
  return (
    <>
      

  <div id="container">
    <div>
      <img src="https://kinclimg1.bluestone.com/f_webp/static/resources/themes/bluestone/images/sales/mar2022/dbp-banner.v2.jpg" alt=""/>
      <div id="rings-common">
           <h2>JEWELLERY</h2>
           <div></div>
           <div><p>2525 DESIGNS</p></div>
       </div>
       <hr/>
      <div id="opt-filter">
          <div>
            <p>FILTER BY</p>
            <div class="dropdown">
               <button class="dropbtn">PRICE <span><i class="fa-solid fa-angle-down"></i></span></button>
               <div class="dropdown-content">
                      <a>below 10,000</a>
                      <a>10,000 - 20,000 </a>
                      <a>20,000 - 30,000</a>
                      <a>30,000 - 40,000</a>
                      <a>40,000 - 50,000</a>
               </div>
            </div>
            
            <div class="dropdown">
               <button class="dropbtn">METAL <span><i class="fa-solid fa-angle-down"></i></span></button>
               <div class="dropdown-content">
                      <a>Gold (1855)</a>
                      <a>Plain Gold/Platinum (293)</a>
                      <a>White Gold (200)</a>
                      <a>Rose Gold (191)</a>
                      <a>Platinum (79)</a>
               </div>
            </div>
                
            <div class="dropdown">
                <button class="dropbtn">GOLD PURITY <span><i class="fa-solid fa-angle-down"></i></span></button>
                <div class="dropdown-content">
                       <a>18k (2029)</a>
                       <a>22k (217)</a>
                </div>
            </div>
                
            <div class="dropdown">
                <button class="dropbtn">GENDER <span><i class="fa-solid fa-angle-down"></i></span></button>
                <div class="dropdown-content">
                       <a>Women (2016)</a>
                       <a>Men (307)</a>
                       <a>Unisex (2)</a>
                </div>
            </div>
               
            <div  class="dropdown">
                <button class="dropbtn">OFFERS <span><i class="fa-solid fa-angle-down"></i></span></button>
                <div class="dropdown-content">
                       <a>10% Making Charge Off (486)</a>
                       <a>20% Making Charge Off (87)</a>
                       <a>30% Making Charge Off (48)</a>
                       <a>Upto 20% Off (1679)</a>
                 </div>
            </div>
                
            <div class="dropdown">
                <button class="dropbtn">DELIVERY TIME <span><i class="fa-solid fa-angle-down"></i></span></button>
                <div class="dropdown-content">
                       <a>Next Day Delivery (157)</a>
                </div>
            </div>
               
          </div> 
          <div id="sortby">
            <p>SORT BY</p>
            <div class="dropdown" >
                {/* <button id="popular">POPULAR <span><i class="fa-solid fa-angle-down"></i></span></button> */}
                <select name="" id="popular" onChange={(e)=>setSort(e.target.value)}>
            <option value="">Sort the data</option>
            <option value="Aasc"> A TO Z</option>
            <option value="Ddesc">Z To A</option>
            <option value="asc">Low to High</option>
            <option value="dec">High to Low</option>
         </select>
            </div>

          </div>
       </div>
       <div id ="filterblock">
        <div>FILTERED BY</div>
        <div><a>Jewellery<i class="fa-solid fa-xmark"></i></a></div>
       </div>
    </div>
    <div id="id1">
                  {data.map((el) => {
                    return( <div class="box">
    <div class="Headdiv">{el.head}</div>
    <Link  to={`/product/${el.id}`}><img src={el.image} class="image"/></Link>
    <div class="buttons">
        <button>TRY AT HOME FOR FREE</button>
        <button class="btn2">VIEW DETAILS &gt;&gt;</button>
        </div>
        <div class="bigDiv">
            <div class="priceDiv">
                <p class="ringPrice">₹{el.price}</p>
                <p class="strk">₹{el.strikedoffprice}</p>
                </div>
                <div class="priceDiv">
                    <p class="P">Save</p>
    <p class="saved">{el.saveprice}</p>
    </div>
    </div>
        </div>

)
})} 
       <div id="model">
           <div id="modeltopdiv">
               <div>
                 <h2>TRY THIS DESIGN AT HOME/OFFICE <span>&#9733</span></h2>
                 <button class="closebtn">&times;</button>
               </div>
       
               <div><div></div>Completely Free. Buy only if you like!<div></div></div>
             </div>
           <div id="bottomdiv">
              <div id="bottomleft">
                 <h2>How it Works?</h2>
                 <div id="sidediv1">
                   <div><span><i class="fa-solid fa-calendar-check"></i></span></div>
                   <div></div> 
                   <p>Schedule at your convenience<br/>(Monday to Sunday, Any time, Home/Office)</p>
                 </div>
                 <div id="sidediv2">
                   <div><span><i class="fa-solid fa-house-chimney"></i></span></div>
                   <p>Add as many designs as you like</p>
                  </div>
                  <div id="sidediv3">
                   <div><span><i class="fa-solid fa-people-carry-box"></i></span></div> 
                   <p>Our Jewellery consultant will <br/>bring the designs for trial</p>
                   </div>
               </div>
               <div id="bottomright">
                   <h2>Schedule your free trial</h2>
                   <div><input id="mobile" type="number" placeholder="Mobile number" value=""/></div>
                   <div><input id="email" type="email" placeholder="Email address" value=""/></div>
                   <button id="bttns">SCHEDULE</button>
               </div>    
           </div>
           <div id="low">* We do in-person meetings at the<a>following cities</a>.For other locations, we offer video meetings.</div>
       </div>
       
       
    </div>
    <div id="middlebox">
      <div id="bluebox">
        <div id="centerdata">
         <div>Our store is now in New Delhi</div>
         <div>Lajpat Nagar, New Delhi</div>
         <div><a>Get Direction</a></div>
        </div> 
      </div>
      <div id="imgbox">
        <img src="https://kinclimg1.bluestone.com/f_webp/static/resources/themes/bluestone/images/new/store-browse.jpg" alt="img"/>
      </div>
    </div>
    <div id="id3">
       <div id="model">
           <div id="modeltopdiv">
               <div>
                 <h2>TRY THIS DESIGN AT HOME/OFFICE <span>&#9733</span></h2>
                 <button class="closebtn">&times;</button>
               </div>
       
               <div><div></div>Completely Free. Buy only if you like!<div></div></div>
             </div>
           <div id="bottomdiv">
              <div id="bottomleft">
                 <h2>How it Works?</h2>
                 <div id="sidediv1">
                   <div><span><i class="fa-solid fa-calendar-check"></i></span></div>
                   <div></div> 
                   <p>Schedule at your convenience<br/>(Monday to Sunday, Any time, Home/Office)</p>
                 </div>
                 <div id="sidediv2">
                   <div><span><i class="fa-solid fa-house-chimney"></i></span></div>
                   <p>Add as many designs as you like</p>
                  </div>
                  <div id="sidediv3">
                   <div><span><i class="fa-solid fa-people-carry-box"></i></span></div> 
                   <p>Our Jewellery consultant will <br/>bring the designs for trial</p>
                   </div>
               </div>
               <div id="bottomright">
                   <h2>Schedule your free trial</h2>
                   <div><input id="mobile" type="number" placeholder="Mobile number" value=""/></div>
                   <div><input id="email" type="email" placeholder="Email address" value=""/></div>
                   <button id="bttns">SCHEDULE</button>
               </div>    
           </div>
           <div id="low">* We do in-person meetings at the<a>following cities</a>.For other locations, we offer video meetings.</div>
       </div>
       
       
    </div>
  </div>
 
    </>
  )
}

export default Product