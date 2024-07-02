import React from "react";
import { 
  DiHtml5, 
  DiCss3, 
  DiJavascript1, 
  DiReact, 
  DiNodejs, 
  DiMongodb, 
  DiPython, 
  DiGit, 
  DiJava,
  DiNodejsSmall,
  DiMsqlServer
} from "react-icons/di";
import { 

  SiRedux,
  SiTailwindcss,
  SiBootstrap,
  // // SiCplusplus, 
  // SiGoland, 
  // SiFirebase, 
  // SiPostgresql, 
  // SiNextdotjs,  
  // SiFlutter, 
  // SiStackoverflow,
  // // // SiMaterialUi,
  // // // SiMicrosoftoffice
} from "react-icons/si";

function Techstack() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 my-8">
      {[
        { icon: <DiJavascript1 />, name: "JavaScript" },
        { icon: <DiReact />, name: "React" },
        { icon: <DiNodejs />, name: "Node.js" },
        { icon: <DiNodejsSmall />, name: "Express.js" },
        { icon: <DiMongodb />, name: "MongoDB" },
        { icon: <SiRedux />, name: "Redux" },
        { icon: <DiMsqlServer />, name: "SQL" },
        { icon: <DiGit />, name: "Git" },
        // { icon: <SiPostgresql />, name: "PostgreSQL" },
        // { icon: <SiGoland />, name: "Golang" },
        // { icon: <SiFirebase />, name: "Firebase" },
        // { icon: <SiStackoverflow />, name: "Stack Overflow" },
        // { icon: <SiNextdotjs />, name: "Next.js" },
        // { icon: <DiJava />, name: "Java" },
        // { icon: <SiFlutter />, name: "Flutter" },
        { icon: <DiHtml5 />, name: "HTML" },
        { icon: <DiCss3 />, name: "CSS" },
        { icon: <DiPython />, name: "Python" },
        { icon: <SiTailwindcss />, name: "Tailwind CSS" },
        { icon: <SiBootstrap />, name: "Bootstrap" },
      ].map((tech, index) => (
        <div key={index} className="flex flex-col items-center justify-center p-4 bg-gray-900 border border-purple-400 rounded-lg hover:bg-purple-900 transition duration-300">
          <div className="text-4xl lg:text-6xl text-purple-400">{tech.icon}</div>
          <div className="mt-2 text-white text-center">{tech.name}</div>
        </div>
      ))}
    </div>
  );
}

export default Techstack;
