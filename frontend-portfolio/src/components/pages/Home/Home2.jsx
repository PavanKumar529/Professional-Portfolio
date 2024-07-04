import React from "react";
import myImg from "../../../assets/Pavan.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillTwitterCircle } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <section className="bg-gradient-to-r from-purple-500 to-pink-500 py-10 min-h-screen flex items-center">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 flex flex-wrap items-center">
        <div className="w-full md:w-1/2 lg:w-3/5 order-1 md:order-2">
          <div className="p-4 md:p-8">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              LET ME{" "}
              <span className="text-yellow-400"> INTRODUCE </span> MYSELF
            </h1>
            <p className="text-lg md:text-xl text-white mb-6 leading-relaxed">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />
              I am fluent in classics like{" "}
              <span className="font-bold text-yellow-400">JavaScript</span>.
              <br />
              <br />
              My fields of interest are building new{" "}
              <span className="font-bold text-yellow-400">
                Web Technologies and Products
              </span>{" "}
              and also in areas related to{" "}
              <span className="font-bold text-yellow-400">Blockchain</span>.
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with{" "}
              <span className="font-bold text-yellow-400">Node.js</span> and{" "}
              <span className="font-bold text-yellow-400">
                Modern JavaScript Library and Frameworks
              </span>{" "}
              like{" "}
              <span className="font-bold text-yellow-400">
                React.js, React Native, and Next.js
              </span>
              .
            </p>
            {/* <div className="flex space-x-4">
              <a
                href="https://github.com/PavanKumar529"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-400 transition duration-300"
              >
                <AiFillGithub className="text-4xl" title="GitHub" />
              </a>
              <a
                href="https://www.linkedin.com/in/pavan-kumar529/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-400 transition duration-300"
              >
                <FaLinkedinIn className="text-4xl" title="LinkedIn" />
              </a>
              <a
                href="https://twitter.com/PavanKumar529"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-400 transition duration-300"
              >
                <AiFillTwitterCircle className="text-4xl" title="Twitter" />
              </a>
            </div> */}
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-2/5 order-2 md:order-1 mb-8 md:mb-0">
          <div className="my-4 mx-auto max-w-[250px] md:max-w-[300px]">
            <Tilt>
              <img src={myImg} className="mx-auto rounded-full border-4 border-white shadow-lg" alt="avatar" />
            </Tilt>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home2;
