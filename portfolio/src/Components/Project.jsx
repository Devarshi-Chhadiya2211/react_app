import React from 'react'
import pro1 from '../assets/photo/pro1.png'
import pro2 from '../assets/photo/pro2.png'
import pro3 from '../assets/photo/pro3.png'
import { BsGithub } from "react-icons/bs";
import { FaLink } from "react-icons/fa6";

function Project() {
  return (
   <>
    <section class="portfolio" id="portfolio">
    <h2 class="heading">Latest <span>Project</span></h2>
    <div class="portfolio-container">
      <div class="portfolio-box">
        <img src={pro1} alt=""/>
        <div class="portfolio-layer"><br />
          <h4>Bluestone clone</h4>
          <p>React | HTML | CSS | Java-script | bootstrap | Responsive</p>
          <div className="links">
          <a href="#"><i><FaLink /></i></a>
          <a href="#"><i><BsGithub /></i></a>
          </div>
          </div>
      </div>


      <div class="portfolio-box">
        <img src={pro2} alt=""/>
        <div class="portfolio-layer"><br />
          <h4>Tanishq clone</h4>
          <p> HTML | CSS | Java-script | bootstrap | Responsive</p>
          <div className="links">
          <a href="#"><i><FaLink /></i></a>
          <a href="#"><i><BsGithub /></i></a>
          </div>
        </div>
      </div>


      <div class="portfolio-box">
        <img src={pro3} alt=""/>
        <div class="portfolio-layer"><br />
          <h4>Malabar clone</h4>
          <p> HTML | CSS | jQuery | Bootstrap | Responsive</p>
          <div className="links">
          <a href="#"><i><FaLink /></i></a>
          <a href="#"><i><BsGithub /></i></a>
          </div>
        </div>
      </div>



    </div>
  </section>

   </>
  )
}

export default Project
