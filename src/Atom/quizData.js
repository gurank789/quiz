import React, { useState } from 'react';
import styles from './Quiz.module.css';
// Sample quiz data
const quizData = [
  {
    question: 'Grand Central Terminal, Park Avenue, New York is the world s',
    options: ['argest railway station', 'highest railway station','longest railway station', 'None of the above'],
    answer: 'highest railway station'
  },
  {
    question: 'Which planet is known as the Red Planet?',
    options: ['Mars', 'Venus', 'Jupiter', 'Saturn'],
    answer: 'Mars'
  },
  {
    question: 'Entomology is the science that studies',
    options: ['Behavior of human beings','Insects','The origin and history of technical and scientific terms','The formation of rocks'],
    answer: 'Insects'
  },
  {
    question: 'Eritrea, which became the 182nd member of the UN in 1993, is in the continent of',
    options: ['Asia', ' Africa',  'Europe',  'Australia'],
    answer: 'Africa'
  },
  {
    question: ' Garampani sanctuary is located at',
    options: ['Junagarh, Gujarat', 'Diphu, Assam', 'Kohima, Nagaland', 'Gangtok, Sikkim'],
    answer: 'Diphu, Assam'
  },
  {
    question: 'Which planet is known as the Red Planet?',
    options: ['Mars', 'Venus', 'Jupiter', 'Saturn'],
    answer: 'Mars'
  },
  
  // Add more quiz questions...
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleOptionChange = (event) => {
    setSelectedAnswer(event.target.value);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === quizData[currentQuestion].answer) {
      setScore(score + 1);
    }

    setSelectedAnswer('');
    setCurrentQuestion(currentQuestion + 1);
  };

  const handleSubmitQuiz = () => {
    if (selectedAnswer === quizData[currentQuestion].answer) {
      setScore(score + 1);
    }

    setShowResult(true);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer('');
    setScore(0);
    setShowResult(false);
  };

  if (showResult) {
    return (
      <div>
        <h2>Quiz Result</h2>
        <p>Your score: {score}</p>
        <button onClick={restartQuiz}>Restart Quiz</button>
      </div>
    );
  }

  if (currentQuestion >= quizData.length) {
    return (
      <div>
        <h2>Quiz Completed</h2>
        <p>Your score: {score}</p>
        <button onClick={restartQuiz}>Restart Quiz</button>
      </div>
    );
  }

  const currentQuiz = quizData[currentQuestion];

  return (
    <div className={styles.quizContainer}>
      <h2>Quiz</h2>
      <h3 className={styles.question}>Question {currentQuestion + 1}</h3>
      <p>{currentQuiz.question}</p>
      <form>
        <div className={styles.options}>
          {currentQuiz.options.map((option, index) => (
            <div className={styles.option} key={index}>
              <input
                type="radio"
                id={`option${index}`}
                name="quizOption"
                value={option}
                checked={selectedAnswer === option}
                onChange={handleOptionChange}
              />
              <label htmlFor={`option${index}`}>{option}</label>
            </div>
          ))}
        </div>
      </form>
      <button onClick={handleNextQuestion}>Next Question</button>
      {currentQuestion === quizData.length - 1 && (
        <button onClick={handleSubmitQuiz}>Submit Quiz</button>
      )}
    </div>
  );
};

export default Quiz;