import React from "react";
import { FaCloudDownloadAlt } from "react-icons/fa";
import resume from "../assets/Jamal_Resume_2024.pdf";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

export function AccordionCustomStyles() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <Accordion
        open={open === 1}
        className="mb-4 rounded-lg border border-blue-gray-100 px-4 bg-gradient-to-r from-blue-800 via-teal-500 to-green-400"
      >
        <AccordionHeader
          onClick={() => handleOpen(1)}
          className="border-b-0 transition-colors text-white font-bold"
        >
          PERSONAL DETAILS
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
          <div className="text-white px-4 py-6">
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:justify-between">
                <p className="font-bold w-full sm:w-1/4">Name:</p>
                <p className="w-full sm:w-3/4">Ashad Jamal</p>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between">
                <p className="font-bold w-full sm:w-1/4">Email:</p>
                <p className="w-full sm:w-3/4">ashadjamalhyt@gmail.com</p>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between">
                <p className="font-bold w-full sm:w-1/4">Phone:</p>
                <p className="w-full sm:w-3/4">7321857364</p>
              </div>
            </div>
          </div>
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 2}
        className="mb-4 rounded-lg border border-blue-gray-100 px-4 bg-gradient-to-r from-blue-800 via-teal-500 to-green-400"
      >
        <AccordionHeader
          onClick={() => handleOpen(2)}
          className="border-b-0 transition-colors text-white font-bold"
        >
          Education
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
          <div className="text-white px-4 py-6">
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:justify-between">
                <p className="font-bold w-full sm:w-1/4">Degree:</p>
                <p className="w-full sm:w-3/4">
                  Bachelor of Technology in Computer Science
                </p>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between">
                <p className="font-bold w-full sm:w-1/4">Institution:</p>
                <p className="w-full sm:w-3/4">
                  Maulana Azad National Urdu University
                </p>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between">
                <p className="font-bold w-full sm:w-1/4">Year:</p>
                <p className="w-full sm:w-3/4">2021 - 2025</p>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between">
                <p className="font-bold w-full sm:w-1/4">CGPA:</p>
                <p className="w-full sm:w-3/4">8.52</p>
              </div>
            </div>
          </div>
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 3}
        className="rounded-lg border border-blue-gray-100 px-4 bg-gradient-to-r from-blue-800 via-teal-500 to-green-400"
      >
        <AccordionHeader
          onClick={() => handleOpen(3)}
          className="border-b-0 transition-colors text-white font-bold"
        >
          Experience
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
          <div className="text-white px-4 py-6">
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:justify-between">
                <p className="font-bold w-full sm:w-1/4">Position:</p>
                <p className="w-full sm:w-3/4">Web Developer</p>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between">
                <p className="font-bold w-full sm:w-1/4">Company:</p>
                <p className="w-full sm:w-3/4">Meity gov of India</p>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between">
                <p className="font-bold w-full sm:w-1/4">Duration:</p>
                <p className="w-full sm:w-3/4">March 2023 - December 2023</p>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between">
                <p className="font-bold w-full sm:w-1/4">Responsibilities:</p>
                <p className="w-full sm:w-3/4">
                  Developed and maintained user interfaces using React and
                  Tailwind CSS.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between">
                <p className="font-bold w-full sm:w-1/4">Achievements:</p>
                <p className="w-full sm:w-3/4">
                  Improved application performance by 30% and implemented a new
                  feature that increased user engagement.
                </p>
              </div>
            </div>
          </div>
        </AccordionBody>
      </Accordion>
    </>
  );
}

function About() {
  return (
    <div className="about flex flex-col md:flex-row items-center justify-between px-4 md:px-8 lg:px-16  gap-6">
      <div className="first-section flex flex-col items-center md:items-start md:w-1/2">
        <div className="flex items-center gap-4 pt-10">
          <hr className="w-24 h-2 text-white font-bold hidden md:block" />
          <h4 className="text-[#40ffa3] font-bold md:text-lg text-3xl">
            About me
          </h4>
        </div>
        <div className="pt-6 md:pt-10">
          <h1 className="font-bold text-white md:text-5xl text-3xl text-center md:text-left">
            Web Developer based in <br /> Hyderabad, India
          </h1>
          <div className="w-full max-w-3xl mx-auto px-4 py-4">
            <p className="text-white text-base md:text-lg py-4 md:text-left text-justify">
              Hi, I'm Ashad Jamal, a final-year B.Tech Computer Science student
              with a passion for full-stack development. I specialize in
              frontend technologies like React, Vite, and Tailwind CSS, creating
              responsive and user-friendly interfaces. I've built projects like
              a YouTube clone and a Skill Bridge web app using the MERN stack,
              showcasing my ability to deliver scalable and effective solutions.
              I love solving real-world problems with clean, efficient code and
              am always eager to learn new technologies. I'm currently seeking
              opportunities to apply my skills in a dynamic environment where I
              can contribute to impactful projects and continue growing as a
              developer.
            </p>
          </div>
        </div>
        <a
          href={resume}
          download
          className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-blue-800 via-teal-500 to-green-400"
        >
          <FaCloudDownloadAlt className="text-white text-lg md:text-2xl" />
        </a>
      </div>
      <div className="second-section md:w-1/2 mt-6 md:mt-0">
        <AccordionCustomStyles />
      </div>
    </div>
  );
}

export default About;
