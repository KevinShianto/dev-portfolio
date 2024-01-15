import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Kevin Shianto </span>
            from <span className="purple"> Surabaya, Indonesia.</span>
            <br />
            I am currently employed as a web developer at Geniebook.
            <br />
            I have revamped the customer website using ReactJS.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity mb-2">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity mb-2">
              <ImPointRight /> Reading Mangas
            </li>
            <li className="about-activity">
              <ImPointRight /> Read tech articles
            </li>
          </ul>

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Shianto</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
