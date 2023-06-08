import React, { useState } from "react";
import Button from "../Button/Button";
import "./NameInput.css";


function NameInput ( {setName, setVisibility } ) {

	const [nameInput, setNameInput] = useState("");

  function nameInputChange(event) {
    setNameInput(event.target.value);
  }

  function handleNameInput(event) {
    event.preventDefault();
    console.log(nameInput);
    setName(nameInput);
		setVisibility(true);
		setNameInput("");
  }

  return (
    <div>
      <h1>Hello!</h1>
      <form onSubmit={handleNameInput}>
        <label>
          <input
            onChange={nameInputChange}
            type="text"
            name="name"
            placeholder="What is your name?"
          />
        </label>
        <Button />
      </form>
    </div>
  );
}

export default NameInput;