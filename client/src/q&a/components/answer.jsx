import React, {useState} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

export default function Answer ({answer, setIsModalOpen, isModalOpen, setFullscreenImgURL}) {
  const [helpfulCount, setHelpfulCount] = useState(answer.helpfulness)

  const handleImageClick = (e) => {
    setIsModalOpen(!isModalOpen);
    setFullscreenImgURL(e.target.getAttribute('src'));
  }

  const handleHelpfulClick = e => {
    axios.put(`http://localhost:3000/qa/answers/${answer.answer_id}/helpful`)
      .then(response => {
        setHelpfulCount(helpfulCount + 1);
      })
      .catch(err => {
        console.log('unable to mark Answer as helpful, error:', err);
      })
  }

  const handleReportClick = e => {
    axios.put(`http://localhost:3000/qa/answers/${answer.answer_id}/report`)
      .catch(err => {
        console.log('unable to report answer, error:', err);
      })
  }

  return (
    <li className='mb-2 border border-gray-200 rounded-lg shadow-sm p-2'>
      <div className='mb-2 text-gray-700'>{answer.body}</div>
      <div className='mb-2 flex'>
        {answer.photos.map(photo => {
          return <img onClick={handleImageClick} key={photo.url} src={photo.url} alt='answer image' className='w-12 h-10 border border-solid border-stone-500'/>
        })}
      </div>
      <div>
        <span className='text-sm text-gray-600'>by {answer.answerer_name}, {answer.date.slice(0, 10)}</span>
        <span className='text-sm'> | Helpful? </span>
        <button className='btn btn-xs btn-ghost -m-2 mr-0.5 underline' onClick={handleHelpfulClick}>Yes</button>
        <span className='text-sm'>({helpfulCount}) | </span>
        <button className='btn btn-xs btn-ghost underline' onClick={handleReportClick}>Report</button>
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