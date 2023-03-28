import React from 'react';
import {useState} from 'react';

const ImgFullscreenModal = ({isModalOpen, setIsModalOpen, fullscreenImageURL}) => {
  const handleExit = (e) => {
    setIsModalOpen(!isModalOpen);
  }

  return (
    <div className={`modal modal-bottom sm:modal-middle ${isModalOpen ? 'modal-open' : ''}`} role='dialog' aria-modal='true'>
      <div className='modal-box'>
        <img src={fullscreenImageURL}/>
        <div className="modal-action">
          <label className="btn btn-sm btn-circle absolute right-2 top-2" onClick={handleExit}>X</label>
        </div>
      </div>
    </div>
  )
}

export default ImgFullscreenModal;