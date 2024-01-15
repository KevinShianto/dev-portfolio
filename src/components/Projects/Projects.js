import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import LetterTyping from "../../Assets/Projects/letter-typing.png";
import MathQuiz from "../../Assets/Projects/math-quiz.png";
import PokeGuess from "../../Assets/Projects/poke-guess.png";
import TitanWeb from "../../Assets/Projects/titan-web.png";
import Roxy from "../../Assets/Projects/roxy.png";
import CiputraApps from "../../Assets/Projects/ciputra-apps.png";
import WSS from "../../Assets/Projects/wss.png";
import Kemanayo from "../../Assets/Projects/kemanayo.png";
import Geniebook from "../../Assets/Projects/geniebook.png";

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
        <h1 className="text-white font-medium mt-5">Web</h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Geniebook}
              isBlog={false}
              title="Geniebook Web"
              description="Main website for student to do learning from Geniebook. From creating and do worksheets, watch online lessons, and even chatting with professional teachers"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={LetterTyping}
              isBlog={false}
              title="Letter Typing Quiz"
              description="Letter typing quiz game with stopwatch to count how fast the player can type the scrambled and random letters."
              ghLink="https://github.com/KevinShianto/react-typing-quiz"
              demoLink="https://kevinshianto.github.io/react-typing-quiz/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MathQuiz}
              isBlog={false}
              title="Math Quiz Game"
              description="A simple math quiz game to count the sum or difference between two randomised numbers."
              ghLink="https://github.com/KevinShianto/react-math-quiz"
              demoLink="https://kevinshianto.github.io/react-math-quiz/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PokeGuess}
              isBlog={false}
              title="Pokemon Guess Game"
              description="Player will be given 60 seconds to guess the randomised pokemon. Every 12 seconds, a new hint will be revealed to player to help them identify the pokemon."
              ghLink="https://github.com/KevinShianto/pokemon-guess-games"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TitanWeb}
              isBlog={false}
              title="Titan Web"
              description="The Titan E-Commerce website 
                is a website that sells 
                motorcycle parts. Like any 
                regular e-commerce website, 
                customers can buy goods from 
                the Titan Store, add items to 
                wishlists, review products, and 
                also track orders."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Roxy}
              isBlog={false}
              title="Roxy Apothecary"
              description="Develop a Point of Sale web 
              for Roxy Pharmacy based on 
              Frappe Framework. The POS 
              also had some custom made 
              tools to help cashiers input 
              doctor’s prescriptions more 
              easily."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={WSS}
              isBlog={false}
              title="WSS Website"
              description="WSS or Wijaya Super Store is an E-Commerce website specially designed 
              for Sellers. WSS helps clients to expand 
              their sales nationwide."
            />
          </Col>
        </Row>

        {/* Mobile Apps */}
        <h1 className="text-white font-medium mt-5">Mobile Apps</h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={{ span: 4 }} className="project-card">
            <ProjectCard
              imgPath={CiputraApps}
              isBlog={false}
              title="Ciputra Apps"
              description="The Ciputra Mall application is an 
              application for customers at Ciputra
              Mall Jakarta. The app will save 
              customer points after they shop and can 
              be used to buy promo coupons. The 
              application also provides information 
              such as current or upcoming events, 
              tenant locations, and promotions"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Kemanayo}
              isBlog={false}
              title="Kemanayo"
              description="Kemanayo apps is an application for 
              tourist or domestic adventurer looking 
              for a brand new memorable adventure. 
              Not only buying a trip, but customer can 
              also make a trip and earn money"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
