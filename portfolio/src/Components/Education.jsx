import React from "react";
import "../Styling/Education.css";
import educationimg from "../assets/Students.jpg"; // Replace with your actual profile image

const Education = () => {
  return (
    <section className="education-section">
      <div className="education-container">
        <div className="education-image">
          <img src={educationimg} alt="Profile" />
        </div>
        <div className="education-text">
          <h2>
            Education <span className="highlight">Details</span>
          </h2>
          <h3>Bachelor of Technology</h3>
          <p className="course">
            Artificial Intelligence and Data Science
          </p>
          <p className="cgpa">
            <strong>CGPA:</strong> 8.6
          </p>
          <p className="academic-year">
            <strong>Academic Year:</strong> 2021 - 2025
          </p>
          <button className="read-more-btn">View More</button>
        </div>
      </div>
    </section>
  );
};

export default Education;
