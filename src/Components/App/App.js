import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Homepage from "../../Pages/Homepage";
import AboutPage from "../../Pages/AboutPage";
import QuizPage from "../../Pages/QuizPage";
import LearnPage from "../../Pages/LearnPage";
import PrimaryColour from "../Colours/PrimaryColour";
import BackgroundColour from "../BackgroundColour/BackgroundColour";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/learn" element={<LearnPage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/learn/red" element={<PrimaryColour colour="red" />} />
          <Route path="/learn/yellow" element={<PrimaryColour colour="yellow" />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
