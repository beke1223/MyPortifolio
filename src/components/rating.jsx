import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";

function Rating() {
  const [rate, setRate] = useState();

  const ratingChanged = (newRating) => {
    console.log(newRating);
    setRate(newRating);
  };

  return (
    <Container className="m-5 d-flex">
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
      {rate}
    </Container>
  );
}

export default Rating;
