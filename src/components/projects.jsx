import am1 from "../img/proj/amazone (2).png";
import am2 from "../img/proj/amazone (3).png";
import exp from "../img/proj/expenseTracker (1).png";
import exp1 from "../img/proj/expenseTracker (2).png";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
const pimg = [am1, am2, exp, exp1];

function Projects() {
  return (
    <Container fluid className="text-center">
      <h2 className="project-header">Recent Projects</h2>
      <Row className="projects mt-5">
        {pimg.map((index, value) => {
          return (
            <Col md={6} sm={6} lg={6} className="projects-individual">
              <Image src={index} alt={value} width={"100%"} />
            </Col>
          );
        })}
      </Row>
      <Link to={"https://github.com/beke1223"} target="_blank">
        <Button className="btn-lg w-25 mt-5">More ...</Button>
      </Link>
    </Container>
  );
}
export default Projects;
