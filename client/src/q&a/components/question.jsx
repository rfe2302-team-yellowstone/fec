import React from 'react';
import {useState} from 'react';
import AnswersList from './answers-list.jsx';

const Question = ({question}) => {
  const [answers, setAnswers] = useState(question.answers);

  return (
    <li>
      <span>Q: {question.question_body}</span>
      <span>Helpful? Yes 2 | Add Answer</span>
      <span>A: </span>
      <AnswersList answers={answers}/>
      <button className='btn btn-xs btn-ghost'>LOAD MORE ANSWERS</button>
    </li>
  )
}

export default Question;