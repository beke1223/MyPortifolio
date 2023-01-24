import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import img1 from "../img/img (1).jpg";
import img2 from "../img/img (1).png";
import img3 from "../img/img (3).jpg";
import img4 from "../img/img (2).png";
import img5 from "../img/img (5).jpg";
import img6 from "../img/img (6).jpg";
import img7 from "../img/img (7).jpg";
import img8 from "../img/img (4).jpg";
import img9 from "../img/img (2).jpg";

const cert = [
  {
    site: "Coursera",
    language: "JavaScript",
    url: "www.Cousera.com/",
    img: img1,
  },
  {
    site: "Coursera",
    language: "JavaScript",
    url: "www.Cousera.com/",
    img: img2,
  },
  {
    site: "Hackerrank",
    language: "Java",
    url: "www.Hackerrank.com/",
    img: img3,
  },
  {
    site: "SoloLearn",
    language: "JavaScript",
    url: "www.SoloLearn.com/",
    img: img4,
  },
  {
    site: "SoloLearn",
    language: "Java",
    url: "www.SoloLearn.com/",
    img: img5,
  },
  {
    site: "SoloLearn",
    language: "Html",
    url: "www.SoloLearn.com/",
    img: img6,
  },
  {
    site: "SoloLearn",
    language: "Css",
    url: "www.SoloLearn.com/",
    img: img7,
  },
  {
    site: "SoloLearn",
    language: "React+Redux",
    url: "www.SoloLearn.com/",
    img: img8,
  },
  {
    site: "Coursera",
    language: "JavaScript",
    url: "www.Cousera.com/",
    img: img9,
  },
];

function certificates() {
  return (
    // <div className="certificates">
    <Carousel className="certCarousel">
      {cert.map((elements) => {
        return (
          <Carousel.Item>
            <Card
              className="card-cert"
              style={{ width: "50%", marginLeft: "30%" }}
            >
              <Card.Header>{elements.site}</Card.Header>
              <Card.Body>
                <Card.Title>{elements.language}</Card.Title>
                <Image src={elements.img} width="100%" height={"100%"} />
              </Card.Body>
              <Card.Footer>
                <Button to={elements.url} style={{ marginLeft: "10%" }}>
                  Check
                </Button>
              </Card.Footer>
            </Card>
          </Carousel.Item>
        );
      })}
    </Carousel>
    // </div>
  );
}
export default certificates;
