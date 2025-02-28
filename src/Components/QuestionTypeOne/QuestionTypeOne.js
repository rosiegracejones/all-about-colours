import { useState } from "react";

function QuestionTypeOne({
  name,
  questionColours,
  correctColour,
  incorrectColours,
}) {
  const [message, setMessage] = useState("");

  // create a function that will use the colour selected to display correct or incorrect based on the colour selected
  // compare the answer clicked to the correct answer in the question
  // if correct, console log correct
  // if else, console log incorrect, name try again

  function checkAnswer(clickedColour) {
    if (clickedColour === correctColour) {
      setMessage(`Correct, well done ${name}!`);
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

export default QuestionTypeOne;
