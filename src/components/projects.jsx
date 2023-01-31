import p1 from "../img/pcBg.jpg";
import p2 from "../img/pcBg.jpg";
import p3 from "../img/pcBg.jpg";
import p4 from "../img/pcBg.jpg";
import pcBg from "../img/pcBg.jpg";
import { Col, Container, Image, Row } from "react-bootstrap";

const pimg = [p1, p2, p3, p4];

function Projects() {
  return (
    <Container fluid className="text-center">
      <h2 className="project-header">Recent Projects</h2>
      <Row className="projects mt-5">
        {pimg.map((index, value) => {
          return (
            <Col md={6} sm={12} lg={6} className="projects-individual">
              {" "}
              <Image src={index} alt={value} width={"100%"} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
export default Projects;
