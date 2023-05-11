import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Homepage from "../../Pages/Homepage";
import AboutPage from "../../Pages/AboutPage";
import QuizPage from "../../Pages/QuizPage";
import LearnPage from "../../Pages/LearnPage";

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
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
