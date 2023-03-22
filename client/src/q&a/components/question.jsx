import React from 'react';
import {useState, useEffect} from 'react';
import AnswersList from './answers-list.jsx';
import axios from 'axios';
import PropTypes from 'prop-types';

export default function Question ({question}) {
  const [answers, setAnswers] = useState([]);
  const [helpfulCount, setHelpfulCount] = useState(question.question_helpfulness)

  // return (
  //   <li className='grid grid-cols-10 grid-rows-3 w-[60rem]'>
  //     <span className='col-span-7 col-start-1 row-start-1'>Q: {question.question_body}</span>
  //     <span className='col-start-8 row-start-1'>Helpful? Yes 2 | Add Answer</span>
  //     <span className='col-start-1 row-start-2'>A: </span>
  //     <AnswersList className='col-span-7 col-start-1 row-start-2 ml-4' answers={answers}/>
  //     <button className='btn btn-xs btn-ghost'>LOAD MORE ANSWERS</button>
  //   </li>
  // )

  useEffect(() => {
    axios.get(`http://localhost:3000/qa/questions/${question.question_id}/answers`, {
      params: {
        'count': 4
      }
    })
      .then(response => {
        // console.log('successfully retrieved answers from Atelier Answers API:', response.data.results)
        setAnswers(response.data.results)
      })
  }, []);

  const handleHelpfulClick = e => {
    axios.put(`http://localhost:3000/qa/questions/${question.question_id}/helpful`)
      .then(response => {
        setHelpfulCount(helpfulCount + 1);
      })
      .catch(err => {
        console.log('unable to mark Question as helpful, error:', err);
      })
  }

  return (
    <li className='w-[60rem]'>
      <div>
        <span className=''>Q: {question.question_body}</span>
        <span className='ml-64'>
          <span>Helpful? </span>
          <button className='btn btn-xs btn-ghost underline' onClick={handleHelpfulClick}>Yes</button>
          <span>({helpfulCount}) | </span>
          <button className='btn btn-xs btn-ghost'>Add Answer</button>
        </span>
      </div>
      <div className='flex'>
        <span>A: </span>
        <AnswersList answers={answers}/>
      </div>
      <button className='btn btn-xs btn-ghost'>LOAD MORE ANSWERS</button>
    </li>
  )
}

Question.propTypes = {
  question: PropTypes.object.isRequired
}
