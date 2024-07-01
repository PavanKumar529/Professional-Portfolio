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
          className="w-full h-56 object-cover rounded-t"
          src={props.imgPath}
          alt="Project"
        />
        <div className="absolute top-0 left-0 m-2 bg-gray-800 bg-opacity-60 text-white px-2 py-1 rounded">
          {props.isBlog ? "Blog" : "Project"}
        </div>
      </div>
      <div className="px-6 py-4 h-40 flex flex-col justify-between">
        <div>
          <div className="font-bold text-xl mb-2">{props.title}</div>
          <p className="text-gray-700 text-base">{props.description}</p>
        </div>
        <div className="mt-4 flex justify-between items-center">
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
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded inline-flex items-center"
            >
              <CgWebsite className="mr-2" /> Demo
            </a>
          )}
        </div>
      </div>
    </ParallaxTilt>
  );
}

export default ProjectCards;
