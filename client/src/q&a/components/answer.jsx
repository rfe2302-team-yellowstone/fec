import React from 'react';

const Answer = ({answer}) => {

  return (
    <li>
      <div>{answer.body}</div>
      <div>
        {answer.photos.map(photoURL => {
          return <img src={photoURL} alt='answer image' className='w-20'/>
        })}
      </div>
      <div>by {answer.answerer_name} | Helpful? </div>
      <button>Yes</button>
      <span> | </span>
      <button>Report</button>
    </li>
  )
}

export default Answer;