import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../Styles/Navbar.css";
import { GiHamburgerMenu } from 'react-icons/gi';
import{ImCross} from "react-icons/im";
const Navbar=()=>{
    const[isMobile,setIsMobile]=useState(false);
    const handleClick=()=>{
        setIsMobile((prev)=> !prev);
    }
    const activeStyles={
        backgroundColor:"#000000",
        color:"#5433FF",
        padding:"7px",
        borderRadius:"10px",
        transition:"0.5s ease-in-out"
    }

    return(
        <div id="nav-menu">
            <div className="nav_div1">
                <NavLink to="/">
                    <h1 className="heading">Dharmendra</h1>
                </NavLink>
            </div>
             <div className="nav_div2">
             <ul className={isMobile ? "list-main active":"list-main" }
              onClick={()=> setIsMobile(false)}
             >
                <li>
                    <NavLink to="/" className="nav-link home" style={({isActive})=> isActive?activeStyles:null}>Home</NavLink>
                </li>  
                <li>
                    <NavLink to="/about" className="nav-link about" style={({isActive})=> isActive?activeStyles:null}>About</NavLink>
                </li> 
                <li>
                    <NavLink to="/skills" className="nav-link skills" style={({isActive})=> isActive?activeStyles:null}>Skills</NavLink>
                </li> 
                <li>
                    <NavLink to="/projects" className="nav-link projects" style={({isActive})=> isActive?activeStyles:null}>Projects</NavLink>
                </li> 
                <li>
                    <NavLink to="/contact" className="nav-link contact" style={({isActive})=> isActive?activeStyles:null}>Contact</NavLink>
                </li> 
                <button>
                   <NavLink to="" className="nav-link resume"><i className="fa-solid fa-download"></i>Resume</NavLink>
                </button>
            </ul>
             </div>
           <div className="mobile-menu" onClick={handleClick}>
              {isMobile ?<ImCross/>:<GiHamburgerMenu/>}
           </div>
        </div>
    )
}

export default Navbar;