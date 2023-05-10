import React from "react";
import {logo} from "../logo/logo";
import "../Styles/skills.css";

const skills_arr=[
    {path:`${logo.html}`,text:"HTML"},
    {path:`${logo.css}`,text:"CSS3"},
    {path:`${logo.JS}`,text:"JavaScript"},
    {path:`${logo.React}`,text:"React JS"},
    {path:`${logo.Redux}`,text:"Redux"},
    {path:`${logo.TypeScript}`,text:"TypeScript"},
    {path:`${logo.Next}`,text:"Next JS"},
    {path:`${logo.Chakra}`,text:"Chakra UI"},
    {path:`${logo.Node}`,text:"Node JS"},
    {path:`${logo.Express}`,text:"Express JS"},
    {path:`${logo.Mongo}`,text:"MongoDB"},
]
const Skills=()=>{

    return(
        <section  id="skills">
            <div className="skill-body">
                 <h1 className="skill-heading">My Skills</h1>
                 <div className="skill-main">
                    {
                        skills_arr.map((el)=>{
                            return <div className="skills-card">
                                  <img src={el.path} alt="Logo" className="skills-card-img"/>
                                  <h2 className="skills-card-name">{el.text}</h2>
                            </div>
                        })
                    }
                 </div>
            </div>
        </section>
    )
}

export default Skills;