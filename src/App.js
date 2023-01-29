import "./App.css";
import Navigation from "./components/navigationBar";
import Me from "./components/me";
import ViewDownLoad from "./components/ViewDownload";
import Skills from "./components/Skills";
import Certificates from "./components/certificates";
import Feedback from "./components/feedback";
import SocialMedia from "./components/Footer";

import { BrowserRouter, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
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
          <Certificates />
          {/* </Col> */}
          {/* </Row> */}
          <Feedback />
        </div>
        <SocialMedia customClass="social-link-main" />
        <footer className="header text-center">
          {" "}
          <Link to={"/"}>
            <h1>Tinchel</h1>
          </Link>
          <div
            className="text-center"
            style={{ backgroundColor: "transparent" }}
          >
            All Rights reserved
          </div>
        </footer>{" "}
      </div>
    </BrowserRouter>
  );
}

export default App;
