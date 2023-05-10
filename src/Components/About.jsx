import React from "react";
import image from "../asset/image.jpg";
import "../Styles/about.css";
const About = () => {
  return (
    <section id="about" className="about section">
      <div className="about-main">
      <h1 className="about-heading">About Me</h1>
      <div className="about-div1">
        <div className="img-div">
          <img class="home-img" src={image} alt="pic" />
        </div>
        <div className="intro-div">
          <p id="user-detail-intro">
            Hello 👋, I am a Full-stack web development student from Masai School.
            With proficiency in the MERN stack like HTML,CSS,JavaScript. I aspire to solve problems by
            building user-interface products.Now I look forward to learning
            about futuristic technologies and utilizing my skills to tackle
            major problems.Apart from this, I love to play sports, read books,
            listen to music and podcasts.
          </p>
        </div>
      </div>
      </div>
    </section>
  );
};

export default About;
