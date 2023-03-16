import React from 'react';
import Answer from './answer.jsx';

const AnswersList = ({answers}) => {

  return (
    <ul>
      {Object.keys(answers).map(answerId => {
        return <Answer key={answerId} answer={answers[answerId]}/>
      })}
    </ul>
  )
}

export default AnswersList;