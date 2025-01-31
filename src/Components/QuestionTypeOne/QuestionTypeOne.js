import { useState } from "react";

function QuestionTypeOne({ name }) {
	const quizData = [
		{
			questionType: 1,
			questionColours: ["Yellow and Blue"],
			correctColour: "Green",
			incorrectColours: ["Purple", "Orange"],
		},
		{
			questionType: 1,
			questionColours: ["Red and Yellow"],
			correctColour: ["Orange"],
			incorrectColours: ["Green", "Purple"],
		},
		{
			questionType: 1,
			questionColours: ["Blue and Red"],
			correctColour: ["Purple"],
			incorrectColours: ["Green", "Purple"],
		},
		// Add more questions as needed
	];

	const [message, setMessage] = useState("");

	// create a function that will use the colour selected to display correct or incorrect based on the colour selected
	// compare the answer clicked to the correct answer in the question
	// if correct, console log correct
	// if else, console log incorrect, name try again

	function checkAnswer(clickedColour) {
		const correctColour = quizData[0].correctColour;
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
			<p>{message}</p>
		</div>
	);
}

export default QuestionTypeOne;
