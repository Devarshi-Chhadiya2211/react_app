import React from 'react'
import devli from '../assets/photo/devli.jpg'
import Resume from "../assets/Devarshi Resume.pdf"

function About() {

  const downloadResume = async () => {
    window.open(Resume, '_blank');
    const link = document.createElement('a');
    link.href = Resume;
    link.download = 'Devarshi Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    }

  return (
    <>
         <section class="about" id="about">
    <div class="about-img">
      <img src={devli} alt=""/>
    </div>

    <div class="about-content">
      <h2 class="heading">About <span> Me</span></h2>
      <h3>Full Stack Web Developer</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo incidunt quod similique numquam earum, sit
        totam perspiciatis quasi esse pariatur necessitatibus ad iusto et inventore dolor officia consectetur voluptatum
        doloremque quia debitis nemo tenetur! Autem dolorem vero illum libero harum enim ea. Quos, dolorem eligendi!
        Ipsum?</p>

        <button className='btn' onClick={downloadResume}>Download CV</button>
      {/* <a onClick={downloadResume} class="btn">Download CV</a> */}
    </div>
  </section>

    </>
  )
}

export default About
