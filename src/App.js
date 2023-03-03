import "./App.css";
import Me from "./components/me";
import ViewDownLoad from "./components/ViewDownload";
import Skills from "./components/Skills";
import Feedback from "./components/feedback";

import { BrowserRouter } from "react-router-dom";
import Projects from "./components/projects";
import "firebase/firestore";

function App() {
  return (
    <BrowserRouter>
      <div className=" ">
        <Me />
        <ViewDownLoad />
        <div className="skill-feedback-cert">
          <Skills />
          <Projects />
          <Feedback />
          <footer className="header text-center">
            {" "}
            <h1>Bekalu</h1>
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
