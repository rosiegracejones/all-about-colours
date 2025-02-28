import QuestionTypeOne from "../Components/QuestionTypeOne/QuestionTypeOne";
import { useState } from "react";

export default function QuizPage({ name }) {
  const [currentQuestion, setCurrentQuestion] = useState("");

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
  };

  // create a function that will pick a random question from the quizData object and display it.
  // use the random number to select a question from the quizData object
  // return the question to the user via the QuestionTypeOne component
  // send prop data to the QuestionTypeOne component

  function randomQuestion() {
    const questionNumber = Math.floor(Math.random() * 3) + 1;
    // don't repeat the same question
    if (currentQuestion === quizData[`question${questionNumber}`]) {
      randomQuestion();
    }
    setCurrentQuestion(quizData[`question${questionNumber}`]);
  }

  return (
    <>
      {/* if currentQuestions has a type of 1 then call QuestionTypeOne component */}
      {currentQuestion.type === 1 && (
        <QuestionTypeOne
          name={name}
          questionColours={currentQuestion.questionColours}
          correctColour={currentQuestion.correctColour}
          incorrectColours={currentQuestion.incorrectColours}
        />
      )}

      <button onClick={randomQuestion}>Pick a question</button>
    </>
  );
}

// import QuestionTypeOne from "../Components/QuestionTypeOne/QuestionTypeOne";
// import { useState, useEffect } from "react";

// export default function QuizPage({ name }) {
//   const quizData = {
//     question1: {
//       type: 1,
//       questionColours: "Yellow and Blue",
//       correctColour: "Green",
//       incorrectColours: ["Purple", "Orange"],
//     },
//     question2: {
//       type: 1,
//       questionColours: "Red and Yellow",
//       correctColour: "Orange",
//       incorrectColours: ["Green", "Purple"],
//     },
//     question3: {
//       type: 1,
//       questionColours: "Blue and Red",
//       correctColour: "Purple",
//       incorrectColours: ["Green", "Orange"],
//     },
//   };

//   const allQuestions = Object.values(quizData); // Convert quizData object into an array of questions
//   const [shuffledQuestions, setShuffledQuestions] = useState([]);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

//   // Shuffle questions when the component loads
//   useEffect(() => {
//     shuffleAndSetQuestions();
//   }, []);

//   function shuffleAndSetQuestions() {
//     const shuffled = [...allQuestions].sort(() => Math.random() - 0.5); // Shuffle array
//     setShuffledQuestions(shuffled);
//     setCurrentQuestionIndex(0); // Reset index
//   }

//   function nextQuestion() {
//     if (currentQuestionIndex < shuffledQuestions.length - 1) {
//       setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
//     } else {
//       shuffleAndSetQuestions(); // Reshuffle when all questions are used
//     }
//   }

//   const currentQuestion = shuffledQuestions[currentQuestionIndex];

//   return (
//     <>
//       {currentQuestion && currentQuestion.type === 1 && (
//         <QuestionTypeOne
//           name={name}
//           questionColours={currentQuestion.questionColours}
//           correctColour={currentQuestion.correctColour}
//           incorrectColours={currentQuestion.incorrectColours}
//         />
//       )}

//       <button onClick={nextQuestion}>Next question</button>
//     </>
//   );
// }
