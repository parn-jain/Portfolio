import React from 'react'
import ProjectItems from './ProjectItems'
import Pimg from './ProjectImage.PNG'
import './Projects.css'
export default function Projects() {
  return (
    <>
    <div id="projects">

        <div className="ProjectContainer">
            <h1 className='MyProject'>My Projects</h1>
            <div className="ProjectList">
          <ProjectItems Pimage = {Pimg}/>
          <ProjectItems Pimage = {Pimg}/>
          <ProjectItems Pimage = {Pimg}/>
          <ProjectItems Pimage = {Pimg}/>
          <ProjectItems Pimage = {Pimg}/>
          <ProjectItems Pimage = {Pimg}/>
        </div>
        </div>
    </div>
  
    </>
  )
}
