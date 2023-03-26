import React from 'react'
import img3 from "./TempImg.png"
import './About.css'
export default function About() {
  return (
    <>
        <div className="AboutContainer">
            <div className="MyAboutImageContainer">
                <img className = "MyAboutImage" src={img3} alt="" />
            </div>
            <div className="AboutContaint">
                <h1>About <span> Me</span></h1>
                <h2>Front-End Developer</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis sint vero repudiandae! Quaerat atque ea facilis in, quam tenetur aliquam adipisci debitis vitae fuga esse reprehenderit recusandae cumque? Perspiciatis cum veritatis libero vero incidunt?</p>
                <button className='AboutButton'>READ MORE</button>
            </div>
        </div>
    </>
  )
}
