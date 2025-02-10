/* 

Previously, LearnPage rendered either PrimaryColour and SecondaryColour component when a colour link was clicked. These components received the colour name and hex value as props from child routes in App.js, e.g.:
	<Route path="red" element={<PrimaryColour colourHex="#ed1c24" colour="red" />} />

Now, colour data (hex and type: primary/secondary) is stored in an object called colourData inside LearnPage. useParams() extracts the colour from the URL, finds its corresponding data in colourData, and passes it as a prop to BackgroundColour.  

When no colour has been selected (/learn), BackgroundColour defaults to #c4d as before. When a colour is clicked, LearnPage remains displayed but BackgroundColour updates dynamically based on the hex value from colourData, instead of rendering a new component. Basically, everything that will be displayed on this page can now be dynamically updated based on the selected colour.

In App.js /learn is now set as a parent route, and Outlet is used in LearnPage to handle bested child routes like /learn/red 

Have also now added ColourText component which displays information about the selected colour, based on colour's type value (primary/secondary) and mix value (if secondary).

*/

import BackgroundColour from "../Components/BackgroundColour/BackgroundColour";
import { Link, Outlet, useParams } from "react-router-dom";
import ColourText from "../Components/ColourText/ColourText";

// colour name keys mapped to colour info objects
const colourData = {
	red: { hex: "#ed1c24", type: "primary" },
	yellow: { hex: "#eecc0e", type: "primary" },
	blue: { hex: "#3479f8", type: "primary" },
	green: { hex: "#00a61b", type: "secondary", mix: ["blue", "yellow"] },
	purple: { hex: "#ac34f8", type: "secondary", mix: ["red", "blue"] },
	orange: { hex: "#e87a22", type: "secondary", mix: ["red", "yellow"] },
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
					<div className="circle-div">
						{colourInfo ? (
							// If colourInfo exists, render ColourText component
							<ColourText colour={colour} colourInfo={colourInfo} />
						) : (
							// If colourInfo is empty, show default view:
							<>
								<p>Select a colour to learn more!</p>
								<div>
									<Link to="red">Red</Link>
									<Link to="yellow">Yellow</Link>
									<Link to="blue">Blue</Link>
									<Link to="green">Green</Link>
									<Link to="purple">Purple</Link>
									<Link to="orange">Orange</Link>
								</div>
							</>
						)}
					</div>
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
