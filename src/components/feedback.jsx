import Button from "react-bootstrap/Button";
import { Badge, Col, Container, Form, Modal, Row } from "react-bootstrap";

import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import ReactStars from "react-rating-stars-component";

function Feedback() {
  useEffect(() => {
    console.log("some body opened");
  });

  const [ip, setIP] = useState("");
  const [country, setCountry] = useState("");
  const [msg, setMsg] = useState("");
  const [show, setShow] = useState(false);
  const [rate, setRate] = useState(null);
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
          rating: rate,
        }),
      }
    );

    res.status === 200 ? setShow(true) : setShow(false);
    setMsg("");
  };

  const ratingChanged = (newRating) => {
    console.log(newRating);
    setRate(newRating);
  };
  return (
    <Container>
      <Container className="mb-3 mt-3 d-flex">
        <h5 className="mt-4 me-4">Rate My Pf</h5>

        <ReactStars
          count={5}
          size={50}
          activeColor="#ffd700"
          isHalf={true}
          emptyIcon={<i className="far fa-star"></i>}
          halfIcon={<i className="fa fa-star-half-alt"></i>}
          fullIcon={<i className="fa fa-star"></i>}
          onChange={ratingChanged}
        />

        {rate !== null ? (
          <Badge
            bg="success"
            className="ms-3 text-center  "
            style={{ borderRadius: "50%" }}
          >
            <span style={{ position: "relative", top: "40%" }}>{rate}</span>
          </Badge>
        ) : null}
      </Container>

      <Form className="m-1" onSubmit={SendData}>
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
          value={msg}
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
