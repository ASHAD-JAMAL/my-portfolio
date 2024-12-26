import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import "./App.css";
import ProjectList from "./components/Project";

function App() {
  return (
    <>
      <Header />
      <div id="home">
        {" "}
        {/* Added padding to avoid overlap */}
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <ProjectList />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </>
  );
}

export default App;
