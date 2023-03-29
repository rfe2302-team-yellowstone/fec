import React, { useState } from 'react';
import QAndASearch from './qa-search.jsx';

const QAndAHeader = ({questions, setQuestions, allQuestions, tempQuestions, setTempQuestions}) => {
  return (
    <header className='my-2 w-10/12'>
      <h4 className='font-bold'>QUESTIONS & ANSWERS</h4>
      <QAndASearch questions={questions} setQuestions={setQuestions} allQuestions={allQuestions} tempQuestions={tempQuestions} setTempQuestions={setTempQuestions}/>
    </header>
  )
}

export default QAndAHeader;