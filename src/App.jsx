import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <div id="home" className="pt-16"> {/* Added padding to avoid overlap */}
        <Home />
      </div>
      <div id="about" className="pt-16">
        <About />
      </div>
      <div id="skills" className="pt-16">
        <Skills />
      </div>
      <div id="projects" className="pt-16">
        <Project />
      </div>
      <div id="contact" className="pt-16">
        <Contact />
      </div>
    </>
  );
}

export default App;
