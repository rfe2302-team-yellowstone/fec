import React from 'react';
import {useState} from 'react';
import Answer from './answer.jsx';
import ImgFullscreenModal from './img-fullscreen-modal.jsx';

const AnswersList = ({answers}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fullscreenImageURL, setFullscreenImgURL] = useState('')

  return (
    <ul className='ml-1'>
      {answers.map(answer => {
        return <Answer key={answer.answer_id} answer={answer} setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} setFullscreenImgURL={setFullscreenImgURL}/>
      })}
      <ImgFullscreenModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} fullscreenImageURL={fullscreenImageURL}/>
    </ul>
  )
}

export default AnswersList;