import BackgroundColour from "../Components/BackgroundColour/BackgroundColour";
import { Link, Outlet, useParams } from "react-router-dom";

// colour name keys mapped to colour info objects
const colourData = {
	red: { hex: "#ed1c24", type: "primary" },
	yellow: { hex: "#eecc0e", type: "primary" },
	blue: { hex: "#3479f8", type: "primary" },
	green: { hex: "#00a61b", type: "secondary" },
	purple: { hex: "#ac34f8", type: "secondary" },
	orange: { hex: "#e87a22", type: "secondary" },
};

function LearnPage() {
	// Get the selected colour from the URL (determined by user selection)
	const { colour } = useParams();
	// Get info object for selected colour from colourData & store in colourInfo
	const colourInfo = colourData[colour];

	// Default background colour when there colourInfo does not contain data (see long form in comments at end)
	const backgroundColour = colourInfo ? colourInfo.hex : "#c4d";

	return (
		<>
			<div className="LearnPage">
				<BackgroundColour backgroundColour={backgroundColour}>
					{colourInfo && (
						<div className="circle-div">
							<Link to="red">Red</Link>
							<Link to="yellow">Yellow</Link>
							<Link to="blue">Blue</Link>
							<Link to="green">Green</Link>
							<Link to="purple">Purple</Link>
							<Link to="orange">Orange</Link>
						</div>
					)}
					<Outlet />
				</BackgroundColour>
			</div>
		</>
	);
}

export default LearnPage;

// let backgroundColour;

// if (colourInfo) {
//   backgroundColour = colourInfo.hex;  // If colourInfo contains data, use its hex value
// } else {
//   backgroundColour = "#c4d";  // If colourInfo is undefined/null, use default colour
//}
