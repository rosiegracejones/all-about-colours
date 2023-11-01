import BackgroundColour from "../BackgroundColour/BackgroundColour";

function SecondaryColour({ colourHex, colour }) {
	return (
		<>
			<div>
				<BackgroundColour backgroundColour={colourHex}>
					<div className="circle-div">
						<p>{colour}</p>
					</div>
				</BackgroundColour>
			</div>
		</>
	);
}

export default SecondaryColour;
