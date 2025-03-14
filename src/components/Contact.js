import React, { useState } from "react";
import "../styles/global.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("https://formspree.io/f/xwplkgnd", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" }); // Clear form
      } else {
        setStatus("Failed to send. Try again later.");
      }
    } catch (error) {
      setStatus("Error sending message.");
    }
  };

  return (
    <div id="contact" className="contact">
      <h2>Contact Us</h2>
      <div className="contact-container">
        {/* Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Your Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit">Send Message</button>
        </form>

        {/* Owner's Contact Information */}
        <div className="contact-info">
          <h3>Owner: Brody Koetter</h3>
          <p>📞 <a href="tel:6123609041">(612) 360-9041</a></p>
          <p>📧 <a href="mailto:brodykoetter@gmail.com">brodykoetter@gmail.com</a></p>
          <p>📍 Northern Twin Cities, MN Suburbs</p>
        </div>
      </div>

      {/* Status message */}
      {status && <p className="form-status">{status}</p>}
    </div>
  );
};

export default Contact;