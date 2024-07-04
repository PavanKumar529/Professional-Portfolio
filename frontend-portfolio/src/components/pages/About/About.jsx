import React from "react";
import Particle from "../Particle";
import Github from "./GitHub";
import Techstack from "./Techstack";
import AboutCard from "./AboutCard";
import laptopImg from "../../../assets/Pavan.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <section id="about" className="py-16 bg-gray-900 text-white relative">
      <Particle />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-12">
          <div className="text-center md:text-left w-full mb-8">
            <h1 className="text-center text-4xl sm:text-5xl font-bold text-yellow-400 mb-4">
              About <span className="text-purple-400">Me</span>
            </h1>
            <p className="text-center text-xl text-gray-300 mb-6">
              I am a passionate web developer with a strong foundation in MERN stack development.
              I enjoy creating modern, responsive, and user-friendly web applications.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between w-full mb-8">
            <div className="md:w-1/2 lg:w-2/3 xl:w-7/12 mb-8 md:mb-0 md:mr-12">
              <AboutCard />
            </div>
            <div className="md:w-1/2 lg:w-1/3 xl:w-5/12">
              <img src={laptopImg} alt="about" className="mx-auto md:ml-auto block w-2/3 md:max-w-xs lg:max-w-xs rounded-lg shadow-lg" />
            </div>
          </div>
          <div className="text-center">
            <p className="text-gray-400 mb-4">"Strive to build things that make a difference!"</p>
            <footer className="text-gray-400">Pavan Kumar Kuruva</footer>
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-8">
            Professional <span className="text-purple-400">Skillset</span>
          </h1>
          <Techstack />
          <h1 className="text-3xl sm:text-4xl font-bold text-yellow-400 mt-12 mb-8">
            <span className="text-purple-400">Tools</span> I use
          </h1>
          <Toolstack />
          <Github />
        </div>
      </div>
    </section>
  );
}

export default About;
