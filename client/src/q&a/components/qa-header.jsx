import React, { useState } from 'react';
import QAndASearch from './qa-search.jsx';

const QAndAHeader = ({questions, setQuestions, allQuestions, tempQuestions, setTempQuestions}) => {
  console.log('questions:', questions)
  const [originalQuestions, setOriginalQuestions] = useState(questions);
  console.log(originalQuestions, 'original questions')
  return (
    <header className='my-2 w-[60rem]'>
      <h4>QUESTIONS & ANSWERS</h4>
      <QAndASearch questions={questions} setQuestions={setQuestions} allQuestions={allQuestions} tempQuestions={tempQuestions} setTempQuestions={setTempQuestions}/>
    </header>
  )
}

export default QAndAHeader;