import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import amazon from "../../Assets/Projects/amazon.jpg";
import netflix from "../../Assets/Projects/netflix.jpg";
import suicide from "../../Assets/Projects/suicide.png";
import apple from "../../Assets/Projects/apple-react.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={netflix}
              isBlog={false}
              title="Netflix Clone"
              description="Built Netflix-Replica app using React.js, Rest API, and the Movies Database (TMDB) which is an online video streaming service."
              ghLink="https://github.com/neway-aragaw/netflix-clone"
              demoLink="https://netflix-clone-4a30e.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={apple}
              isBlog={false}
              title="Apple Clone"
              description="Recreated Apple’s current website using React.js with created React components for various pages and sections, and Integrated Apple’s YouTube channel with REST API."
              ghLink="https://github.com/neway-aragaw/apple-clone"
              demoLink="https://apple-clone-135e7.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={amazon}
              isBlog={false}
              title="Amazon"
              description="Built Amazon-Replica app using React.js, Node.js, Express, and Firebase which is an e-commerce store with full functionality, front and back end."
              ghLink="https://github.com/neway-aragaw/amazon-clone"
              demoLink="https://ee-42727.web.app/"              
            />
          </Col>

         

   

    
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
