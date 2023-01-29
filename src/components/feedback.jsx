import Button from "react-bootstrap/Button";
import { Col, Form, Row } from "react-bootstrap";
import Rating from "./rating";
function Feedback() {
  return (
    <Row>
      <Col md={10}>
        <Form className="m-5">
          <Form.Label controlId="txtArea" htmlFor="txtArea">
            FeedBack :
          </Form.Label>
          <textarea
            id="txtArea"
            placeholder={"leave a comment here"}
            style={{
              height: "30%",
              width: "100%",
              backgroundColor: "black",
              color: "white",
            }}
            rows={5}
            className="feedback-text-area"
          />

          <Button size="lg" variant="outline-success" style={{ width: "20%" }}>
            Send
          </Button>
        </Form>
      </Col>
      <Col md={2}>
        <Rating />
      </Col>
    </Row>
  );
}
export default Feedback;
