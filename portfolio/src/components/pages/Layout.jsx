import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import About from "./About/About.jsx";
import Projects from "./Projects/Projects.jsx";
import Resume from "./Resume";
import ContactUs from "./ContactUs.jsx";

const Layout = () => {
  return (
    <div className="main-content text-3xl font-bold">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="resume" element={<Resume />} />
        <Route path="contact" element={<ContactUs />} />
      </Routes>
    </div>
  );
};

export default Layout;
