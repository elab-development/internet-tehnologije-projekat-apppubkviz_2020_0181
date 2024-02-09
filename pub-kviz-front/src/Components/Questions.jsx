import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactHtmlParser from "html-react-parser";

const Questions = () => {
  const [questions, setQuestions] = useState([]);
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(
          "https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple"
        );
        setQuestions(response.data.results);
      } catch (error) {
        console.error("Greška pri dohvaćanju pitanja", error);
      }
    };

    fetchQuestions();
  }, []);

  const handleCheckboxChange = (questionIndex, optionIndex) => {
    
    console.log(
      `Pitanje ${questionIndex + 1}, opcija ${optionIndex + 1} je označena.`
    );
  };

  const handleArrowClick = (questionIndex) => {
    setSelectedQuestion(questionIndex);
  };

  const handleClosePopup = () => {
    setSelectedQuestion(null);
  };

  return (
    <div>
      <h1 className="naslovKviz">Proverite vaše znanje!</h1>
      <ul className="quiz-list">
        {questions.map((question, questionIndex) => (
          <li key={questionIndex} className="quiz-question">
            <div className="question-header">
              <p>{ReactHtmlParser(question.question)}</p>
              <button onClick={() => handleArrowClick(questionIndex)}>
                &#x2193;
              </button>
            </div>
            <ul>
              {question.incorrect_answers.map((option, optionIndex) => (
                <li key={optionIndex}>
                  <label className="pitanje">
                    <input
                      className="pitanje
                      "
                      type="checkbox"
                      onChange={() =>
                        handleCheckboxChange(questionIndex, optionIndex)
                      }
                    />
                    {ReactHtmlParser(option)}
                  </label>
                </li>
              ))}
              <li>
                <label className="pitanje">
                  <input
                    className="pitanje"
                    type="checkbox"
                    onChange={() =>
                      handleCheckboxChange(
                        questionIndex,
                        question.incorrect_answers.length
                      )
                    }
                  />
                  {ReactHtmlParser(question.correct_answer)}
                </label>
              </li>
            </ul>
          </li>
        ))}
      </ul>

      {selectedQuestion !== null && (
        <div className="popup">
          <button onClick={handleClosePopup} className="close-btn">
            &times;
          </button>
          <p>
            Tačan odgovor:{" "}
            {ReactHtmlParser(questions[selectedQuestion].correct_answer)}
          </p>
        </div>
      )}
    </div>
  );
};

export default Questions;
