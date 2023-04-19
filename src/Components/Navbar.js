import React from 'react'
import './Navbar.css'
export default function Navbar() {
  const scrollToSection = (event, sectionId) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    window.scrollTo({ top: section.offsetTop, behavior: 'smooth' });
  };
  return (
    <>
        <div className="container">
            <div className="containt">
                <h2>Portfolio</h2>
                <ul>
                    {/* <li><a href="">Home</a></li> */}
                    <li><a href="#" onClick={(event) => scrollToSection(event, 'homeP')}>Home</a></li>

                    {/* <li><a href="">About</a></li> */}
                    <li><a href="#" onClick={(event) => scrollToSection(event, 'about')}>About</a></li>
                    {/* <li><a href="">Contact Me</a></li> */}
                    <li><a href="#" onClick={(event) => scrollToSection(event, 'projects')}>Projects</a></li>

                </ul>
            </div>
        </div>
    </>
  )
}
