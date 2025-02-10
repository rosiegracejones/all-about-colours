import { Outlet, BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import HomePage from "../../Pages/HomePage";
import AboutPage from "../../Pages/AboutPage";
import QuizPage from "../../Pages/QuizPage";
import LearnPage from "../../Pages/LearnPage";

import "./App.css";

function App() {
	const [name, setName] = useState("");

	return (
		<BrowserRouter>
			<div className="App">
				<Navbar />
				<div className="main-display">
					<Routes>
						<Route
							exact
							path="/"
							element={<HomePage name={name} setName={setName} />}
						/>
						<Route path="/about" element={<AboutPage />} />
						<Route path="/learn" element={<LearnPage />}>
							<Route path=":colour" element={<Outlet />} />
						</Route>
						<Route path="/quiz" element={<QuizPage name={name} />} />
					</Routes>
				</div>{" "}
			</div>
		</BrowserRouter>
	);
}

export default App;
