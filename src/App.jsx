// App.jsx
import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Project from './components/Project';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <nav>
        <ul>
          <li>
            <a href="#about" className="flex items-center font-bold">About</a>
          </li>
          <li>
            <a href="#skills" className="flex items-center font-bold">Skills</a>
          </li>
          <li>
            <a href="#projects" className="flex items-center font-bold">Projects</a>
          </li>
        </ul>
      </nav>
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Project />
      </div>
    </>
  );
}

export default App;
