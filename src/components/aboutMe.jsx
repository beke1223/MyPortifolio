import { Button } from "react-bootstrap";

function AboutMe() {
  return (
    <div className="about-me">
      <h2>Hello I am Bekalu Atto</h2>
      <h3>Front-End Web and Mobile-App Developer</h3>
      <p>
        I am <strong>Front-End web</strong> and{" "}
        <strong>Mobile App Developer</strong> in Java and Flutter From Ethiopia.
        well organised person , love problem solving and exploring new things ,
        always open to learn new things and Delivering highly executed front-end
        user experiences by paying close attention to the nuances of design,
        optimization, and performance.
        <br />
        <strong>
          I'm open to Job opportunities where I can contribute, learn and grow.
          If you have a good opportunity that matches my skills and experience
          then don't hesitate to contact me.
        </strong>
      </p>
      <a href="mailto:asebekalu@gmail.com">
        <Button className="outline-info w-75 mt-3 " variant="outline-info">
          <h1>Contact</h1>
        </Button>
      </a>
    </div>
  );
}
export default AboutMe;
