import React from "react";
import { FaApple, FaSlack, FaTools } from "react-icons/fa";
import { DiVisualstudio } from "react-icons/di"; // Import from react-icons/di

function Toolstack() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-6 my-8">
      {[
        { icon: <FaApple />, name: "macOS" },
        { icon: <DiVisualstudio />, name: "VS Code" },
        { icon: <FaTools />, name: "Postman" }, // Use FaTools as a placeholder
        { icon: <FaSlack />, name: "Slack" },
        // { icon: <FaTools />, name: "Tools" },
      ].map((tool, index) => (
        <div key={index} className="flex flex-col justify-center items-center p-4 bg-gray-900 border border-purple-400 rounded-lg hover:bg-purple-900 transition-colors duration-300">
          <div className="text-6xl text-purple-400">{tool.icon}</div>
          <div className="mt-2 text-white">{tool.name}</div>
        </div>
      ))}
    </div>
  );
}

export default Toolstack;
