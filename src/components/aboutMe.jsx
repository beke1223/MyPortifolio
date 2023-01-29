import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import SocialMedia from "./Footer";

function AboutMe() {
  return (
    <div
      style={{
        position: "relative",
        top: "-23rem",
        left: "40%",
        width: "40%",
        boxShadow: "5px 5px 30px rgba(143, 136, 136, 0.5)",
      }}
    >
      <h2>Hello I am Tinchel</h2>
      <h3>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum iure
        quaerat dolores a sint fugiat qui error vel. Sequi quos ut vel quibusdam
        dolorum, dolores voluptates optio ea saepe vero?{" "}
      </h3>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
        laborum ullam suscipit optio atque nulla, dolores id eaque quia, impedit
        voluptate numquam pariatur nihil ipsam temporibus reiciendis hic,
        laudantium fugit. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Facere quo, vel delectus tenetur quod recusandae odit eius
        cupiditate tempora consectetur necessitatibus ad blanditiis incidunt
        eligendi nobis voluptate inventore libero voluptates. Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Eaque reiciendis porro quo,
        adipisci consequatur corporis voluptas, perferendis nihil ut quia fugiat
        non blanditiis illum, deleniti illo! Similique aliquam nostrum
        inventore. Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <SocialMedia customClass="social-link-aboutMe" />
      <Link to="mailto:asebekalu@gmail.com">
        <Button className="outline-info w-75 mt-3 " variant="outline-info">
          <h1>Contact</h1>
        </Button>
      </Link>
    </div>
  );
}
export default AboutMe;
