import "./App.css";
import Navigation from "./components/navigationBar";
import Me from "./components/me";
import ViewDownLoad from "./components/ViewDownload";
import Skills from "./components/Skills";
import Certificates from "./components/certificates";
import Feedback from "./components/feedback";
import SocialMedia from "./components/Footer";
import { Card, Row, Col } from "react-bootstrap";
import AboutMe from "./components/aboutMe";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Me />
      <ViewDownLoad />
      <Skills />

      <Row>
        <Col sm={12} md={12} lg={6}>
          <AboutMe />
        </Col>

        <Col sm={12} md={12} lg={6}>
          <Certificates />
        </Col>
      </Row>

      <Card style={{ height: "90%" }}>
        <Row>
          <Col sm={12} md={6}>
            <Feedback />
          </Col>

          <Col sm={12} md={6}>
            <SocialMedia />
          </Col>
        </Row>
      </Card>
    </div>
  );
}

export default App;
