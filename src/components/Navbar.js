import React from "react";
import "../styles/global.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Koetter's Lawn and Landscaping</h1>
      <div>
        <a href="#services">Services</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#contact">Contact</a>
        <span className="phone">📞 (612) 360-9041</span>
      </div>
    </nav>
  );
};

export default Navbar;