import QuestionTypeOne from "../Components/QuestionTypeOne/QuestionTypeOne";

export default function QuizPage({ name }) {
  const quizData = [
    {
      questionType: 1,
      questionColours: ["yellow", "blue"],
      answerColor: "green",
    },
    {
      questionType: 2,
      questionColours: ["orange"],
      answerColors: ["red", "yellow"],
    },
    // Add more questions as needed
  ];

  return (
    <>
      {console.log(quizData[1])}
      <QuestionTypeOne name={name} />
    </>
  );
}
