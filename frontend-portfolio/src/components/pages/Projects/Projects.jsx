import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCards from "./ProjectCards";
import Particle from "../Particle";
import ThreeDAnimation from "./Animation";
import Food_Del_App from "../../../assets/Food-Del-App.png";
import Portfolio from "../../../assets/Professional-Portfolio.png";
import Resume_Builder from "../../../assets/home-bg.jpg";
import Weather_App from "../../../assets/Weather-App.png";
import E_Commerce from "../../../assets/home-bg.jpg";
import ToDo from "../../../assets/home-bg.jpg";

function Projects() {
  return (
    <Container fluid className="project-section bg-gray-900 text-white min-h-screen flex flex-col items-center">
      <Particle />
      <Container className="py-16 flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-4 text-center">
          My Recent <span className="text-purple-600">Works</span>
        </h1>
        <p className="text-center mb-8">
          Here are a few projects I've worked on recently.
        </p>
        <Row className="flex flex-wrap justify-center gap-16">
          <Col className="flex justify-center">
            <ProjectCards
              imgPath={Food_Del_App}
              isBlog={false}
              title="Food Delivery Application"
              description="A dynamic MERN stack project showcasing seamless food ordering, real-time tracking, and secure payments with Stripe integration, highlighting my skills in front-end and back-end development."
              ghLink="https://github.com/PavanKumar529/MERN-Full-Stack-Food-Delivery-Website/"
              demoLink="https://"
            />
          </Col>

          <Col className="flex justify-center">
            <ProjectCards
              imgPath={Portfolio}
              isBlog={false}
              title="MERN Stack Portfolio"
              description="Dynamic MERN portfolio showcasing proficiency in React, Node.js, and MongoDB. Features interactive elements and modern design for an engaging user experience."
              ghLink="https://github.com/"
              demoLink=""
            />
          </Col>

          <Col className="flex justify-center">
            <ProjectCards
              imgPath={Resume_Builder}
              isBlog={false}
              title="Resume Builder"
              description="Resume Builder leveraging MERN Stack technology for dynamic creation and customization of professional resumes. Seamlessly integrates MongoDB, Express.js, React.js, and Node.js to empower users in crafting personalized CVs with ease."
              ghLink="https://github.com/PavanKumar529/Resume_Builder"
              demoLink=""
            />
          </Col>

          <Col className="flex justify-center">
            <ProjectCards
              imgPath={Weather_App}
              isBlog={false}
              title="Weather Application"
              description="Dynamic Weather App built with React, fetching real-time weather data from OpenWeatherMap API. Provides accurate weather forecasts and intuitive user interface for seamless navigation and information retrieval."
              ghLink="https://github.com/"
              demoLink=""
            />
          </Col>
          <Col className="flex justify-center">
            <ProjectCards
              imgPath={E_Commerce}
              isBlog={false}
              title="E-Commerce"
              description="Dynamic E-commerce platform leveraging MERN stack for scalable performance and user-friendly interfaces. Seamlessly integrates MongoDB, Express.js, React, and Node.js for robust functionality and secure transactions."
              ghLink="https://github.com/"
            />
          </Col>
          <Col className="flex justify-center">
            <ProjectCards
              imgPath={ToDo}
              isBlog={false}
              title="To do Manager"
              description="Todo Manager powered by React, offering a streamlined interface for organizing tasks efficiently. Utilizes React's state management to prioritize, categorize, and manage daily tasks effectively."
              ghLink="https://github.com/"
            />
          </Col>
        </Row>
      </Container>
      <ThreeDAnimation />
    </Container>
  );
}

export default Projects;
