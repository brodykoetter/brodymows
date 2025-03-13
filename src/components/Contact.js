import React from "react";
import "../styles/global.css";

const Contact = () => {
  return (
    <div id="contact" className="contact">
      <h2>Contact Us</h2>
      <div className="contact-container">
        {/* Contact Form */}
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="text" placeholder="Your Phone Number" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
        {/* Owner's Contact Information */}
        <div className="contact-info">
          <h3>Owner: Brody Koetter</h3>
          <p>📞 <a href="tel:6123609041">(612) 360-9041</a></p>
          <p>📧 <a href="mailto:brodykoetter@gmail.com">brodykoetter@gmail.com</a></p>
          <p>📍 Serving Ham Lake, MN</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;