import React, { useState } from "react";
import axios from "axios";
import {
  Card,
  Input,
  Textarea,
  Button,
  Typography,
} from "@material-tailwind/react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function SimpleRegistrationForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = { name, email, message };

    try {
      const response = await axios.post(
        "http://localhost:5000/api/contact",
        formData
      );

      if (response.status === 201) {
        toast.success("Message sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        toast.error("Failed to send message.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred while sending the message.");
    }
  };

  return (
    <Card
      color="transparent"
      shadow={false}
      className="bg-gradient-to-r from-black via-[#000e2a] to-[#0c1b44] p-6 rounded-3xl"
    >
      <Typography variant="h4" color="white" className="text-center mb-6">
        Contact Us
      </Typography>
      <form onSubmit={handleSubmit} className="mt-8 w-full max-w-md mx-auto">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col">
            <Typography variant="h6" color="white" className="mb-2">
              Your Name
            </Typography>
            <Input
              size="lg"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="name"
              className="border-gray-300 focus:border-gray-900 text-white font-medium"
            />
          </div>
          <div className="flex flex-col">
            <Typography variant="h6" color="white" className="mb-2">
              Your Email
            </Typography>
            <Input
              size="lg"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@mail.com"
              className="border-gray-300 focus:border-gray-900 text-white font-medium"
            />
          </div>
          <div className="flex flex-col">
            <Typography variant="h6" color="white" className="mb-2">
              Message
            </Typography>
            <Textarea
              size="lg"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="What can we help you with"
              className="border-gray-300 focus:border-gray-900 text-white font-thin"
            />
          </div>
        </div>
        <Button
          className="mt-6 w-full text-white bg-[#40ffa3] font-bold text-md"
          type="submit"
        >
          Send me
        </Button>
      </form>
      <ToastContainer />
    </Card>
  );
}

function Contact() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-6 md:p-12">
      <div className="flex-1 max-w-md md:max-w-lg mx-4 border border-white/100 rounded-3xl shadow-lg mb-10 md:mb-0">
        <SimpleRegistrationForm />
      </div>
      <div className="flex-1 max-w-md md:max-w-lg mx-4">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
            Get In Touch
          </h1>
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
