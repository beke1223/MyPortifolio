import { Accordion, Col, ListGroup, Row } from "react-bootstrap";
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
    <Accordion defaultActiveKey="0" className="mt-5" flush>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Skills</Accordion.Header>
        <Accordion.Body style={{ backgroundColor: "black" }}>
          <Card className="skills-Circular " bg="dark">
            <Card.Body>
              <Card.Text className="">
                <ListGroup>
                  <div className="langs ">
                    {Lanskils.map((skill) => {
                      return (
                        <ListGroup.Item>
                          {" "}
                          <div className="indLang text-center">
                            <Row>
                              <Col>
                                {" "}
                                <p>{skill.language}</p>
                              </Col>
                              <Col>
                                {/* <p>{skill.value}</p> */}
                                <p>
                                  {skill.value > 50 && skill.value < 71
                                    ? "Basic"
                                    : skill.value < 91 && skill.value > 71
                                    ? " Medium"
                                    : skill.value != 0 && skill.value > 91
                                    ? "High"
                                    : ""}
                                </p>
                              </Col>
                            </Row>
                          </div>
                        </ListGroup.Item>
                      );
                    })}
                  </div>{" "}
                </ListGroup>
              </Card.Text>
            </Card.Body>
          </Card>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
export default Skills;
