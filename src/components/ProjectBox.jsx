import React from "react";
import { Avatar } from "@material-tailwind/react";
import github from "../assets/github.png";

function ProjectBox({ src, title, heading, logo }) {
  return (
    <div className="py-10 md:px-20 px-5">
      <div className="flex flex-col md:flex-row bg-gradient-to-r from-[#050505] via-[#000e2a] to-[#0c1b44] border border-white/100 rounded-3xl shadow-lg items-end">
        {/* Left Section */}
        <div className="flex-1 md:w-1/2 flex flex-col items-center md:items-start md:px-10">
          <div className="w-24 h-24 md:w-32 md:h-32 flex justify-center items-center">
            <img
              src={logo}
              alt="Project Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <h1 className="text-white font-bold text-lg md:text-2xl text-center md:text-left px-4">
            {heading}
          </h1>
          <p className="text-white text-sm md:text-base text-justify px-4">
            {title}
          </p>

          {/* GitHub and Live View Button */}
          <div className="flex space-x-4 items-center my-20 cursor-pointer">
            <a href="https://github.com/ASHAD-JAMAL">
              <Avatar
                src={github}
                alt="GitHub Avatar"
                variant="rounded"
                className="w-10 h-10"
              />
            </a>
            <a
              href="https://ashad-jamal.github.io/skillBridge/"
              className="text-white bg-green-500 px-4 py-2 rounded-lg shadow-lg hover:bg-green-400 transition duration-300"
            >
              Live view →
            </a>
          </div>
        </div>

        {/* Right Section (Image) */}
        <div className="flex-1 md:w-1/2">
          <img
            src={src}
            alt="Project Screenshot"
            className="w-full h-auto rounded-tl-3xl rounded-br-3xl object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default ProjectBox;
