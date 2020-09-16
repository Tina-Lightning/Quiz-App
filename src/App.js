import React from 'react';

const API_URL = "https://opentdb.com/api.php?amount=10&category=14&type=multiple";

function App() {
  return (
    <div className="container">
      <div>
        Question
      </div>
      <div>
        <div>Answer</div>
        <div>Answer</div>
        <div>Answer</div>
        <div>Answer</div>
      </div>
    </div>
  );
}

export default App;
