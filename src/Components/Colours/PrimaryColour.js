import BackgroundColour from "../BackgroundColour/BackgroundColour";

function PrimaryColour({ colour }) {
	return (
		<>
			<div>
				<BackgroundColour backgroundColour={colour}>
					<div className="circle-div">
						<p>{colour}</p>
					</div>
				</BackgroundColour>
			</div>
		</>
	);
}

export default PrimaryColour;
