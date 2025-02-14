import NameInput from "../Components/NameInput/NameInput";
import WelcomeDisplay from "../Components/WelcomeDisplay/WelcomeDisplay";
import BackgroundColour from "../Components/BackgroundColour/BackgroundColour";

function Homepage({ name, setName }) {
	return (
		<BackgroundColour backgroundColour="#d1b9ed">
			<div className="circle-div">
				{name !== "" ? (
					<WelcomeDisplay name={name} />
				) : (
					<NameInput setName={setName} />
				)}
			</div>
		</BackgroundColour>
	);
}

export default Homepage;
