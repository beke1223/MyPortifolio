import "./App.css";
import Me from "./components/me";
import ViewDownLoad from "./components/ViewDownload";
import Skills from "./components/Skills";
import Feedback from "./components/feedback";
import SocialMedia from "./components/Footer";

import { BrowserRouter, Link } from "react-router-dom";
import Projects from "./components/projects";
import "firebase/firestore";
import { Col, Row } from "react-bootstrap";

function App() {
  return (
    <BrowserRouter>
      <SocialMedia customClass="social-link-main" />

      <div className=" ">
        {/* <Navigation /> */}
        <Me />
        <ViewDownLoad />
        <div className="skill-feedback-cert">
          <Skills />
          {/* <Row>
          <Col sm={12} md={12} lg={6}>
            <AboutMe />
          </Col>

          <Col sm={12} md={12} lg={6}> */}
          {/* <Certificates /> */}
          <Projects />
          {/* </Col> */}
          {/* </Row> */}
          <Feedback />
          <footer className="header text-center">
            {" "}
            <h1>Tinchel</h1>
            <div
              className="text-center"
              style={{ backgroundColor: "transparent" }}
            >
              All Rights Reserved ! &nbsp;&nbsp;&copy; 2022
            </div>
          </footer>{" "}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
