import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

function ViewDownLoad() {
  return (
    <div className="skills">
      <Row style={{ width: "100%" }}>
        <Col>
          <Card style={{ width: "100%" }}>
            <Card.Body>
              <Button className="btn" size="lg" style={{ width: "100%" }}>
                View
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Button className="btn" size="lg" style={{ width: "100%" }}>
                Download
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
export default ViewDownLoad;
