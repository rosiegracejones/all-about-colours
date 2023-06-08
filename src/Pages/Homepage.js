import NameInput from "../Components/NameInput/NameInput";
import WelcomeDisplay from "../Components/WelcomeDisplay/WelcomeDisplay";
import BackgroundColour from "../Components/BackgroundColour/BackgroundColour";
import { useState } from "react";
import "./Homepage.css";

function Homepage() {
  const [name, setName] = useState("");
  const [visibility, setVisibility] = useState(false);

  return visibility ? (
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
        <NameInput setName={setName} setVisibility={setVisibility} />
      </div>
    </BackgroundColour>
  );
}

export default Homepage;
