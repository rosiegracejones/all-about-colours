import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Homepage from "../../Pages/Homepage";
import AboutPage from "../../Pages/AboutPage";
import QuizPage from "../../Pages/QuizPage";
import LearnPage from "../../Pages/LearnPage";
import PrimaryColour from "../Colours/PrimaryColour";
import SecondaryColour from "../Colours/SecondaryColour";

import "./App.css";

function App() {
  const [name, setName] = useState("");

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Homepage name={name} setName={setName}/>} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/learn" element={<LearnPage />} />
          <Route path="/quiz" element={<QuizPage name={name} />} />
          <Route path="/learn/red" element={<PrimaryColour colourHex="#ed1c24" colour="red"/>} />
          <Route path="/learn/yellow" element={<PrimaryColour colourHex="#eecc0e"colour="yellow" />} />
          <Route path="/learn/blue" element={<PrimaryColour colourHex="#3479f8" colour="blue"/>} />
          <Route path="/learn/green" element={<SecondaryColour colourHex="#00a61b" colour="green"/>} />
          <Route path="/learn/purple" element={<SecondaryColour colourHex="#ac34f8" colour="purple"/>} />
          <Route path="/learn/orange" element={<SecondaryColour colourHex="#e87a22" colour="orange"/>} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
