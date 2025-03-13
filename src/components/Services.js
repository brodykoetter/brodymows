import React from "react";
import "../styles/global.css";

const Services = () => {
  const services = [
    "Lawn Mowing",
    "Trimming & Edging",
    "Seasonal Cleanup",
    "Fertilization"
  ];

  return (
    <div id="services" className="services">
      <h2>Our Services</h2>
      {services.map((service, index) => (
        <div key={index} className="service-item">{service}</div>
      ))}
    </div>
  );
};

export default Services;