import React from "react";
import { project_arr, tool } from "../logo/logo";
import "../Styles/project.css";
import {Link} from "react-router-dom";

const Projects=()=>{

    return(
        <section  id="projects">
             <div className="project-container">
                <h1 className="project-heading">My Projects</h1>
                <div className="project-main">
                    {
                        project_arr.map((el)=>{
                            return <div className="project-card">
                                <div className="project-div1">
                                  <img src={el.Image} alt="projectpic" />
                                </div>
                                <h2 className="project-title">{el.Title}</h2>
                                 <p className="project-description">{el.Description}</p>
                                 <h2 className="tech-stack">Tech Stack</h2>
                                 <div className="project-tech-stack">
                                 {
                                    el.Tech.map((item)=>{
                                        return <div className="tech-arr">
                                             <img src={item} alt="pic" className="tech-img"/>
                                        </div>
                                    })
                                 }
                                 </div>
                                 <hr/>
                                 <div className="project-link-div">
                                        <Link to={`${el.links[0]}`} className="project-github-link" target="_blank" rel="noopener noreferrer"><img src={tool.Github} alt="icon"/></Link>
                                       <Link to={`${el.links[1]}`} className="project-deployed-link" target="_blank" rel="noopener noreferrer">View</Link>
                                 </div>
                                
                                </div>
                        })
                    }
                </div>
             </div>
        </section>
    )
}

export default Projects;