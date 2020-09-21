import React, { useState, useEffect } from 'react';

import { QuestionBox } from "./components";

const API_URL = "https://opentdb.com/api.php?amount=10&category=14&type=multiple";

function App() {

  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [gameEnded, setGameEnded] = useState(false);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        // this puts the results inside the questions array
        setQuestions(data.results);
        setCurrentIndex(0);
      });
  }, []);

  const handleAnswer = (answer) => {
    const newIndex = currentIndex + 1
  
    setCurrentIndex(newIndex);

    if(answer === questions[currentIndex].correct_answer) {
      setScore(score + 1);
    }

    if(newIndex >= questions.length) {
      setGameEnded(true);
    }
  }

  return gameEnded ? (
  <h1 className="text-3xl text-white font-bold">Your score was {score}</h1>
  ) : (
      questions.length > 0 ? ( 
        <div className="container">
          <QuestionBox data={questions[currentIndex]} handleAnswer={handleAnswer} /> 
        </div>
      ) : ( <h2 className="text-2xl text-white font-bold">Loading...</h2> )
  );
}

export default App;
