import "./QuizQuestionCard.css";

function QuizQuestionCard({ num, question }) {
  const correctOptionNumber =
    question.options.findIndex((group) => group.color === "green") + 1;

  return (
    <div className="question-card">
      <div className="header">
        <p className="question">
          <span>{num <= 9 ? `0${num}` : num}.</span>
          {question.question_text}
        </p>
      </div>
      <ul className="options">
        {question.options.map((option, index) => (
          <li key={index} className="answer">
            {option.option_text}
          </li>
        ))}
      </ul>
      <p>Correct answer: {correctOptionNumber}</p>
    </div>
  );
}

export default QuizQuestionCard;
