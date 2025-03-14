import React, { useState } from "react";
import "../styles/global.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (event, sectionId) => {
    event.preventDefault();
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // Close mobile menu after clicking a link
    }
  };

  return (
    <nav className="navbar">
      <h1 className="navbar-logo">Koetter's Lawn and Landscaping</h1>

      {/* Hamburger Menu */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li><a href="#services" onClick={(e) => scrollToSection(e, "#services")}>Services</a></li>
        <li><a href="#mission" onClick={(e) => scrollToSection(e, "#mission")}>Our Mission</a></li>
        <li><a href="#contact" onClick={(e) => scrollToSection(e, "#contact")}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;