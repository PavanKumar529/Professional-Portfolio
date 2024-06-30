import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from "./components/pages/Layout.jsx"
import Home from "./components/pages/Home.jsx"
import About from "./components/pages/About.jsx"
import Projects from "./components/pages/Projects.jsx"
import Resume from "./components/pages/Resume"
import ContactUs from "./components/pages/ContactUs.jsx"

let route = createBrowserRouter( [{
  path: "/",
  element: <Layout/>,
  children: [
    {
      path: "",
      element: <Home/>
    },
    {
      path: "about",
      element: <About/>
    },
    {
      path: "projects",
      element: <Projects/>
    },
    {
      path: "resume",
      element: <Resume/>
    },
    {
      path: "contact",
      element: <ContactUs/>
    }
  ]
}])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = { route }>
      <App />
    </RouterProvider>
  </React.StrictMode>,
)
