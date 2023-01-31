import { Accordion, Col, Container, ListGroup, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
var Lanskils = [
  {
    language: "C++",
    value: 60,
  },
  {
    language: "Java",
    value: 80,
  },
  {
    language: "Python",
    value: 75,
  },
  {
    language: "JavaScript",
    value: 80,
  },
  {
    language: "Html",
    value: 85,
  },
  {
    language: "Css",
    value: 90,
  },
  {
    language: "Bootstrap",
    value: 90,
  },
  {
    language: "React Js",
    value: 85,
  },
  {
    language: "Flutter",
    value: 60,
  },
];

function Skills() {
  return (
    <Container fluid className="mt-3 text-center skills-container">
      <p className="skill-header">Qualification</p>

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
