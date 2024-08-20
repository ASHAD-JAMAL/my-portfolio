import React from "react";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Avatar
} from "@material-tailwind/react";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../assets/logo.png";

export function NavbarForDropdownWithMultipleLanguages() {
  const [openNav, setOpenNav] = React.useState(false);

  // Handle resize and scroll events
  React.useEffect(() => {
    const handleResize = () => window.innerWidth >= 960 && setOpenNav(false);
    const handleScroll = () => setOpenNav(false);

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-medium"
      >
        <a href="#home" className="flex items-center">
          Home
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-medium"
      >
        <a href="#about" className="flex items-center">
          About
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-medium"
      >
        <a href="#skills" className="flex items-center">
          Skills
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-medium"
      >
        <a href="#projects" className="flex items-center">
          Projects
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-medium"
      >
        <a href="#contact">
          <Button className="flex items-center text-[#004080] bg-[#40ffa3] font-bold text-md">
            Let's Talk!
          </Button>
        </a>
      </Typography>
    </ul>
  );

  return (
    <div className="pt-10">
      <Navbar className="mx-auto max-w-screen-xl px-4 lg:px-8 lg:py-4 shadow-2xl gradient-header">
        <div className="flex items-center justify-between text-white">
          <Typography as="a" href="#" className="cursor-pointer">
          <Avatar src={logo} alt="avatar" className="filter brightness-0 invert" />
          </Typography>
          <div className="mr-4 hidden lg:block">{navList}</div>
          <IconButton
            variant="text"
            className="lg:hidden"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6 text-white" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6 text-white" strokeWidth={2} />
            )}
          </IconButton>
        </div>
        <div className={`lg:hidden ${openNav ? "block" : "hidden"}`}>
          {navList}
        </div>
      </Navbar>
    </div>
  );
}

function Header() {
  return <NavbarForDropdownWithMultipleLanguages />;
}

export default Header;
