import React, { useEffect, useState } from "react";
import "../Styles/Navbar.css";
import { GiHamburgerMenu } from 'react-icons/gi';
import{ImCross} from "react-icons/im";

const Navbar=()=>{
    const[isMobile,setIsMobile]=useState(false);
    const[navcolor,setNavcolor]=useState(false);
   
   const downloadFile2=()=>{
     window.open("https://drive.google.com/file/d/11YUjU1Y1dGCuvfkbltm-XnzaYq18gAeN/view?usp=sharing","_blank")
   }
    const handleClick=()=>{
        setIsMobile((prev)=> !prev);
    }

    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY>400){
                setNavcolor(true)
            }else{
                setNavcolor(false)
            }
        })
    },[])
  
  return(
          <section>
              <div id={navcolor ?"nav-color":"nav-menu"}>
                 <div className="nav_div1">
                      <a href="#home">
                          <h1 className="heading">Dharmendra</h1>
                      </a>
                </div>
                <div className="nav-div-2">
                  <div className={isMobile ? "list-main active":"list-main" }
                     onClick={()=> setIsMobile(false)}>
                     <a href="#home" className="nav-link home">Home</a>
                     <a href="#about" className="nav-link about">About</a>
                     <a href="#skills" className="nav-link skills">Skills</a>
                     <a href="#projects" className="nav-link projects">Projects</a>
                     <a href="#contact" className="nav-link contact">Contact</a>
                     <a href="https://drive.google.com/uc?export=download&id=11YUjU1Y1dGCuvfkbltm-XnzaYq18gAeN"  id="resume-link-1"  className="nav-link resume"> <button id="resume-button-1" onClick={downloadFile2}><i class="fa-solid fa-download"></i>Resume</button></a>
                 </div>
               <div className="mobile-menu" onClick={handleClick}>
                  {isMobile ?<ImCross/>:<GiHamburgerMenu/>}
               </div>
            </div>
         </div>
    </section>
    )
}

export default Navbar;
