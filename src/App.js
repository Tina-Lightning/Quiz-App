import React, { useState, useEffect } from 'react';

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

  return (
      questions.length > 0 ? (
        <div className="container">
        <div className="bg-white text-purple-800 p-10 rounded-lg shadow-md">
        <h2 className="text-2xl">
        {questions[0].question}
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-6 mt-6">
        <button className="bg-white p-4 text-purple-800 font-semibold rounded shadow">{questions[0].correct_answer}</button>
        <button className="bg-white p-4 text-purple-800 font-semibold rounded shadow">Answer</button>
        <button className="bg-white p-4 text-purple-800 font-semibold rounded shadow">Answer</button>
        <button className="bg-white p-4 text-purple-800 font-semibold rounded shadow">Answer</button>
      </div>
      </div>
      ) : ( <h1>No questions sorry</h1> )
  );
}

export default App;
