import React from 'react'
import { FaLaptopCode } from "react-icons/fa6";
import { FaCode } from "react-icons/fa6";
// import { FaCode } from "react-icons/fa";
import { LuComputer } from "react-icons/lu";

function Service() {
  return (
    <>
         <div class="services" id="services">
    <h2 class="heading"> My<span> Services</span></h2>
  </div>

  <div class="services-container">


    <div class="services-box">
      <i>
      <FaLaptopCode />
      </i>
      <h3>Web Designing</h3>
      <p>Build client-side features using HTML, CSS, and JavaScript, focusing on layout, design, and responsiveness.</p>
      {/* <a href="#" class="btn">Read More</a> */}
    </div>


    <div class="services-box">
      <i>
      <FaCode />
      </i>
      <h3>Front-end Developer</h3>
      <p>Design and develop visually appealing, interactive, and responsive user interfaces across all platforms.</p>
      {/* <a href="#" class="btn">Read More</a> */}
    </div>


    <div class="services-box">
      <i>
        <LuComputer />
      </i>
      <h3>Back-end Developer</h3>
      <p>Manage server-side logic, databases, and APIs to ensure seamless data flow between the server and users.</p>
      {/* <a href="#" class="btn">Read More</a> */}
    </div>

  </div>
    </>
  )
}

export default Service
