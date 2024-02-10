import BackgroundColour from "../Components/BackgroundColour/BackgroundColour";
import PrimaryColour from "../Components/Colours/PrimaryColour";
import { Link } from "react-router-dom";

export default function LearnPage() {

	return (
		<>
			<div className="LearnPage">
				<BackgroundColour backgroundColour="#c4d">
					<div className="circle-div">
						<Link to="/learn/red">Red</Link>
            <Link to="/learn/yellow">Yellow</Link>
			<Link to="/learn/blue">Blue</Link>
			<Link to="/learn/green">Green</Link>
			<Link to="/learn/purple">Purple</Link>
			<Link to="/learn/orange">Orange</Link>
					</div>
				</BackgroundColour>
			</div>
		</>
	);
}
