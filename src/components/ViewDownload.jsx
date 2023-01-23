import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaDownload } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

function ViewDownLoad() {
  return (
    <div className="viewDow">
      <Row className="btnRow">
        <Col md={6}>
          <Button
            className="btn"
            size="lg"
            style={{ width: "80%", marginLeft: "20%", color: "white" }}
            variant="outline-success"
          >
            View &nbsp; <FaEye />
          </Button>
        </Col>
        <Col md={6}>
          <Button
            className="btn my-1"
            size="lg"
            style={{ width: "80%", color: "white" }}
            variant="outline-success"
          >
            Download&nbsp;
            <FaDownload />
          </Button>
        </Col>
      </Row>
    </div>
  );
}
export default ViewDownLoad;
