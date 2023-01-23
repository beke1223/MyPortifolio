import "./App.css";
import Navigation from "./components/navigationBar";
import Me from "./components/me";
import ViewDownLoad from "./components/ViewDownload";
import Skills from "./components/Skills";
import Certificates from "./components/certificates";
import Feedback from "./components/feedback";
import SocialMedia from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Me />
      <ViewDownLoad />
      <Skills />
      <Certificates />
      <Feedback />
      <SocialMedia />
    </div>
  );
}

export default App;
