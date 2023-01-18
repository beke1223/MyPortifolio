import "./App.css";
import Navigation from "./components/navigationBar";
import Me from "./components/me";
import ViewDownLoad from "./components/ViewDownload";
import Skills from "./components/Skills";
function App() {
  return (
    <div className="App">
      <Navigation />
      <Me />
      <ViewDownLoad />
      <Skills />
    </div>
  );
}

export default App;
