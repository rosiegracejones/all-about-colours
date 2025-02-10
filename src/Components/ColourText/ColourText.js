import { Link } from "react-router-dom";
import Button from "../Button/Button";

function ColourText({ colour, colourInfo }) {
	const capitalisedColour = colour.charAt(0).toUpperCase() + colour.slice(1);

	return (
		<p>
			<h1>{capitalisedColour}</h1>
			{capitalisedColour} is a {colourInfo.type} colour.{" "}
			{colourInfo.type === "primary"
				? `This means ${colour} can't be made by mixing other colours together.`
				: `It's made by mixing together ${colourInfo.mix[0]} & ${colourInfo.mix[1]}.`}
			<Link to="">
				<Button buttonText="Choose another colour"></Button>
			</Link>
		</p>
	);
}

export default ColourText;
