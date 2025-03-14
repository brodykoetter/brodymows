import React from "react";
import "../styles/global.css";

const Hero = () => {
  return (
    <div
      className="hero"
      style={{
        // backgroundImage: `url("/images/lawn1.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textAlign: "center",
      }}
    >
      <div className="hero-content" style={{ background: "rgba(0, 0, 0, 0.5)", padding: "20px", borderRadius: "8px" }}>
        <h1>Lush Lawns, No Hassle!</h1>
        <p>Professional lawn care services at affordable prices.</p>
        <a href="#contact">
          <button style={{ backgroundColor: "#FFD700", color: "black", padding: "10px 20px", border: "none", borderRadius: "5px", cursor: "pointer" }}>
            Get a Free Quote
          </button>
        </a>
      </div>
    </div>
  );
};

export default Hero;