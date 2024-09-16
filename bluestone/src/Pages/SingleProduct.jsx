import React, { useEffect, useState } from 'react'
import '../assets/singlepro.css'
import '../assets/Home.css'
import { useNavigate, useParams } from 'react-router-dom'

function SingleProduct() {
    const navigate=useNavigate()
    const obj = useParams()
    // console.log(obj)
  const [data,setData] = useState(null)
  useEffect(()=>{
     fetch(`https://mock-server-app-3ssy.onrender.com/product?id=${obj.id}`)
     .then((Res)=>Res.json())
     .then((res)=>{
        setData(res[0]);
      console.log(res);
     })
     .catch((err)=>{
       console.log(err)
     })
  },[])
//   console.log(data)

  const  handleclick =()=>{
    // console.log("dabay che")
    fetch(`https://mock-server-app-3ssy.onrender.com/cart`,{
        method:'POST',
        headers:{
            'Content-type':'Application/JSON'
        },
        body: JSON.stringify(data)
    })
     .then((Res)=>Res.json())
     .then((res)=>{
      console.log(res);
      
     })
     .catch((err)=>{
       console.log(err)
     })

navigate('/cart')
  }

    return (
       <>
        
        <div>
        <div>
            <div id='box1'>
                <p>HOME / JEWELLERY / RINGS / ALL JEWELLERY</p>
                <div id='box2'>
                    <div>
                        <div>
                            {/* <img  src={data.image}/> */}
                            {data && <img src={data.image} width='550px' height="550px" alt="" />}
                        </div>
                      
                        <div id='box4'>
                            <div><p>CERTIFIED BY</p></div>
                            <div><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHQ4KngqSCWe9uQgJzjHmSzNEb1uKISJ9OBw&usqp=CAU' alt='certified' width='70px;'/></div>
                            <div>
                                <img src='https://instoremag.com/wp-content/uploads/2019/05/IS-Online-SGL-Logo-300x118.png' width='62px;' alt='logo'/>
                            </div>
                           
                        </div>
                    </div>
                    <div id="secondDiv">
                        <div>
                            <h1>The Ananya Ring</h1>
                            <p class="tooltipI">From <a>Sabbia Collection</a>
                                <span class="tooltiptext">Wind shaped dunes of the dessert defined in its magnificence
                                    <br/><br/>
                                    <a>Explore next</a>
                                </span>
                            </p>
                        </div>
                        <div>
                            <span class='webrupee'>Rs.</span><span id='web_rup'><strike>55,366</strike></span>
                        </div>
                        <div>
                            <span class='webrupee web_rup1'>Rs.<span class='web_rup1'>50,566</span></span>
                        </div>
                        <p>MRP Inc. of all taxes</p>
                        <div id='inner'>
                            <i class="fa-thin fa-house-circle-check"></i>
                            <p>Schedule your free trial</p>
                            <p><a id='trial' href='#'>Try at a Home</a></p>
                        </div>
                        <div id="address_details">
                            <div id="pincode_sec">
                                <p>Your pincode</p>
                                <p>700712</p>
                                <p>Update</p>
                            </div>
                            <div id="address">
                                <p> Available in our store at <b>VIP Road, Kolkata</b> and 4 other store(s)
                                <a>View all designs in stores near you</a></p>
                            </div>
                            <div><p>Delivery By <b>Tomorrow (30th Mar)</b> for <b>Pincode 700131</b></p></div>
                        </div>
                        <div class='diamond1'>
                            <p>Diamond Ring In 18Kt Yellow Gold (6.12 gram) with Diamonds <br /><br /> (0.1900 Ct)</p>
                        </div>
                        <div class="shows">
                            <div class="diamond12 ">
                                <div><p>Customize this product</p></div> 
                                <div><i class="fas fa-add"></i></div>
                            </div>
                           
                        </div>
                        <div id="hiding">
                            <div  class='diamond12'>
                                <div><p>Hide the customize</p></div>
                                <div><i class="fas fa-minus"></i></div>
                            </div>
                            <div class="styling">
                                <select>
                                    <option value="white">Yellow</option>
                                    <option value="yellow">White</option>
                                </select>
                                <div class="radioBox">
                                    <input type="radio" value="14kt"/>14Kt
                                    <input type="radio" value="15kt"/>15Kt
                                </div>
                            </div>
                            <div class="radioBox sec">
                                <label>Diamond:  
                                    <input type="radio" value="Sl lj"/>Sl lj
                                    <input type="radio" value="Sl GH"/>Sl GH
                                    <input type="radio" value="VS GH"/>VS GH
                                    <input type="radio" value="VVS EF"/>VVS EF
                                </label>
                            </div>
                        </div>
                        <div id="ringSIze">
                            <p >Ring Size</p>
                            <div>
                                <select class="radioBox third">
                                    <option>Sat Apr6</option>
                                    <option>Sat Apr6</option>
                                    <option>Sat Apr6</option>
                                    <option>Sat Apr6</option>
                                </select>
                                
                            </div>
                            <p id='sureRing'><a>Not sure about the ring size</a></p>
                        </div>
                        <div id="submission">
                            <div>
                                <input  id="buyNow" type="submit" value="Buy Now" onClick={handleclick}/>
                            </div>
                            <div>
                                <a id='monthlyPlan' href="">10+1 monthly plan</a>
                            </div>
                        </div>
                        <div id="offers">
                            <div><p><i class="fa-solid fa-right-from-bracket"></i> 30-Day Money Back</p></div>
                            <div><p><i class="fa-solid fa-life-ring"></i> Lifetime Exchange & Buy-Back</p></div>
                            <div><p><i class="fa-solid fa-certificate"></i> Certified Jewellery</p></div>
                        </div>
                        <div id="help">
                            <p>Please feel free to reach us at: 1800-419-0066</p>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
        </div>



         </>
         )
         }


export default SingleProduct