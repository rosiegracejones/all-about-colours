import NameInput from "../Components/NameInput/NameInput";
import WelcomeDisplay from "../Components/WelcomeDisplay/WelcomeDisplay";
import BackgroundColour from "../Components/BackgroundColour/BackgroundColour";
import "./Homepage.css";

function Homepage({ name, setName }) {

	return name !== '' ? (
		<div>
			<BackgroundColour backgroundColour="#d1b9ed">
				<div className="circle-div">
					<WelcomeDisplay name={name} />
				</div>
			</BackgroundColour>
		</div>
	) : (
		<BackgroundColour backgroundColour="#d1b9ed">
			<div className="circle-div">
				<NameInput setName={setName} />
			</div>
		</BackgroundColour>
	);
}

export default Homepage;
