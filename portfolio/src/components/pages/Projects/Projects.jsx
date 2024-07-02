import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCards from "./ProjectCards";
import Particle from "../Particle";
import ThreeDAnimation from "./Animation";
import leaf from "../../../assets/home-bg.jpg";
import emotion from "../../../assets/home-bg.jpg";
import editor from "../../../assets/Professional-Portfolio.png";
import chatify from "../../../assets/Food-Del-App.png";
import suicide from "../../../assets/home-bg.jpg";
import bitsOfCode from "../../../assets/home-bg.jpg";

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
              imgPath={chatify}
              isBlog={false}
              title="Food Delivery Application"
              description="A dynamic MERN stack project showcasing seamless food ordering, real-time tracking, and secure payments with Stripe integration, highlighting my skills in front-end and back-end development."
              ghLink="https://github.com/PavanKumar529/MERN-Full-Stack-Food-Delivery-Website/"
              demoLink="https://"
            />
          </Col>

          <Col className="flex justify-center">
            <ProjectCards
              imgPath={editor}
              isBlog={false}
              title="MERN Stack Portfolio"
              description="An online code and markdown editor built with React.js, supporting real-time editing and previewing of HTML, CSS, and JavaScript."
              ghLink="https://github.com/"
              demoLink="https://editor-io-demo.com/"
            />
          </Col>

          <Col className="flex justify-center">
            <ProjectCards
              imgPath={bitsOfCode}
              isBlog={false}
              title="Resume Builder"
              description="A robust web application that allows users to build professional resumes with ease, featuring customizable templates and real-time previews."
              ghLink="https://github.com/PavanKumar529/Resume_Builder"
              demoLink="https://resume-builder-demo.com/"
            />
          </Col>

          <Col className="flex justify-center">
            <ProjectCards
              imgPath={leaf}
              isBlog={false}
              title="Project 4"
              description="A machine learning model trained with PyTorch to classify plant diseases from images, achieving high accuracy with ResNet34."
              ghLink="https://github.com/"
              demoLink="https://plant-ai-demo.com/"
            />
          </Col>
          <Col className="flex justify-center">
            <ProjectCards
              imgPath={suicide}
              isBlog={false}
              title="Project 5"
              description="A Natural Language Processing project aimed at detecting suicide-related posts on social media to aid in suicide prevention efforts."
              ghLink="https://github.com/"
            />
          </Col>
          <Col className="flex justify-center">
            <ProjectCards
              imgPath={emotion}
              isBlog={false}
              title="To do Manager"
              description="A convolutional neural network classifier trained to detect human emotions from facial expressions using the FER-2013 dataset."
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
