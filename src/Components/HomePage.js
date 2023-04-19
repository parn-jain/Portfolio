import React, { useEffect, useState } from 'react';
import img from './TempImg.png'
import './HomePage.css'
import img2 from './facebookFinal.png'
export default function HomePage() {
    const [skill, setSkill] = useState("2D Animator")
    const  ChangeText=()=>{
        setTimeout(()=>{
            setSkill("Front-End Developer")
        },0);
        setTimeout(()=>{
            setSkill("Graphic Designer")
        },4000);
        setTimeout(()=>{
            setSkill("Logo Designer")
        },8000);
        setTimeout(()=>{
            setSkill("2D Animator")
        },12000);
        setInterval(ChangeText,16000)
        
    }
    useEffect(()=>{
        ChangeText()
    },[])
    
    
    
    return (
        <>
        <div id="homeP">

            <div className="HomeContainer">
                <div className="HomeContaint">
                    {/* {ChangeText()} */}
                    <h1>Hello, It's Me</h1>
                    <h1 className='MyName'> Parn Jain </h1>
                    <span className = 'text firstText'>And I'm</span>
                    <span className = 'text secondText'>&nbsp; {skill}</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non at suscipit omnis fugit similique soluta sint dolorum rem, vitae libero! Voluptate</p>
                    {/* <i class="fa-brands fa-facebook-f"></i> */}
                    {/* <i class="fa-brands fa-linkedin-in"></i> */}
                    {/* <i class="fa-brands fa-twitter"></i> */}
                    <div className="editedFa">
                        <img className = "editFaElements" src={img2} alt="My Image"/>
                        <img className = "editFaElements" src={img2} alt="My Image"/>
                        <img className = "editFaElements" src={img2} alt="My Image"/>
                        {/* <img className = "editFaElements" src={img2} alt="My Image"/> */}
                    </div>
                    <button className='CVbutton'> DOWNLOAD CV</button>
                </div>
                <div className="HomeImage">
                    <img src={img} alt="My Image" />
                </div>
            </div>

        </div>

        </>
    )
}
