import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { AiFillStar, AiOutlineHome, AiOutlineFundProjectionScreen, AiOutlineUser } from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import logo from "../assets/Pavan.png";

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);
  const [navColor, setNavColor] = useState(false);

  const scrollHandler = () => {
    if (window.scrollY >= 20) {
      setNavColor(true);
    } else {
      setNavColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const toggleNavbar = () => {
    setExpanded(!expanded);
  };

  return (
    <nav className={`transition-all duration-300 px-40 ${navColor ? "navbar-colored" : "navbar-transparent"}`}>
      <div className="container mx-auto flex items-center justify-between py-2 md:py-4">
        <NavLink to="/" className="flex items-center">
          <img src={logo} className="h-14 w-14 hover:scale-110 transition-transform duration-300" alt="brand" />
        </NavLink>
        <button className="md:hidden text-white focus:outline-none" onClick={toggleNavbar}>
          <div className="space-y-2">
            <span className={`block h-0.5 w-8 transition-all duration-300 ${expanded ? "bg-red-500 transform rotate-45 translate-y-1.5" : "bg-purple-500"}`}></span>
            <span className={`block h-0.5 w-8 transition-all duration-300 ${expanded ? "bg-red-500 opacity-0" : "bg-purple-500"}`}></span>
            <span className={`block h-0.5 w-8 transition-all duration-300 ${expanded ? "bg-red-500 transform -rotate-45 -translate-y-1.5" : "bg-purple-500"}`}></span>
          </div>
        </button>
        <div className={`md:flex md:items-center ${expanded ? "block" : "hidden"} transition-all duration-300 ease-in-out absolute md:relative top-full left-0 w-full md:w-auto bg-gray-900 md:bg-transparent shadow-lg md:shadow-none`}>
          <ul className="md:flex md:space-x-6 w-full md:w-auto">
            <li className="nav-item">
              <NavLink
                to="/"
                className="text-white px-3 py-2 block relative hover:text-purple-400 transition-all duration-300"
                activeClassName="font-bold"
                onClick={() => setExpanded(false)}
              >
                <AiOutlineHome className="inline-block mb-1" /> Home
                <div className="nav-underline"></div>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className="text-white px-3 py-2 block relative hover:text-purple-400 transition-all duration-300"
                activeClassName="font-bold"
                onClick={() => setExpanded(false)}
              >
                <AiOutlineUser className="inline-block mb-1" /> About
                <div className="nav-underline"></div>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/projects"
                className="text-white px-3 py-2 block relative hover:text-purple-400 transition-all duration-300"
                activeClassName="font-bold"
                onClick={() => setExpanded(false)}
              >
                <AiOutlineFundProjectionScreen className="inline-block mb-1" /> Projects
                <div className="nav-underline"></div>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/resume"
                className="text-white px-3 py-2 block relative hover:text-purple-400 transition-all duration-300"
                activeClassName="font-bold"
                onClick={() => setExpanded(false)}
              >
                <CgFileDocument className="inline-block mb-1" /> Resume
                <div className="nav-underline"></div>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                className="text-white px-3 py-2 block relative hover:text-purple-400 transition-all duration-300"
                activeClassName="font-bold"
                onClick={() => setExpanded(false)}
              >
                <AiOutlineUser className="inline-block mb-1" /> Contact Us
                <div className="nav-underline"></div>
              </NavLink>
            </li>
{/*             <li className="nav-item">
              <a
                href="https://github.com/PavanKumar529/Professional-Portfolio"
                target="_blank"
                className="text-white px-3 py-2 block bg-purple-500 rounded-full hover:bg-purple-600 transition-colors duration-300"
              >
                <CgGitFork className="inline-block mb-1 text-lg" /> <AiFillStar className="inline-block text-lg" />
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
