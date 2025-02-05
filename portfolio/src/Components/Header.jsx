import React, { useState } from "react";
import "../Styling/Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">Portfolio.</div>
      <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
        <li><a href="#home" className="active">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div 
        className="hamburger-menu" 
        onClick={() => setMenuOpen(!menuOpen)}
      >
        &#9776;
      </div>
    </nav>
  );
};

export default Header;

