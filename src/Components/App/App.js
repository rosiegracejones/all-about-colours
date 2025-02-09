import { Outlet, BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Homepage from "../../Pages/Homepage";
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

				<Routes>
					<Route
						exact
						path="/"
						element={<Homepage name={name} setName={setName} />}
					/>
					<Route path="/about" element={<AboutPage />} />
					<Route path="/learn" element={<LearnPage />}>
						<Route path=":colour" element={<Outlet />} />
					</Route>
					<Route path="/quiz" element={<QuizPage name={name} />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
