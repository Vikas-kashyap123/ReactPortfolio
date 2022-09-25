import React from "react";
import About from "./About";
import Experience from "./Experience";
import Home from "./Home";
import Navbar from "./NavBar";
import Portfolio from "./Portfolio";
import SocialLinks from "./SocialLinks";
import Contact from "./Contact";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <SocialLinks />
      <Portfolio />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
