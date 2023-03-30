import React from 'react';
import {useState} from 'react';
import Answer from './answer.jsx';
import ImgFullscreenModal from './img-fullscreen-modal.jsx';
import PropTypes from 'prop-types';

export default function AnswersList ({answers}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fullscreenImageURL, setFullscreenImgURL] = useState('')

  return (
    <ul className='ml-4 h-40 overflow-y-auto w-11/12'>
      {answers.map(answer => {
        return <Answer key={answer.answer_id} answer={answer} setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} setFullscreenImgURL={setFullscreenImgURL}/>
      })}
      {answers.length === 0 && <span className='italic'>No answers yet, try adding one!</span>}
      <ImgFullscreenModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} fullscreenImageURL={fullscreenImageURL}/>
    </ul>
  )
}

AnswersList.propTypes = {
  answers: PropTypes.array.isRequired
}