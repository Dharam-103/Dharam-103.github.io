import React from "react";
import "../Styles/contact.css";
import { FiPhoneCall } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { GoLocation} from "react-icons/go";
import { BsGithub} from "react-icons/bs";
import { AiFillLinkedin} from "react-icons/ai";
import {Link} from "react-router-dom";
const Contact=()=>{

    return(
        <section  id="contact" >
            <div className="contact-div">
                <h1 className="contact-heading">Contact Me</h1>
                 <p className="contact-touch">Get In Touch</p>
                 <div className="contact-main">
                     <div className="contact-div1">
                        <div>
                             <FiPhoneCall className="icon-1"/>
                             <h3 className="contact-h3">Phone</h3>
                            <p  id="contact-phone">+91 9111430456</p>
                        </div>
                        <div>
                            <MdEmail className="icon-1"/>
                            <h3  className="contact-h3">Email</h3>
                            <p  id="contact-email">diren.rk@gmail.com</p>
                        </div>
                       <div>
                             <GoLocation className="icon-1"/>
                             <h3  className="contact-h3">Location</h3>
                             <p  id="contact-add">Jaunpur, Uttar Pradesh,India</p>
                       </div>
                    </div>
                     <div className="contact-div2">
                        <div>
                            <Link to="https://github.com/Dharam-103" id="contact-github" target="_blank" rel="noopener noreferrer"><BsGithub  className="git-icon"/></Link> 
                            <Link to="https://www.linkedin.com/in/dharmendra-yadav-a62846246/"  id="contact-linkedin" target="_blank" rel="noopener noreferrer"> <AiFillLinkedin className="linked-icon"/></Link>
                        </div>
                     </div>     
                    </div>
                </div>
        </section>
    )
}

export default Contact;