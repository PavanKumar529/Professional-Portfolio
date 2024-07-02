import React from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import Layout from "./components/pages/Layout.jsx";
import Home from "./components/pages/Home/Home.jsx";
import About from "./components/pages/About/About.jsx";
import Projects from "./components/pages/Projects/Projects";
import Resume from "./components/pages/Resume";
import ContactUs from "./components/pages/ContactUs.jsx";
import Footer from "./components/Footer.jsx"

const App = () => {
  return (
    <div className="bg-gradient-to-left min-h-screen font-raleway">
      <Navbar />
      <Layout />
      {/* <Projects/> */}
      {/* <Home/>
      <Projects/>
      <Resume/>
      <ContactUs/> */}
      <Footer/>

    </div>
  );
};


export default App;
