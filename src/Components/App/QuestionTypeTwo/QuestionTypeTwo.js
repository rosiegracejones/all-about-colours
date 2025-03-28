function QuestionTypeTwo({
  name,
  questionColours,
  correctColour,
  incorrectColours,
  setCorrectAnswer,
  setMessage,
}) {

  function checkAnswer(clickedColour) {
    if (clickedColour === correctColour) {
      setMessage(`Correct, well done ${name}!`);
      setCorrectAnswer(true);
    } else {
      setMessage(`Not quite ${name}, try again`);
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
    </div>
  );
}

export default QuestionTypeOne;
