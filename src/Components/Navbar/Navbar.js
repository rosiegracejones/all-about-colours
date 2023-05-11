import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/learn">Learn</Link>
      <Link to="/quiz">Quiz</Link>
      <Link to="/about">About</Link>
    </div>
  );
}

export default Navbar;
