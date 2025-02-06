import React from "react";
import logo from "../assets/logo.webp";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
// import { SiGmail } from "react-icons/si";
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" className="" aria-label="Home">
          <img src={logo} alt="Logo" className="mx-2 w-[50px]" />
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4  text-2xl">
        <a
          href="https://linkedin.com/in/bharat-harikumar"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/nightcoder95"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github">
          <FaGithub />
        </a>
        <a
          href="https://leetcode.com/u/nightcoder95/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Leetcode">
          <SiLeetcode />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
