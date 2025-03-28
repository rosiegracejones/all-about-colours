import QuestionTypeOne from "../Components/QuestionTypeOne/QuestionTypeOne";
import { useState, useEffect } from "react";

export default function QuizPage({ name }) {
  const quizData = {
    question1: {
      type: 1,
      questionColours: "Yellow and Blue",
      correctColour: "Green",
      incorrectColours: ["Purple", "Orange"],
    },
    question2: {
      type: 1,
      questionColours: "Red and Yellow",
      correctColour: "Orange",
      incorrectColours: ["Green", "Purple"],
    },
    question3: {
      type: 1,
      questionColours: "Blue and Red",
      correctColour: "Purple",
      incorrectColours: ["Green", "Orange"],
    },
    // question4: {
    //   type: 2,
    //   questionColour: "Green",
    //   correctColours: ["Yellow, Blue"],
    //   incorrectColour: ["Red"],
    // },
    // question5: {
    //   type: 2,
    //   questionColour: "Purple",
    //   correctColours: ["Red", "Blue"],
    //   incorrectColour: ["Yellow"],
    // },
    // question6: {
    //   type: 2,
    //   questionColour: "Orange",
    //   correctColours: ["Red", "Yellow"],
    //   incorrectColour: ["Blue"],
    // },
  };

  const allQuestions = Object.values(quizData); // Convert quizData object into an array of questions
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(false);
  const [message, setMessage] = useState("");

  // Shuffle questions when the component loads
  useEffect(() => {
    shuffleAndSetQuestions();
  }, []);

  function shuffleAndSetQuestions() {
    const shuffled = [...allQuestions].sort(() => Math.random() - 0.5); // Shuffle array
    setShuffledQuestions(shuffled);
    setCurrentQuestionIndex(0); // Reset index
  }

  function nextQuestion() {
    if (currentQuestionIndex < shuffledQuestions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      shuffleAndSetQuestions(); // Reshuffle when all questions are used
    }
    setCorrectAnswer(false);
    setMessage("");
  }

  const currentQuestion = shuffledQuestions[currentQuestionIndex];

  return (
    <>
      {currentQuestion && currentQuestion.type === 1 && (
        <QuestionTypeOne
          name={name}
          questionColours={currentQuestion.questionColours}
          correctColour={currentQuestion.correctColour}
          incorrectColours={currentQuestion.incorrectColours}
          setCorrectAnswer={setCorrectAnswer}
          setMessage={setMessage}
        />
      )}
      {/**If user has selected correct colour, then show button */}
      <p>{message}</p>
      {correctAnswer && <button onClick={nextQuestion}>Next question</button>}
    </>
  );
}
