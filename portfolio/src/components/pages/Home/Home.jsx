import React from "react";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import homeLogo from "../../../assets/Pavan.png";

function Home() {
  return (
    <section className="relative">
      <div className="home-section bg-gradient-to-r from-purple-500 to-indigo-600 bg-no-repeat bg-cover pt-10 pb-10 min-h-screen">
        {console.log("Hello")}
        <Particle />
        {console.log("Hello, Particles")}
        <div className="home-content container mx-auto px-4 md:px-12 lg:px-24 min-h-screen flex flex-wrap items-center">
          <div className="w-full md:w-1/2 lg:w-3/5">
            <div className="p-4 md:p-8">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Hi There!{" "}
                <span className="wave" role="img" aria-label="wave">
                  👋🏻
                </span>
              </h1>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                I'm
                <span className="text-purple-400"> Pavan Kumar Kuruva</span>
              </h1>
              <div className="py-4">
                <Type />
                {console.log("Hello, Type")}
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-2/5 md:mb-0">
            <img
              src={homeLogo}
              alt="home pic"
              className="mx-auto max-h-60 md:max-h-80"
            />
          </div>
        </div>
      </div>
      <Home2 />
      {console.log("Hello, Home2")}
    </section>
  );
}

export default Home;
