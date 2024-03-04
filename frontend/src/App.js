import React, { useEffect, useState } from "react"
import logo from './logo.svg';
import './App.css';

function App() {
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    fetch('http://34.107.11.211/')
      .then(response => response.json())
      .then(data => setQuestions(data))
      .catch(error => console.log(error));
  }, [])

  const handleShowAnswer = (questionId) => {
    setQuestions((prevQuestions) =>
      prevQuestions.map((question) => {
        if (question.id === questionId) {
          return { ...question, showAnswer: true }
        }
        return question
      })
    )
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Docker Compose Node React</h2>
      </header>
      <main>  
        <div className="container">
          <h3 className="title">Trivia App</h3>
          {questions.map((question) => (
          <div key={question.id} className="question-container">
            <h4 className="question">{question.question}</h4>
              {question.showAnswer ? (
                <p className="answer">Answer: {question.answer}</p>
              ) : (
                <button
                  className="show-answer-button"
                  onClick={() => handleShowAnswer(question.id)}
               >
                  Show Answer
                </button>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
