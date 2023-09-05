import React from "react";
import "../Styles/home.css";
import img from "../asset/background.jpg";
import TypeWriterEffect from "react-typewriter-effect";

const Home = () => {

  const downloadFile2=()=>{
    window.open("https://drive.google.com/file/d/11YUjU1Y1dGCuvfkbltm-XnzaYq18gAeN/view?usp=sharing","_blank")
  }
  
  return (
    <section id="home" >
      <div className="home-div">
        <div className="home-div1">
          <img src={img} alt="pic" className="bg-img" />
        </div>
        <div className="content">
          <p className="tag-hi">Hii,👋</p>
          <p className="name-tag">
            I am <span id="user-detail-name">Dharmendra Yadav</span>
          </p>
          <span className="span-tag"> I am a </span>
          <h1 className="title">
            <TypeWriterEffect
                textStyle={{
                  fontFamily: "Red Hat Display",
                  color: "#FFED00",
                  fontWeight: "bold",
                  fontSize: "1.5em",
                }}
                startDelay={3000}
                cursorColor="#865DFF"
               multiText={[
                  "Full Stack Web Developer",
                  "Frontened Developer",
                  "Backened Developer",
                  "Problem Solver"
                ]}
                multiTextDelay={2000}
                typeSpeed={100}
                multiTextLoop
              />
          </h1>
         
      <a href="https://drive.google.com/uc?export=download&id=11YUjU1Y1dGCuvfkbltm-XnzaYq18gAeN"  id="resume-link-2"  className="nav-link resume"> <button id="resume-button-2" onClick={downloadFile2}>Download Resume </button></a>
         
        </div>
      </div>
    </section>
  );
};

export default Home;
