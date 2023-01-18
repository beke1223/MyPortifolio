import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { ProgressBar } from "react-bootstrap";
var LanskilsL = [
  {
    language: "C++",
    value: 60,
  },
  {
    language: "Java",
    value: 70,
  },
  {
    language: "Python",
    value: 80,
  },
  {
    language: "JavaScript",
    value: 80,
  },
  {
    language: "Html",
    value: 850,
  },
];
var LanskilsR = [
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
    value: 70,
  },
  {
    language: "JQuery",
    value: 90,
  },
  {
    language: "Flutter",
    value: "loading ...",
  },
];

function Skills() {
  return (
    <div className="skillsComp">
      <Row>
        {" "}
        <Col sm={2} md={2} style={{ width: "50%" }}>
          <Card>
            <Card.Body>
              {LanskilsL.map((element) => {
                return (
                  <div className="skillsPair" style={{ display: "flex" }}>
                    <h2
                      style={{
                        width: "20%",
                        textAlign: "start",
                        color: "black",
                      }}
                    >
                      {element.language}
                    </h2>
                    <ProgressBar
                      now={element.value}
                      label={element.value + " %"}
                      style={{ width: "80%" }}
                    />
                  </div>
                );
              })}
            </Card.Body>
          </Card>
        </Col>
        <Col sm={2} md={2} style={{ width: "50%" }}>
          <Card>
            <Card.Body>
              {LanskilsR.map((element) => {
                return (
                  <div className="skillsPair" style={{ display: "flex" }}>
                    <h2
                      style={{
                        width: "20%",
                        textAlign: "start",
                        color: "black",
                      }}
                    >
                      {element.language}
                    </h2>
                    <ProgressBar
                      now={element.value}
                      label={element.value + " %"}
                      style={{ width: "80%" }}
                    />
                  </div>
                );
              })}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
export default Skills;
