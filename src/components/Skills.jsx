import { Col, Container, Row } from "react-bootstrap";
import cpp from "../img/icons/c++.svg";
import java from "../img/icons/java.svg";
import python from "../img/icons/python.svg";
import js from "../img/icons/javascript.svg";
import html from "../img/icons/html.svg";
import css from "../img/icons/css2.svg";
import flutter from "../img/icons/flutter.svg";
import bootstrap from "../img/icons/bootstrap.svg";
import react from "../img/icons/react.svg";
import { Image } from "react-bootstrap";

var Lanskils = [
  {
    language: "C++",
    value: 60,
    icon: cpp,
  },
  {
    language: "Java",
    value: 80,
    icon: java,
  },
  {
    language: "Python",
    value: 75,
    icon: python,
  },
  {
    language: "JavaScript",
    value: 80,
    icon: js,
  },
  {
    language: "Html",
    value: 85,
    icon: html,
  },
  {
    language: "Css",
    value: 90,
    icon: css,
  },
  {
    language: "Bootstrap",
    value: 90,
    icon: bootstrap,
  },
  {
    language: "React Js",
    value: 85,
    icon: react,
  },
  {
    language: "Flutter",
    value: 60,
    icon: flutter,
  },
];

function Skills() {
  return (
    <Container fluid className="mt-5 text-center skills-container">
      <p className="skill-header mt-3">Qualification</p>

      <Row>
        {Lanskils.map((skill) => {
          return (
            <Col md={6} lg={6} sm={12} xl={6} className="m-3 indLang">
              <p>{skill.language}</p>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
export default Skills;
