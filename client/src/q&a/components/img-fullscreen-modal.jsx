import React from 'react';
import {useState} from 'react';

const ImgFullscreenModal = ({isModalOpen, setIsModalOpen, fullscreenImageURL}) => {
  const handleExit = (e) => {
    console.log('click!')
    setIsModalOpen(!isModalOpen);
  }

  return (
    <div className={`modal modal-bottom sm:modal-middle ${isModalOpen ? 'modal-open' : ''}`}>
      <div className='modal-box'>
        <img src={fullscreenImageURL}/>
        <div className="modal-action">
          <label className="btn btn-primary" onClick={handleExit}>X</label>
        </div>
      </div>
    </div>
  )
}

export default ImgFullscreenModal;