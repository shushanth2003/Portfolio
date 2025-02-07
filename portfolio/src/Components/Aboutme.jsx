import React from "react";
import "../Styling/Aboutme.css"; 
import profileimg from "../assets/profile.png"// Import the CSS file

const Aboutme = () => {
  return (
    <section className="hero-section">
      <div className="hero-image">
        <img src={profileimg} alt="Profile" />
      </div>
      <div className="hero-text">
        <h3>Hi, Myself</h3>
        <h1>Mark Junior</h1>
        <h2>
          And I'm a <span className="highlight">Web Designer</span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa nulla,
          mollitia ab, aliquam dolorium dicta tempora sit corporis soluta
          maxime non, beatae asperiores sapiente. Necessitatibus.
        </p>
        <button className="resume-btn">Resume</button>
      </div>
    </section>
  );
};

export default Aboutme;
