import React from "react";
import Box from "./Box";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import react from "../assets/react1.png";
import tailwind from "../assets/tailwind.png";
import java from "../assets/java.png";
import boot from "../assets/boot.png";
import c from "../assets/c.png";
import git from "../assets/git.png";
import github from "../assets/github.png";
import mongodb from "../assets/mongodb.png";

function Skills() {
  // Define an array of objects, each containing an image source and title
  const skills = [
    { src: html, title: "HTML" },
    { src: css, title: "CSS" },
    { src: js, title: "JavaScript" },
    { src: react, title: "React" },
    { src: tailwind, title: "Tailwind CSS" },
    { src: java, title: "Java" },
    { src: boot, title: "Bootstrap" },
    { src: c, title: "C" },
    { src: git, title: "Git" },
    { src: github, title: "GitHub" },
    { src: mongodb, title: "MongoDB" },
  ];

  return (
    <div
      id="skill"
      className="md:py-20 items-center justify-between md:px-20 md:pt-20"
    >
      <div className="first-section flex flex-col items-center md:items-start md:w-1/2">
        <div className="flex items-center gap-4 pt-10">
          <hr className="w-32 h-2 text-white font-bold hidden md:block" />
          <h4 className="text-[#40ffa3] font-bold md:text-lg text-3xl">
            Skills
          </h4>
        </div>
      </div>
      <div className="second-section grid grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-y-8 py-10">
        {skills.map((skill, index) => (
          <Box key={index} src={skill.src} title={skill.title} />
        ))}
      </div>
    </div>
  );
}

export default Skills;
