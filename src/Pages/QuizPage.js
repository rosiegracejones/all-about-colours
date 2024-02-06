import QuestionTypeOne from "../Components/QuestionTypeOne/QuestionTypeOne";

export default function QuizPage() {
	const quizData = [
		{
			questionType: 1,
			questionColors: ["yellow", "blue"],
			answerColor: "green",
		},
		{
			questionType: 2,
			questionColors: ["orange"],
			answerColors: ["red", "yellow"],
		},
		// Add more questions as needed
	];

	return <>{console.log(quizData[1])}
  <QuestionTypeOne/></>;
}
