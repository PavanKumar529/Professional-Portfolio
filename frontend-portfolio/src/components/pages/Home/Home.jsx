import React from "react";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import homeLogo from "../../../assets/Pavan.png";
import resumePdf from "../../../assets/PAVAN_KUMAR_KURUVA.pdf"
function Home() {
  return (
    <section className="relative">
      <div className="home-section bg-gradient-to-r from-purple-500 to-indigo-600 bg-no-repeat bg-cover pt-10 pb-2 min-h-screen">
        <Particle />
        <div className="home-content container mx-auto px-4 md:px-12 lg:px-84 min-h-screen flex flex-wrap items-center justify-between">
          <div className="w-full md:w-1/2 lg:w-3/5">
            <div className="p-4 md:p-8">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>
              <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">
                I'M <strong className="text-yellow-400">Pavan Kumar Kuruva</strong>
              </h1>
              <div className="text-xl md:text-2xl text-yellow-400 font-bold mb-4">
                <Type />
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-2/5 flex justify-center md:justify-center">
            <img
              src={homeLogo}
              alt="home pic"
              className="profile-img transition duration-300 transform hover:scale-110"
            />
          </div>
        </div>
      </div>
      <Home2 />
    </section>
  );
}

export default Home;
