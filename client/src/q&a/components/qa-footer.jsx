import React, { useState } from 'react';
import QuestionFormModal from './question-form-modal.jsx';

const QAndAFooter = ({productId, productName}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddAQuestionClick = e => {
    setIsModalOpen(!isModalOpen);
  }

  return (
    <footer className='my-2 w-[60rem]'>
      <button className='btn mx-4'>MORE ANSWERED QUESTIONS</button>
      <button className='btn mx-4' onClick={handleAddAQuestionClick}>ADD A QUESTION</button>
      <QuestionFormModal setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} productId={productId} productName={productName}/>
    </footer>
  )
}

export default QAndAFooter;