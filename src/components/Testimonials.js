import React from "react";
import "../styles/global.css";

const Testimonials = () => {
  return (
    <div id="testimonials" className="testimonials">
      <h2>What Our Customers Say</h2>
      <div className="testimonial">
        <p>"Best lawn care service ever! My yard has never looked better!"</p>
        <strong>- John Doe</strong>
      </div>
      <div className="testimonial">
        <p>"Reliable and affordable. Highly recommended!"</p>
        <strong>- Jane Smith</strong>
      </div>
    </div>
  );
};

export default Testimonials;