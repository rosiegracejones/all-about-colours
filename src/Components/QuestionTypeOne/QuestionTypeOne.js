function QuestionTypeOne() {
  const quizData = [
    {
      questionType: 1,
      questionColours: ["yellow and blue"],
      correctColour: "Green",
      incorrectColours: ["purple", "orange"],
    },
    {
      questionType: 1,
      questionColours: ["red and yellow"],
      correctColour: ["Orange"],
      incorrectColours: ["green", "purple"],
    },
    {
      questionType: 1,
      questionColours: ["blue and red"],
      correctColour: ["Purple"],
      incorrectColours: ["green", "purple"],
    },
    // Add more questions as needed
  ];

  // create a function that will use the colour selected to display correct or incorrect based on the colour selected
  function checkAnswer() {
	console.log("You clicked me");
  }



  return (
    <div>
      <h1>Question Type One</h1>
      <p>What colour do you get when you mix {quizData[1].questionColours}?</p>
      <button onClick={checkAnswer}>{quizData[1].correctColour}</button>
      <button>{quizData[1].incorrectColours[0]}</button>
      <button>{quizData[1].incorrectColours[1]}</button>
    </div>
  );
}

export default QuestionTypeOne;
