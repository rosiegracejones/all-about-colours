import { useParams } from "react-router-dom";
import PrimaryColour from "../Colours/PrimaryColour";
import SecondaryColour from "../Colours/SecondaryColour";

// creates colourData variable that stores colour hex values and types (primary or secondary)
// gets colour from URL and uses it to get corresponding colour info from colourData
// stores colour info in colourInfo variable
// creates ColourComponent variable that stores either PrimaryColour or SecondaryColour component based on type in colourInfo
// renders ColourComponent and passes colour hex value and colour name as props 

// colour name keys mapped to colour info objects
const colourData = {
	red: { hex: "#ed1c24", type: "primary" },
	yellow: { hex: "#eecc0e", type: "primary" },
	blue: { hex: "#3479f8", type: "primary" },
	green: { hex: "#00a61b", type: "secondary" },
	purple: { hex: "#ac34f8", type: "secondary" },
	orange: { hex: "#e87a22", type: "secondary" },
};

function ColourHandler() {
	// useParams hook gets colour from URL & stores in colour variable (URL determined by user selection in LearnPage (e.g. /red))
	const { colour } = useParams();

	// uses colour to get colour info object from colourData object
	const colourInfo = colourData[colour];

	// ColourComponent will render PrimaryColour or SecondaryColour component based on colour type (see long form in comments at end)
	const ColourComponent =
		colourInfo.type === "primary" ? PrimaryColour : SecondaryColour;

	// dynamically render ColourComponent with colourHex prop set to hex value from colourInfo object & colour prop set to colour variable
	return <ColourComponent colourHex={colourInfo.hex} colour={colour} />;
}

export default ColourHandler;

// let ColourComponent;

// if (colourInfo.type === "primary") {
// 	ColourComponent = PrimaryColour;
// } else {
// 	ColourComponent = SecondaryColour;
// }
