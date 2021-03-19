import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaHome } from "react-icons/fa";

const SubHeader = () => {
    return (
        <div className="subHeaderSection">
            <div className="logo">
                <span><b>FoodSpot</b></span>
            </div>
            <div className="toggleMenu">

            </div>
            <div className="menu">
               <ul>
                   <li><NavLink exact to="/"><span style={{'fontSize':'40px'}}><FaHome></FaHome></span></NavLink></li>
                   
               </ul>
            </div>
            </div>
        
    )
}

export default SubHeader
