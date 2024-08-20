import React from "react";
import { Avatar } from "@material-tailwind/react";
import github from "../assets/github.png";

function ProjectBox({ src, title, heading, logo }) {
  return (
    <div className="px-5 md:px-10 lg:px-20">
      <div className="flex flex-col lg:flex-row bg-gradient-to-r from-[#050505] via-[#000e2a] to-[#0c1b44] border border-white/100 rounded-3xl shadow-lg items-end">
        {/* Right Section (Image) */}
        <div className="w-full lg:w-1/2">
          <div className="hidden lg:flex w-24 h-24 lg:w-32 lg:h-32 justify-center items-center">
            <img
              src={logo}
              alt="Project Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <img
            src={src}
            alt="Project Screenshot"
            className="w-full h-auto lg:rounded-bl-3xl lg:rounded-tl-none lg:rounded-tr-none rounded-tl-3xl rounded-tr-3xl object-cover"
          />
        </div>

        {/* Left Section */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start px-4 lg:px-10">
          <h1 className="text-white font-bold text-lg lg:text-2xl text-center lg:text-left py-5">
            {heading}
          </h1>
          <p className="text-white text-sm lg:text-base text-justify">
            {title}
          </p>

          {/* GitHub and Live View Button */}
          <div className="flex space-x-4 items-center mt-10 mb-5 lg:my-20 cursor-pointer">
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
      </div>
    </div>
  );
}

export default ProjectBox;
