import React, { useState, useEffect } from 'react';

import { QuestionBox } from "./components";

const API_URL = "https://opentdb.com/api.php?amount=10&category=14&type=multiple";

function App() {

  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        // this puts the results inside the questions array
        setQuestions(data.results);
      });
  }, []);

  const handleAnswer = (answer) => {
    
  }

  return (
      questions.length > 0 ? ( 
        <div className="container">
          <QuestionBox data={questions[0]} handleAnswer={handleAnswer} />
        </div>
      ) : ( <h2 className="text-2xl text-white font-bold">Loading...</h2> )
  );
}

export default App;
