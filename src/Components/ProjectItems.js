import React from 'react'
import Pimg from './ProjectImage.PNG'
import './ProjectItems.css'
export default function ProjectItems(props) {
  return (
    <>
        <div className="ProjectCard">
        <img className = "ProjectImageTag" src={props.Pimage} alt="My Image"/>
        {/* <p className='ProjectName'>Portfolio</p> */}
        <div className="ProjDesc">
          <h1>Title</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem, ipsam.</p>
        </div>
        </div>
    </>
  )
}
