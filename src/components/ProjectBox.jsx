import React from "react";
import { Avatar } from "@material-tailwind/react";
import github from "../assets/github.png";

function ProjectBox({ src, title, heading, link, repolink }) {
  return (
    <div className="w-full sm:w-6/12 md:w-4/12 px-4">
      <div className="flex flex-col bg-gradient-to-r from-[#050505] via-[#000e2a] to-[#0c1b44] border border-white/100 shadow-lg items-end rounded-xl overflow-hidden h-full">
        {/* Right Section (Image) */}
        <div className="w-full h-52 md:h-64 lg:h-72 relative">
          <img
            src={src}
            alt="Project Screenshot"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Left Section (Content) */}
        <div className="w-full flex flex-col justify-between px-4 py-5 flex-grow">
          <h1 className="text-white font-bold text-lg lg:text-2xl text-center lg:text-left">
            {heading}
          </h1>
          <p className="text-white text-sm lg:text-base text-justify mt-2">
            {title}
          </p>

          {/* GitHub and Live View Button */}
          <div className="flex space-x-4 items-center mt-4 cursor-pointer">
            <a href={repolink}>
              <Avatar
                src={github}
                alt="GitHub Avatar"
                variant="rounded"
                className="w-10 h-10"
              />
            </a>
            <a
              href={link}
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
