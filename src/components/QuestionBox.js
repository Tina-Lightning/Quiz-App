import React from "react";

const Button = ({answer})  => (
    <button className="bg-white p-4 text-purple-800 font-semibold rounded shadow">{answer}
    </button>
)

const QuestionBox = ({ handleAnswer, data: { question, correct_answer, incorrect_answers }, }) => {

    const randomAnswers = [ correct_answer, ...incorrect_answers];

    return (
    <div>
        <div className="bg-white text-purple-800 p-10 rounded shadow-md">
            <h2 className="text-2xl" dangerouslySetInnerHTML={{ __html: question }} />
        </div>
        <div className="grid grid-cols-2 gap-6 mt-6">
            <Button onClick={() => handleAnswer(randomAnswers[0])} answer={randomAnswers[0]} />
            <Button onClick={() => handleAnswer(randomAnswers[1])} answer={randomAnswers[1]} />
            <Button onClick={() => handleAnswer(randomAnswers[2])} answer={randomAnswers[2]} />
            <Button onClick={() => handleAnswer(randomAnswers[3])} answer={randomAnswers[3]} />
        </div>
    </div>
)};

export default QuestionBox;