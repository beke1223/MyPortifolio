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
import { useNavigate } from "react-router";
import { Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";

const cert = [
  {
    site: "Coursera",
    language: "JavaScript",
    url: "https://www.Coursera.com/",
    img: img1,
  },
  {
    site: "Coursera",
    language: "JavaScript",
    url: "https://www.Coursera.com/",
    img: img2,
  },
  {
    site: "Hackerrank",
    language: "Java",
    url: "https://www.Hackerrank.com/",
    img: img3,
  },
  {
    site: "SoloLearn",
    language: "JavaScript",
    url: "https://www.SoloLearn.com/",
    img: img4,
  },
  {
    site: "SoloLearn",
    language: "Java",
    url: "https://www.SoloLearn.com/",
    img: img5,
  },
  {
    site: "SoloLearn",
    language: "Html",
    url: "https://www.SoloLearn.com/",
    img: img6,
  },
  {
    site: "SoloLearn",
    language: "Css",
    url: "https://www.SoloLearn.com/",
    img: img7,
  },
  {
    site: "SoloLearn",
    language: "React+Redux",
    url: "https://www.SoloLearn.com/",
    img: img8,
  },
  {
    site: "Coursera",
    language: "JavaScript",
    url: "https://www.Coursera.com/",
    img: img9,
  },
];

function Certificates() {
  const navigate = useNavigate();
  const CheckCert = (props) => {
    navigate(props.site);
  };

  return (
    <Accordion
      className="mb-5 mt-5 "
      style={{ color: "white", backgroundColor: "transparent" }}
    >
      <Accordion.Header>Certificates</Accordion.Header>
      <Accordion.Body style={{ backgroundColor: "transparent" }}>
        <Accordion.Item style={{ backgroundColor: "transparent" }}>
          <Carousel className="text-center">
            {cert.map((elements) => {
              return (
                <Carousel.Item>
                  <Card
                    className="mb-5"
                    style={{
                      width: "40%",
                      height: "40%",
                      left: "30%",
                    }}
                  >
                    <Card.Header>{elements.site}</Card.Header>
                    <Card.Body>
                      <Card.Title>{elements.language}</Card.Title>
                      <Image src={elements.img} width="100%" />
                    </Card.Body>
                    <Card.Footer>
                      <Link to={`${elements.url}`} target="_blank">
                        {" "}
                        <Button onClick={() => CheckCert(elements.url)}>
                          {" "}
                          Check{" "}
                        </Button>
                      </Link>
                    </Card.Footer>
                  </Card>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </Accordion.Item>
      </Accordion.Body>
    </Accordion>
  );
}
export default Certificates;
