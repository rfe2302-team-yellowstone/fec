import React, { useState } from 'react';
import QuestionFormModal from './question-form-modal.jsx';

const QAndAFooter = ({productId, productName, allQuestions, setQuestions, questions}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddAQuestionClick = e => {
    setIsModalOpen(!isModalOpen);
  }
  const handleMoreQuestionsClick = e => {
    setQuestions(allQuestions.slice(0, questions.length + 2))
  }

  return (
    <footer className='my-2 w-10/12'>
      {allQuestions.length === questions.length
        ? <button className='btn' disabled>NO MORE QUESTIONS</button>
        : <button className='btn mx-4' onClick={handleMoreQuestionsClick}>MORE QUESTIONS</button>
      }
      <button className='btn btn-primary mx-4' onClick={handleAddAQuestionClick}>ADD A QUESTION</button>
      <QuestionFormModal setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} productId={productId} productName={productName}/>
    </footer>
  )
}

export default QAndAFooter;