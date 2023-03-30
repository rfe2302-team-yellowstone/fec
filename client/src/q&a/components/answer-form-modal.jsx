import React, { useState } from 'react';
import axios from 'axios';
import useForm from '../hooks/useForm.js';
import UploadWidget from './upload-widget.jsx';

export function AnswerFormModal ({isModalOpen, setIsModalOpen, productId, productName, questionBody, questionId}) {

  const [imageURL, setImageURL] = useState(''); // can't easily adapt useForm hook to incorporate gathering multiple image URLs in a single input box
  const [imageURLs, setImageURLs] = useState([]); // we set state and validate the image url input using basic React methods instead
  const [imageLimitReached, setImageLimitReached] = useState(false);

  const defaultErrors = { // errors we pass into useForm custom hook to display on initial form render
    answerBody: 'Required',
    nickname: 'Required',
    email: 'Required'
  }
  const handleExit = (e) => {
    setIsModalOpen(!isModalOpen);
  }
  const handleAddImageURL = e => {
    e.preventDefault();
    if (imageURLs.length === 4) {
      setImageLimitReached(true);
    }
    setImageURLs([...imageURLs, imageURL]);
    setImageURL('');
  }
  const postValues = e => { // custom callback to run after form validates on submit
    axios.post(`/qa/questions/${questionId}/answers`, {
      question_id: questionId,
      body: values.answerBody,
      name: values.nickname,
      email: values.email,
      photos: imageURLs
    })
      .then(response => {
        console.log('successfully posted answer to server')
        setIsModalOpen(!isModalOpen);
        setImageLimitReached(false);
      })
      .catch(err => {
        console.log('unable to send question to server, error:', err);
      })
  }
  const validate = (e, name, value) => { //custom validator based off our form inputs, passed to useForm custom hook
    const requiredError = {
      ...errors,
      [name]: 'Required'
    }
    const clearError = state => {
      const {[name]: value, ...errors} = state;
      return errors;
    }
    switch (name) {
      case 'answerBody':
        if (value.length === 0) {
          setErrors(requiredError);
        } else if (value.length > 1000) {
          setErrors({
            ...errors,
            answerBody: 'Question must be 1000 characters or less.'
          })
        } else {
          setErrors(clearError);
        }
        break;
      case 'nickname':
        if (value.length === 0) {
          setErrors(requiredError);
        } else if (value.length > 60) {
          setErrors({
            ...errors,
            nickname: 'Nickname must be 60 characters or less.'
          })
        } else {
          setErrors(clearError);
        }
        break;
      case 'email':
        if (value.length === 0) {
          setErrors(requiredError);
        } else if (value.length > 60) {
          setErrors({
            ...errors,
            email: 'Email must be 60 characters or less.'
          })
        } else if ( !new RegExp( /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(value)) {
          setErrors({
            ...errors,
            email: 'Enter a valid email address.'
          })
        } else {
          setErrors(clearError);
        }
        break;
      case 'images':
        console.log(value, 'images');
        break;
      default:
        break;
    }
  }
  const { handleChange, handleSubmit, values, errors, setErrors } = useForm(postValues, validate, defaultErrors);

  return (
    <div className={`modal modal-bottom sm:modal-middle ${isModalOpen ? 'modal-open' : ''}`} role='dialog' aria-modal='true' data-testid='answer-form-modal'>
      <div className='modal-box'>
        <h3 className='text-3xl'>Submit Your Answer</h3>
        <h4 className='text-lg mb-2'>{productName}: {questionBody}</h4>
        <form onSubmit={handleSubmit}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Your Answer</span>
            </label>
            <textarea id='answer-body' name='answerBody' placeholder='Type your answer here.' className='textarea textarea-bordered w-full'
            onChange={handleChange}>
            </textarea>
            <label className="label">
              {errors.answerBody && <span className='label-text-alt text-red-500'>{errors.answerBody}</span>}
            </label>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Your Nickname</span>
            </label>
            <input type="text" id='nickname' name='nickname' placeholder='Example: jack543!' className="input input-bordered w-full"
              onChange={handleChange}
            />
            <label className="label">
              {errors.nickname ?
                <span className='label-text-alt text-red-500'>{errors.nickname}</span>
                : <span className="label-text-alt">For privacy reasons, do not use your full name or email address</span>
              }
            </label>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Your email</span>
            </label>
            <input type="text" id='nickname' name='email' placeholder='Example: john.smith@example.com' className="input input-bordered w-full"
              onChange={handleChange}
            />
            <label className="label">
              {errors.email ?
                <span className='label-text-alt text-red-500'>{errors.email}</span>
                : <span className="label-text-alt">For authentication reasons, you will not be emailed</span>
              }
            </label>
          </div>
          {/* <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Your image URLs</span>
            </label>
            <div className="input-group">
              <input type="text" placeholder="Enter image URL" name='imageURL' className="input input-bordered w-full" onChange={e => setImageURL(e.target.value)} value={imageURL}/>
              {!imageLimitReached && <button className="btn btn-square" onClick={handleAddImageURL}>Add</button>}
            </div>
            <label className="label">
              <span className="label-text-alt">Up to 5 images allowed.</span>
            </label>
            <div className='flex'>
              {imageURLs.map(image => {
                return <img key={image} src={image} alt='answer image' className='w-20 border border-solid border-stone-500'/>
              })}
            </div>
          </div> */}
          <UploadWidget imageURLs={imageURLs} setImageURLs={setImageURLs}/>
          {/* <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Cloudinary Upload</span>
            </label>
            <input type="file" className="file-input file-input-bordered w-full" onChange={handleAddImage} multiple/>
            <label className="label">
              <span className="label-text-alt">Error label</span>
            </label>
          </div> */}
          <input type='submit' value='Submit Question' className='btn btn-primary mt-4'/>
        </form>
        <div className="modal-action">
          <label className="btn btn-sm btn-circle absolute right-2 top-2" onClick={handleExit}>X</label>
        </div>
      </div>
    </div>
  )
}

export default AnswerFormModal;