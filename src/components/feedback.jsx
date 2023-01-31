import Button from "react-bootstrap/Button";
import { Col, Container, Form, Modal, Row } from "react-bootstrap";
import Rating from "./rating";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function Feedback() {
  useEffect(() => {
    console.log("some body opened");
  });

  const [ip, setIP] = useState("");
  const [country, setCountry] = useState("");
  const [msg, setMsg] = useState("");
  const [show, setShow] = useState(false);
  //creating function to load ip address from the API
  const getData = async () => {
    const res = await axios.get("https://geolocation-db.com/json/");

    setCountry(res.data.country_name);
    setIP(res.data.IPv4);
  };

  useEffect(() => {
    getData();
  }, []);

  const SendData = async (e) => {
    e.preventDefault();

    const res = await fetch(
      "https://mypf-5f18f-default-rtdb.firebaseio.com/feedbacks.json",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          msg,
          address: ip,
          country: country,
        }),
      }
    );

    res.status === 200 ? setShow(true) : setShow(false);
  };

  return (
    <Container>
      <Rating />

      <Form className="m-5" onSubmit={SendData}>
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
          onChange={(e) => setMsg(e.target.value)}
        />

        <Button
          type="submit"
          size="lg"
          variant="outline-success"
          style={{ width: "20%" }}
        >
          Send
        </Button>
      </Form>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        style={{ color: "black" }}
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Success
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Thank You For Your Feedback</p>
        </Modal.Body>
      </Modal>
    </Container>
  );
}
export default Feedback;
