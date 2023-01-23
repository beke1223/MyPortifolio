import Button from "react-bootstrap/Button";
import { FloatingLabel, Form } from "react-bootstrap";
function Feedback() {
  return (
    <div className="feedback">
      <FloatingLabel
        controlId="txtArea"
        label="FeedBack"
        className="mb-3"
        style={{ color: "black" }}
      >
        <Form.Control
          as="textarea"
          id="txtArea"
          placeholder={"leave a comment here"}
          style={{
            height: "15%",
            width: "40%",
          }}
        />
      </FloatingLabel>

      <Button className="ms-5 btn-feedback" size="lg">
        Send
      </Button>
    </div>
  );
}
export default Feedback;
