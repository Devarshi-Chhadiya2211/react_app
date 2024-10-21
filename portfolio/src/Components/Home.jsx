import React, { useEffect } from 'react'
import Typed from "typed.js"
import { BsGithub } from "react-icons/bs";
import dev from '../assets/photo/girl.gif'
function Home() {
    useEffect(() => {
        const options = {
          strings: [
            "Full-Stack Web Development", 
            "Backend Development", 
            "Web Designing",
            "Frontend  Development", 
          ],
          typeSpeed: 50,
          backSpeed: 30,
          loop: true,
        };
        
        const typed = new Typed(".typing-text", options);
    
        return () => {
          typed.destroy();
        };
        },[]);
  return (
    <>
        <section class="home" id="home">
    <div class="home-content">
      <h3>Hello, It's Me</h3>
      <h1>Devarshi Chhadiya</h1>
      <h3>And i'm a <span class="typing-text"></span></h3>
      {/* <p>I'm a web Designer with extensive experience for over 3 years. <br/> experties is to create and website design,
        Frontend design, and<br/> many more...</p> */}
      <div class="social-media">
        <a href="https://github.com/Devarshi-Chhadiya2211" target='_blank'><i><BsGithub /></i></a>
        <a href="https://www.linkedin.com/in/devarshi-chhadiya-3834362aa/" target='_blank'><i class='bx bxl-linkedin'></i></a>
      </div>
      <a href="#about" class="btn">More About Me</a>

    </div>

    <div class="home-img">
      <img src={dev}/>
    </div>
  </section>

    </>
  )
}

export default Home
