import React from "react";
import proImage from "../assets/skill.png";
import ProjectBox from "./ProjectBox";
import BridgeLogo from "../assets/bridgelogo.png";
import hirevision from "../assets/hirevision.png";
import hirevisionlogo from "../assets/hirevisionlogo.png";
function Project() {
  const projects = [
    {
      src: proImage,
      title:
        "A MERN stack web application that connects users directly with skilled workers. Features include user authentication, SMTP server integration for email notifications, and real-time communication between users and workers. The app is fully responsive, providing a seamless experience across all devices.",
      logo: BridgeLogo,
      heading: "Skills-Bridge",
      link:"http://ashad-jamal.me/skillBridge/",
      repolink:"https://github.com/ASHAD-JAMAL/skillBridge.git",
    },
    {
      src: hirevision,
      title:
        "HireVision is a human resources service company that focuses on helping small and midsize businesses optimize their hiring processes. They offer a wide range of HR services, from hiring and retaining employees to providing fully integrated HR management solutions. Unlike traditional staffing agencies, HireVision acts as an extension of a company’s HR department, providing tailored services to fit the specific needs of their clients.",
      logo: hirevisionlogo,
      heading: "Hire-Vision",
      link:"https://hire-vision.vercel.app/",
      repolink:"https://github.com/ASHAD-JAMAL/HireVision.git",
    },
  ];
  return (
    <div
      id="project"
      className="items-center justify-between md:px-20 md:pt-20"
    >
      <div className="first-section flex flex-col items-center md:items-start md:w-1/2">
        <div className="flex items-center gap-4  pt-10">
          <hr className="w-32 h-2 text-white font-bold hidden md:block" />
          <h4 className="text-[#40ffa3] font-bold md:text-lg text-3xl">
            Projects
          </h4>
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
            link={project.link}
            repolink={project.repolink}
          />
        ))}
      </div>
    </div>
  );
}

export default Project;
