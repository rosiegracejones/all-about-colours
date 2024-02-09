function QuestionTypeOne( { name }) {
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
	// compare the answer clicked to the correct answer in the question
	// if correct, console log correct
	// if else, console log incorrect, name try again

	function checkAnswer(clickedColour) {
		const correctColour = quizData[0].correctColour;
		if (clickedColour === correctColour) {
			console.log("Correct, well done " + name + "!");
		} else {
			console.log("Incorrect " + name + ", try again");
		}
	}

	return (
		<div>
			<h1>Question Type One</h1>
			<p>What colour do you get when you mix {quizData[0].questionColours}?</p>
			<button onClick={() => checkAnswer(quizData[0].correctColour)}>
				{quizData[0].correctColour}
			</button>
			<button onClick={() => checkAnswer(quizData[0].incorrectColours[0])}>
				{quizData[0].incorrectColours[0]}
			</button>
			<button onClick={() => checkAnswer(quizData[0].incorrectColours[1])}>
				{quizData[0].incorrectColours[1]}
			</button>
		</div>
	);
}

export default QuestionTypeOne;
