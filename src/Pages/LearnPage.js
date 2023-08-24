import BackgroundColour from "../Components/BackgroundColour/BackgroundColour";
import PrimaryColour from "../Components/Colours/PrimaryColour";
import { Link, Route, Routes } from "react-router-dom";

export default function LearnPage() {

	return (
		<>
			<div className="LearnPage">
				<BackgroundColour backgroundColour="#c4d350">
					<div className="circle-div">
						<Link to="/learn/red">Red</Link>
            <Link to="/learn/yellow">Yellow</Link>
					</div>
				</BackgroundColour>
			</div>
		</>
	);
}
