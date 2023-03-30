import React, {useState, useEffect} from 'react';
import AnswersList from './answers-list.jsx';
import AnswerFormModal from './answer-form-modal.jsx';
import axios from 'axios';
import PropTypes from 'prop-types';

export default function Question ({question, productName}) {
  const [answers, setAnswers] = useState([]);
  const [allAnswers, setAllAnswers] = useState([]);
  const [helpfulCount, setHelpfulCount] = useState(question.question_helpfulness)
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    axios.get(`/qa/questions/${question.question_id}/answers`, {
      params: {
        'count': 100
      }
    })
      .then(response => {
        // console.log('successfully retrieved answers from Atelier Answers API:', response.data.results)
        setAnswers(response.data.results.slice(0, 2));
        setAllAnswers(response.data.results);
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
  const handleAddAnswerClick = e => {
    setIsModalOpen(!isModalOpen);
  }
  const handleLoadMoreAnswersClick = e => {
    setAnswers(allAnswers.slice(0, answers.length + 2));
  }

  return (
    <li className='border p-2 border-gray-200 rounded-lg shadow-sm'>
      <div className='flex mb-2'>
        <span className='w-8/12'>
          <span className='text-xl font-bold'>Q: </span>
          <span className='text-lg ml-4 font-semibold'>{question.question_body}</span>
        </span>
        <span className='ml-auto'>
          <span>Helpful? </span>
          <button className='btn btn-xs btn-ghost underline' onClick={handleHelpfulClick}>Yes</button>
          <span>({helpfulCount}) | </span>
          <button className='btn btn-xs btn-ghost underline' onClick={handleAddAnswerClick}>Add Answer</button>
        </span>
      </div>
      <div className='flex'>
        <span className='text-xl font-bold'>A: </span>
        <AnswersList answers={answers}/>
      </div>
      {allAnswers.length === answers.length
        ? <button className='btn btn-xs btn-ghost btn-disabled ml-9'>NO MORE ANSWERS</button>
        : <button className='btn btn-xs btn-ghost ml-9' onClick={handleLoadMoreAnswersClick}>LOAD MORE ANSWERS</button>
      }
      <AnswerFormModal setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} questionId={question.question_id} productName={productName} questionBody={question.question_body}/>
    </li>
  )
}

Question.propTypes = {
  question: PropTypes.object.isRequired
}
