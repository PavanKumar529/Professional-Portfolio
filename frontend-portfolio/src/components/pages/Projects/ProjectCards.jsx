import React from "react";
import ParallaxTilt from "react-parallax-tilt";
import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";

function ProjectCards(props) {
  return (
    <ParallaxTilt
      className="max-w-sm rounded overflow-hidden shadow-lg bg-white transform hover:scale-105 transition duration-300 ease-in-out"
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      perspective={1000}
      scale={1.02}
      gyroscope={true}
    >
      <div className="relative">
        <img
          className="w-full h-60 object-cover rounded-t"
          src={props.imgPath}
          alt={props.title}
        />
      </div>
      
      <div className="px-6 py-4">
        <div className="text-center text-gray-700 font-bold text-xl mb-2">{props.title}</div>
        <p className="text-gray-700 text-base">{props.description}</p>
      </div>
      
      <div className="px-6 py-4">
        <a
          href={props.ghLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center"
        >
          <BsGithub className="mr-2" /> {props.isBlog ? "View Blog" : "GitHub"}
        </a>
        {!props.isBlog && props.demoLink && (
          <a
            href={props.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-2 inline-flex items-center"
          >
            <CgWebsite className="mr-2" /> Demo
          </a>
        )}
      </div>
    </ParallaxTilt>
  );
}

export default ProjectCards;
