import React from 'react'
import Pimg from './ProjectImage.PNG'
import './ProjectItems.css'
export default function ProjectItems(props) {
  return (
    <>
        <div className="ProjectCard">
        <img className = "ProjectImageTag" src={props.Pimage} alt="My Image"/>
        {/* <p className='ProjectName'>Portfolio</p> */}
        </div>
    </>
  )
}
