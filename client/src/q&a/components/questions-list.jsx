import React from 'react';
import Question from './question.jsx';

const QuestionsList = ({questions}) => {

  return (
    <ul>
      {questions.map(question => {
        return <Question key={question.question_id} question={question}/>
      })}
    </ul>
  )
}

export default QuestionsList;