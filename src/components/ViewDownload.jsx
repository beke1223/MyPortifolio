import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaDownload } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { Card as Container, Modal } from "react-bootstrap";
import { useState } from "react";
import { Image } from "react-bootstrap";
import cv from "../img/cv.jpg";
import { Link } from "react-router-dom";

function ViewDownLoad() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Container className="viewDow text-center">
      <p className="cv mb-5">CV</p>
      <Row className="btnRow mt-5">
        <Col md={6}>
          <Button
            onClick={handleShow}
            className="btn toggle ms-5 viewDownButton"
            size="lg"
            variant="outline-success"
          >
            <p className="view-downButton-text">
              {" "}
              View &nbsp; <FaEye />
            </p>
          </Button>
        </Col>
        <Col md={6}>
          <Link
            to={
              "https://drive.google.com/uc?export=download&id=1n1DyfEfCZ4EB70p_BiLDmpNJDALPeAQI"
            }
          >
            <Button
              className="btn viewDownButton"
              size="lg"
              variant="outline-success"
            >
              <p className="view-downButton-text">
                Download &nbsp;
                <FaDownload />
              </p>
            </Button>
          </Link>
        </Col>
      </Row>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop={"static"}
        keyboard={true}
        style={{ width: "90vm", maxWidth: "90vm", height: "100%" }}
        className="dialog-modal modal-lg"
      >
        <Modal.Header></Modal.Header>
        <Modal.Body>
          <Image src={cv} width="100%" />
        </Modal.Body>
        <Modal.Footer>
          <Row>
            <Col md={6} lg={6} sm={12}>
              <Link
                to={
                  "https://drive.google.com/uc?export=download&id=1n1DyfEfCZ4EB70p_BiLDmpNJDALPeAQI"
                }
              >
                <Button>Download</Button>
              </Link>
            </Col>
            <Col md={6} lg={6} sm={12}>
              <Button onClick={handleClose}>Close</Button>
            </Col>
          </Row>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}
export default ViewDownLoad;
