import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaDownload } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { Modal } from "react-bootstrap";
import { useState } from "react";
import { Image } from "react-bootstrap";
import cv from "../img/cv.jpg";

function ViewDownLoad() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="viewDow">
      <Row className="btnRow">
        <Col md={6}>
          <Button
            onClick={handleShow}
            className="btn toggle "
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

      <Modal
        show={show}
        onHide={handleClose}
        backdrop={"static"}
        keyboard={true}
        style={{ width: "100%", height: "100%" }}
      >
        <Modal.Header></Modal.Header>
        <Modal.Body>
          <Image src={cv} width="100%" />
        </Modal.Body>
        <Modal.Footer>
          <Row>
            <Col md={6} lg={6} sm={12}>
              <Button>Download</Button>
            </Col>
            <Col md={6} lg={6} sm={12}>
              <Button onClick={handleClose}>Close</Button>
            </Col>
          </Row>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
export default ViewDownLoad;
