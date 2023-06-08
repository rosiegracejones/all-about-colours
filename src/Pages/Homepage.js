import NameInput from "../Components/NameInput/NameInput";
import WelcomeDisplay from "../Components/WelcomeDisplay/WelcomeDisplay";
import { useState } from "react";
import "./Homepage.css";

function Homepage() {

  const [name, setName] = useState("");
  const [visibility, setVisibility] = useState(false);
  
  return visibility ?(
    <div>
      <WelcomeDisplay name={name} />
    </div>
  ) : (<NameInput setName = {setName} setVisibility = {setVisibility}/>)
}

export default Homepage;
