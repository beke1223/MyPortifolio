import image from "../img/photo@me.jpg";
import Image from "react-bootstrap/Image";
import AboutMe from "./aboutMe";

function Me() {
  return (
    <div className="me">
      <hr className="horLine" />
      <div className=" text-center">
        <Image src={image} alt="aa" className="round-circle pImage w-50" />
        <AboutMe />
      </div>
    </div>
  );
}
export default Me;
