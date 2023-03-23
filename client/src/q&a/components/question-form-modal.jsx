import React, { useState } from 'react';
import axios from 'axios';
import useForm from '../hooks/useForm.js';

export function QuestionFormModal ({isModalOpen, setIsModalOpen, productId, productName}) {

  const defaultErrors = { // errors we pass into useForm custom hook to display on initial form render
    questionBody: 'Required',
    nickname: 'Required',
    email: 'Required'
  }
  const handleExit = (e) => {
    setIsModalOpen(!isModalOpen);
  }
  const postValues = e => { // custom callback to run after form validates on submit
    axios.post(`http://localhost:3000/qa/questions`, {
      product_id: productId,
      body: values.questionBody,
      name: values.nickname,
      email: values.email
    })
      .then(response => {
        console.log('successfully posted question to server')
        setIsModalOpen(!isModalOpen);
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
      case 'questionBody':
        if (value.length === 0) {
          setErrors(requiredError);
        } else if (value.length > 1000) {
          setErrors({
            ...errors,
            questionBody: 'Question must be 1000 characters or less.'
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
      default:
        break;
    }
  }
  const { handleChange, handleSubmit, values, errors, setErrors } = useForm(postValues, validate, defaultErrors);

  return (
    <div className={`modal modal-bottom sm:modal-middle ${isModalOpen ? 'modal-open' : ''}`}>
      <div className='modal-box'>
        <h3 className='text-3xl'>Ask Your Question</h3>
        <h4 className='text-lg mb-2'>About the {productName}</h4>
        <form onSubmit={handleSubmit}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Your Question</span>
            </label>
            <textarea id='question-body' name='questionBody' placeholder='Example: Is this machine washable?' className='textarea textarea-bordered w-full'
            onChange={handleChange}>
            </textarea>
            <label className="label">
              {errors.questionBody && <span className='label-text-alt text-red-500'>{errors.questionBody}</span>}
            </label>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Your Nickname</span>
            </label>
            <input type="text" id='nickname' name='nickname' placeholder='Example: jackson11!' className="input input-bordered w-full"
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
          <input type='submit' value='Submit Question' className='btn btn-primary mt-4'/>
        </form>
        <div className="modal-action">
          <label className="btn btn-sm btn-circle absolute right-2 top-2" onClick={handleExit}>X</label>
        </div>
      </div>
    </div>
  )
}

export default QuestionFormModal;