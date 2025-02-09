/* 

Previously, LearnPage rendered either PrimaryColour and SecondaryColour component when a colour link was clicked. These components received the colour name and hex value as props from child routes in App.js, e.g.:
	<Route path="red" element={<PrimaryColour colourHex="#ed1c24" colour="red" />} />

Now, colour data (hex and type: primary/secondary) is stored in an object called colourData inside LearnPage. useParams() extracts the colour from the URL, finds its corresponding data in colourData, and passes it as a prop to BackgroundColour.  

When no colour has been selected (/learn), BackgroundColour defaults to #c4d as before. When a colour is clicked, LearnPage remains displayed but BackgroundColour updates dynamically based on the hex value from colourData, instead of rendering a new component. Basically, everything that will be displayed on this page can now be dynamically updated based on the selected colour.

In App.js /learn is now set as a parent route, and Outlet is used in LearnPage to handle bested child routes like /learn/red 

*/

import BackgroundColour from "../Components/BackgroundColour/BackgroundColour";
import { Link, Outlet, useParams } from "react-router-dom";

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
						{/* If colourInfo...*/}
						{colourInfo ? (
							<>
								<h1>{colour.charAt(0).toUpperCase() + colour.slice(1)}</h1>

								{/* ..has primary type, display:*/}
								{colourInfo.type === "primary" ? (
									<p>
										{/* ensures first letter is capitalised*/}
										{colour.charAt(0).toUpperCase() + colour.slice(1)} is a
										primary colour. This means it can't be made by mixing other
										colours together. <Link to="">Choose another colour</Link>
									</p>
								) : (
									<p>
										{/* ..else display:*/}
										{colour.charAt(0).toUpperCase() + colour.slice(1)} is a
										secondary colour. It's made by mixing together{" "}
										{colourInfo.mix[0]} & {colourInfo.mix[1]}.{" "}
										<Link to="">Choose another colour</Link>
									</p>
								)}
							</>
						) : (
							// If no colourInfo null, display:
							<>
								<p>Select a colour to learn more!</p>
								<>
									<Link to="red">Red</Link>
									<Link to="yellow">Yellow</Link>
									<Link to="blue">Blue</Link>
									<Link to="green">Green</Link>
									<Link to="purple">Purple</Link>
									<Link to="orange">Orange</Link>
								</>
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
