import React, { useState } from "react";
import {
  Avatar,
  IconButton,
  Navbar,
  Typography,
} from "@material-tailwind/react";
import { FaHome, FaUser, FaCode, FaBriefcase, FaPhone } from "react-icons/fa"; // Using icons from Font Awesome

import logo from "../assets/logo.png";

export function NavbarForDropdownWithMultipleLanguages() {
  const [activeLink, setActiveLink] = useState(""); // To keep track of the active link

  const navItems = [
    { name: "Home", href: "#home", icon: <FaHome className="h-6 w-6" /> },
    { name: "About", href: "#about", icon: <FaUser className="h-6 w-6" /> },
    { name: "Skills", href: "#skills", icon: <FaCode className="h-6 w-6" /> },
    {
      name: "Projects",
      href: "#projects",
      icon: <FaBriefcase className="h-6 w-6" />,
    },
    {
      name: "Contact",
      href: "#contact",
      icon: <FaPhone className="h-6 w-6" />,
    },
  ];

  // Function to handle link click for mobile and desktop
  const handleLinkClick = (href) => {
    setActiveLink(href);
  };

  return (
    <div className="pt-2">
      {/* Desktop Navbar */}
      <Navbar className="mx-auto max-w-screen-xl px-4 lg:px-8 lg:py-4 shadow-2xl gradient-header w-full hidden md:block">
        <div className="flex items-center justify-between text-white">
          <Typography as="a" href="#" className="cursor-pointer">
            <Avatar
              src={logo}
              alt="avatar"
              className="filter brightness-0 invert"
            />
          </Typography>
          <div className="mr-4">
            <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 w-full">
              {navItems.map((item, index) => (
                <Typography
                  key={index}
                  as="li"
                  variant="small"
                  color="white"
                  className={`p-1 font-medium ${
                    activeLink === item.href ? "text-[#40ffa3]" : ""
                  }`}
                >
                  <a
                    href={item.href}
                    onClick={() => handleLinkClick(item.href)} // Update active link
                    className="flex items-center hover:text-[#40ffa3]"
                  >
                    {item.icon}
                    <span className="ml-2">{item.name}</span>
                  </a>
                </Typography>
              ))}
            </ul>
          </div>
        </div>
      </Navbar>

      {/* Mobile Navbar */}
      <div className="lg:hidden fixed bottom-0 left-0 w-full bg-[#040e2a] p-4  shadow-lg h-14 flex justify-around items-center z-50">
        {navItems.map((item, index) => (
          <IconButton
            key={index}
            className="text-white rounded-full"
            onClick={() => handleLinkClick(item.href)}
          >
            <a
              href={item.href}
              className="flex items-center justify-center rounded-full p-2 hover:bg-[#40ffa3]"
            >
              {item.icon}
            </a>
          </IconButton>
        ))}
      </div>
    </div>
  );
}

function Header() {
  return <NavbarForDropdownWithMultipleLanguages />;
}

export default Header;
