import React from "react";
import "./App.css"
import Navbar from "./components/Navbar";
// import { Outlet } from "react-router-dom";
import Layout from "./components/pages/Layout.jsx";
// import Home from "./components/pages/Home.jsx";
// import About from "./components/pages/About.jsx";
// import Projects from "./components/pages/Projects.jsx";
// import Resume from "./components/pages/Resume";
// import ContactUs from "./components/pages/ContactUs.jsx";

const App = () => {
  return (
    <div className="bg-gradient-to-left min-h-screen font-raleway">
      <Navbar />
      <Layout />
    </div>
  );
};


export default App;
