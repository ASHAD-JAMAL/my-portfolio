import React from "react";
import { IconButton } from "@material-tailwind/react";
import {
  Card,
  Input,
  Textarea,
  Button,
  Typography,
} from "@material-tailwind/react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

export function SimpleRegistrationForm() {
  return (
    <Card
      color="transparent"
      shadow={false}
      className="bg-gradient-to-r from-black via-[#000e2a] to-[#0c1b44] p-6"
    >
      <Typography variant="h4" color="white" className="text-center mb-6">
        Contact Us
      </Typography>
      <form className="mt-8 w-full max-w-md mx-auto">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col">
            <Typography variant="h6" color="white" className="mb-2">
              Your Name
            </Typography>
            <Input
              size="lg"
              placeholder="name"
              className="border-gray-300 focus:border-gray-900"
            />
          </div>
          <div className="flex flex-col">
            <Typography variant="h6" color="white" className="mb-2">
              Your Email
            </Typography>
            <Input
              size="lg"
              placeholder="name@mail.com"
              className="border-gray-300 focus:border-gray-900"
            />
          </div>
          <div className="flex flex-col">
            <Typography variant="h6" color="white" className="mb-2">
              Message
            </Typography>
            <Textarea
              size="lg"
              placeholder="What can we help you with"
              className="border-gray-300 focus:border-gray-900"
            />
          </div>
        </div>
        <Button className="mt-6 w-full text-white bg-[#40ffa3] font-bold text-md">
          Send me
        </Button>
      </form>
    </Card>
  );
}

function Contact() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-6 md:p-12">
      <div className="flex-1 max-w-md md:max-w-lg mx-4">
        <SimpleRegistrationForm />
      </div>
      <div className="flex-1 max-w-md md:max-w-lg mx-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-teal-500 via-green-400 to-[#34d8ac] bg-clip-text text-transparent">Get In Touch</h1>
        </div>
        <div className="flex gap-4 justify-center">
          <a
            href="https://linkedin.com/in/ashad-jamal"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 rounded-full border border-gray-300 bg-transparent"
          >
            <FaLinkedin className="text-lg text-white" />
          </a>
          <a
            href="mailto:ashadjamalhyt@gmail.com"
            className="flex items-center justify-center w-12 h-12 rounded-full border border-gray-300 bg-transparent "
          >
            <AiOutlineMail className="text-lg text-white" />
          </a>
          <a
            href="https://github.com/ASHAD-JAMAL"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 rounded-full border border-gray-300 bg-transparent "
          >
            <FaGithub className="text-lg text-white" />
          </a>
          <a
            href="https://www.instagram.com/ashad__jamal/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 rounded-full border border-gray-300 bg-transparent "
          >
            <FaInstagram className="text-lg text-white" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
