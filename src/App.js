import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Mission from "./components/Mission";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop"; // Import the button
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Mission />
      <Contact />
      <Footer />
      <BackToTop /> {/* Add the floating button */}
    </div>
  );
}

export default App;