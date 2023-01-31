import Button from "react-bootstrap/Button";
import { Col, Form, Row } from "react-bootstrap";
import Rating from "./rating";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import emailjs from "@emailjs/browser";
import { useRef } from "react";

function Feedback() {
  const [msg, setMsg] = useState("");

  const form = useRef();

  const SendData = async (e) => {
    e.preventDefault();
    setMsg(e.target.value);

    e.preventDefault();

    // emailjs
    //   .sendForm(
    //     "service_96g0lkq",
    //     "template_k7rvszh",
    //     form.current,
    //     "pKLL9ZtfDAF0dOmzf"
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );

    await axios
      .Send("https://mypf-5f18f-default-rtdb.firebaseio.com/feedbacks", {
        feedback: e.target.value,
      })
      .then((res) => {
        console.log("Success full");
      })
      .catch((err) => {
        console.log(`failed ,${err}`);
      });
  };

  return (
    <Row>
      <Col md={10}>
        <Form className="m-5" onSubmit={SendData} ref={form}>
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

          <Button
            type="submit"
            size="lg"
            variant="outline-success"
            style={{ width: "20%" }}
          >
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
