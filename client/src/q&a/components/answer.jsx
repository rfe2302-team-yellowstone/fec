import React from 'react';
import PropTypes from 'prop-types';

export default function Answer ({answer, setIsModalOpen, isModalOpen, setFullscreenImgURL}) {
  const handleImageClick = (e) => {
    setIsModalOpen(!isModalOpen);
    setFullscreenImgURL(e.target.getAttribute('src'));
  }

  return (
    <li className='mb-2'>
      <div className='mb-2'>{answer.body}</div>
      <div className='mb-2'>
        {answer.photos.map(photo => {
          return <img onClick={handleImageClick} key={photo.url} src={photo.url} alt='answer image' className='w-20 border border-solid border-stone-500'/>
        })}
      </div>
      <div>
        <span>by {answer.answerer_name} | Helpful? </span>
        <button className='btn btn-xs btn-ghost'>Yes</button>
        <span>({answer.helpfulness}) | </span>
        <button className='btn btn-xs btn-ghost'>Report</button>
      </div>
    </li>
  )
}

Answer.propTypes = {
  answer: PropTypes.object.isRequired,
  setIsModalOpen: PropTypes.func.isRequired,
  isModalOpen: PropTypes.bool.isRequired,
  setFullscreenImgURL: PropTypes.func.isRequired
}