import React from "react";
import proImage from "../assets/skill.png";
import ProjectBox from "./ProjectBox";
import BridgeLogo from "../assets/bridgelogo.png";
function Project() {
  const projects = [
    {
      src: proImage,
      title:
        "A MERN stack web application that connects users directly with skilled workers. Features include user authentication, SMTP server integration for email notifications, and real-time communication between users and workers. The app is fully responsive, providing a seamless experience across all devices.",
      logo: BridgeLogo,
      heading:"Skills-Bridge",
    },
  ];
  return (
    <div id="project" className="items-center justify-between md:px-20 md:pt-20 pt-64 md:pb-0 pb-24">
      <div className="first-section flex flex-col items-center md:items-start md:w-1/2">
        <div className="flex items-center mx-4 gap-4">
          <hr className="w-32 h-2 text-white font-bold hidden md:block" />
          <h4 className="text-[#40ffa3] font-bold md:text-lg text-3xl">Projects</h4>
        </div>
      </div>
      <div className="second-section py-10">
        {projects.map((project, index) => (
          <ProjectBox
            key={index}
            src={project.src}
            title={project.title}
            heading={project.heading}
            logo={project.logo}
          />
        ))}
      </div>
    </div>
  );
}

export default Project;
