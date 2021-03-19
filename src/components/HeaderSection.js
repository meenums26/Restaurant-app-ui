import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaHome } from "react-icons/fa";

const HeaderSection = () => {
    return (
        <div className="headerSection">
            <div className="logo">
                <span><b>FoodSpot</b></span>
            </div>
            <div className="toggleMenu">

            </div>
            <div className="menu">
               <ul>
                   <li><NavLink exact to="/"><span style={{'fontSize':'40px'}}><FaHome/></span></NavLink></li>
                 
               </ul>
            </div>
            </div>
        
    )
}

export default HeaderSection
