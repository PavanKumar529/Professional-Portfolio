import React from "react";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-6 md:p-8 lg:p-10">
      <p className="text-gray-300 leading-relaxed mb-4 md:mb-6 text-sm md:text-base lg:text-lg">
        Hi Everyone, I am <span className="text-purple-400 font-bold">Pavan Kumar Kuruva</span> from{" "}
        <span className="text-purple-400 font-bold">Kurnool, Andra Pradesh, India.</span>
      </p>
      <p className="text-gray-400 mb-4 md:mb-6 text-sm md:text-base lg:text-lg">
        I am currently a trainee as a MERN Stack Developer at Jspiders in Marathahalli, Bangalore.
      </p>
      <p className="text-gray-400 mb-4 md:mb-6 text-sm md:text-base lg:text-lg">
        I completed Master of Technology in the specialization of Reliability Engineering from JNTUA, Anantapur.
      </p>
      <ul className="text-gray-500 mb-4 md:mb-6 text-sm md:text-base lg:text-lg">
        <li className="flex items-center mb-2 md:mb-3">
          <ImPointRight className="text-purple-400 mr-2" /> Playing Games
        </li>
        <li className="flex items-center mb-2 md:mb-3">
          <ImPointRight className="text-purple-400 mr-2" /> Writing Tech Blogs
        </li>
        <li className="flex items-center mb-2 md:mb-3">
          <ImPointRight className="text-purple-400 mr-2" /> Traveling
        </li>
      </ul>
    </div>
  );
}

export default AboutCard;
