import NameInput from "../Components/NameInput/NameInput";
import WelcomeDisplay from "../Components/WelcomeDisplay/WelcomeDisplay";
export default function Homepage() {
  return (
    <div>
      <NameInput />
      <WelcomeDisplay name="Ada" />
    </div>
  );
}
