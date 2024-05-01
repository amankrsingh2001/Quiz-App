import React, { useEffect, useState } from "react";
import "./Quiz.css";

const questions = [
  {
    key: 1,
    question: "Which animal is known as the 'Ship of the Desert ?",
    answer: ["Camel", "sheep", "Tiger", "Zebra"],
    correct: "Camel",
  },
  {
    key: 2,
    question: "How many days are there in a week ?",
    answer: ["1 Day", "2 Days", "3 Days", "7 Days"],

    correct: "7 Days",
  },
  {
    key: 4,
    question: "Where is Ajodhya ?",
    answer: ["Uttar Pradesh", "Bihar", "Rajasthan", "Delhu"],
    correct: "Uttar Pradesh",
  },
  {
    key: 4,
    question: "Which type of food is not good for health ?",
    answer: ["Drugs", "Fruits", "Vegetable", "Polished Sugars"],
    correct: "Polished Sugars",
  },
];
const Quiz = () => {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleClick = (e) => {
    const value = e.target.innerText;

    if (value === questions[index].correct) {
      setScore(score + 1);
     
    }
    if (value !== questions[index].correct) {
     
    }

    if (index < questions.length - 1) {
      setIndex(index + 1);
    } else {
      setShowScore(true);
    }
  };

  const tryHandler = ()=>{
    setScore(0)
    setIndex(0);
    setShowScore(false);
  }


  return (
    <div className="main">
          {showScore ? (<div className="score">
            <h3>Your total Score is-{score}</h3>
          <button className="retry-btn" onClick={tryHandler}>Retry</button>
          </div>):( 
            <>
             <div className="question-list">
      
      <h2 className="question-no">
        Question No {index + 1}/{4}
      </h2>

      <p>{questions[index].question}</p>
    </div>

    <div className="ans-btn">
      {questions[index].answer.map((ans, index) => {
        return (
          <span key={index} onClick={handleClick}>
            {ans}
          </span>
        );
      })}
    </div>
    </>)}

  
    </div>
  );
};

export default Quiz;
