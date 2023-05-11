import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./components/Home";
// import Learn from "./components/Learn";
// import Colour from "./components/Colour";
// import Quiz from "./components/Quiz";
// import About from "./components/About";
import Navbar from "../Navbar/Navbar";
import Homepage from "../../Pages/Homepage";
import AboutPage from "../../Pages/AboutPage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutPage />} />
          {/* <Route exact path="/learn" element={<Learn />} />
          <Route path="/learn/:id" element={<Colour />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/about" element={<About />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
