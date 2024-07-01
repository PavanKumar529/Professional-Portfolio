import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCards from "./ProjectCards";
import Particle from "../Particle";
import ThreeDAnimation from "./Animation";
import leaf from "../../../assets/home-bg.jpg";
import emotion from "../../../assets/home-bg.jpg";
import editor from "../../../assets/home-bg.jpg";
import chatify from "../../../assets/home-bg.jpg";
import suicide from "../../../assets/home-bg.jpg";
import bitsOfCode from "../../../assets/home-bg.jpg";

function Projects() {
  return (
    <Container fluid className="project-section bg-gray-900 text-white">
      <Particle />
      <Container className="py-16">
        <h1 className="text-4xl font-bold mb-4 text-center">
          My Recent <span className="text-purple-600">Works</span>
        </h1>
        <p className="text-center mb-8">
          Here are a few projects I've worked on recently.
        </p>
        <Row className="flex flex-wrap justify-center gap-8">
          <Col className="flex justify-center">
            <ProjectCards
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>
          <Col className="flex justify-center">
            <ProjectCards
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bits-0f-C0de"
              description="My personal blog page build with Next.js and Tailwind CSS."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>
          <Col className="flex justify-center">
            <ProjectCards
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js."
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>
          <Col className="flex justify-center">
            <ProjectCards
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifier model using 'PyTorch'."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>
          <Col className="flex justify-center">
            <ProjectCards
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Language Processing' for the detection of suicide-related posts."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
            />
          </Col>
          <Col className="flex justify-center">
            <ProjectCards
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backend."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
            />
          </Col>
        </Row>
      </Container>
      <ThreeDAnimation />
    </Container>
  );
}

export default Projects;
