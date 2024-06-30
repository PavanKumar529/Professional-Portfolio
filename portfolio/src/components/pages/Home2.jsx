import React from "react";
import myImg from "../../assets/Pavan.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <section className="from-purple-500 py-10 min-h-screen">
      <div className="container mx-auto px-4 md:px-12 lg:px-24 min-h-screen flex flex-wrap items-center">
        <div className="w-full md:w-1/2 lg:w-3/5 md:order-2">
          <div className="p-4 md:p-8">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
              LET ME{" "}
              <span className="text-purple-400"> INTRODUCE </span> MYSELF
            </h1>
            <p className="text-base md:text-lg text-white mb-6">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />
              I am fluent in classics like
              <span className="font-bold text-purple-400"> C++, Javascript, and Go. </span>
              <br />
              <br />
              My fields of interest are building new{" "}
              <span className="font-bold text-purple-400">Web Technologies and Products </span>
              and also in areas related to{" "}
              <span className="font-bold text-purple-400">Blockchain.</span>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <span className="font-bold text-purple-400">Node.js</span> and
              <span className="font-bold text-purple-400"> Modern Javascript Library and Frameworks </span>
              like <span className="font-bold text-purple-400">React.js and Next.js</span>.
            </p>
          </div>
          
          <div className="text-center md:text-left">
            <ul className="flex justify-center md:justify-start">
              <li className="mr-4">
                <a
                  href="https://github.com/PavanKumar529"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-purple-400 transition duration-300 cursor-pointer"
                >
                  <AiFillGithub className="text-3xl" />
                </a>
              </li>

              <li className="mr-4">
                <a
                  href="https://www.linkedin.com/in/soumyajit4419/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-purple-400 transition duration-300 cursor-pointer"
                >
                  <FaLinkedinIn className="text-3xl" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-2/5 md:order-1 mb-8 md:mb-0">
          <div className="my-4 md:my-0 mx-auto max-w-xs md:max-w-full">
            <Tilt>
              <img src={myImg} className="mx-auto" alt="avatar" />
            </Tilt>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home2;
