import React from 'react';
import Question from './question.jsx';
import PropTypes from 'prop-types';

export default function QuestionsList ({questions, productName}) {

  return (
    <ul className='my-2 h-96 overflow-y-auto w-10/12'>
      {questions.map(question => {
        return <Question key={question.question_id} question={question} productName={productName}/>
      })}
    </ul>
  )
}

QuestionsList.propTypes = {
  questions: PropTypes.array.isRequired
}