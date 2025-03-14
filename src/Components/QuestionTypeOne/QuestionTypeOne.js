import { useState } from "react";

function QuestionTypeOne({
  name,
  questionColours,
  correctColour,
  incorrectColours,
  setCorrectAnswer
}) {
  const [message, setMessage] = useState("");

  // create a function that will use the colour selected to display correct or incorrect based on the colour selected
  // compare the answer clicked to the correct answer in the question
  // if correct, console log correct
  // if else, console log incorrect, name try again

  function checkAnswer(clickedColour) {
    if (clickedColour === correctColour) {
      setMessage(`Correct, well done ${name}!`);
      setCorrectAnswer(true);
      // console.log("Correct, well done " + name + "!");
    } else {
      setMessage(`Not quite ${name}, try again`);
      // console.log("Not quite " + name + ", try again");
    }
  }

  return (
    <div>
      <h1>Question Type One</h1>
      <p>What colour do you get when you mix {questionColours}?</p>
      <button onClick={() => checkAnswer(correctColour)}>
        {correctColour}
      </button>
      <button onClick={() => checkAnswer(incorrectColours[0])}>
        {incorrectColours[0]}
      </button>
      <button onClick={() => checkAnswer(incorrectColours[1])}>
        {incorrectColours[1]}
      </button>
      <p>{message}</p>
    </div>
  );
}

// create state variable true/false in quiz page
// send it down to question type 1 as this.prop
// add functionality to the buttons function (checkAnswer) that sets the state to true or false

export default QuestionTypeOne;
