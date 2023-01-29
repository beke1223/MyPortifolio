import tinchel from "../img/tinchel.png";
import Image from "react-bootstrap/Image";
import AboutMe from "./aboutMe";
import { Col, Row } from "react-bootstrap";

var info = [
  {
    name: "Tinchel",
    Email: "Tinchel@gmail.com",
    Phone: +251935488958,
  },
];

function Me() {
  return (
    <div className="me">
      <hr className="horLine" />
      <div className="d-grid text-center">
        <Image src={tinchel} alt="aa" className="round-circle pImage w-25 " />
        <AboutMe />
      </div>
    </div>
  );
}
export default Me;
