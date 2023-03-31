import React, { useState } from 'react';
import axios from 'axios';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import AnswerFormModal from '../components/answer-form-modal.jsx';

jest.mock('axios');
jest.mock('../components/upload-widget.jsx');


describe('Answer Form Modal', () => {
  const question = {
    "question_id": 644373,
    "question_body": "question 1",
    "question_date": "2022-12-08T00:00:00.000Z",
    "asker_name": "tester",
    "question_helpfulness": 45,
    "reported": false
  }
  const productName = 'Camo Onesie';


  test('closes the modal when user clicks on X button', () => {
    const TestComponent = () => {
      const [isModalOpen, setIsModalOpen] = useState(true);

      return (
        <AnswerFormModal setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} questionId={question.question_id} productName={productName} questionBody={question.question_body}/>
      );
    }

    render(<TestComponent />);

    fireEvent.click(screen.getByText('X'));

    expect(screen.getByRole('dialog')).not.toHaveClass('modal-open');
  })

  test('submits the input values when submit button is clicked and POST request successful', async () => {
    const productId = 37311;
    const productName = 'Camo Onesie';

    axios.post.mockResolvedValue({
      data: {},
      status: 201,
      statusText: 'OK',
      headers: {},
      config: {},
      request: {}
    })

    const TestComponent = () => {
      const [isModalOpen, setIsModalOpen] = useState(true);

      return (
        <AnswerFormModal setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} productId={productId} productName={productName}/>
      );
    }

    render(<TestComponent />);

    fireEvent.change(screen.getByLabelText('Your Answer'), {target: {value: 'Maybe?'}});
    fireEvent.change(screen.getByLabelText('Your Nickname'), {target: {value: 'testperson123'}});
    fireEvent.change(screen.getByLabelText('Your email'), {target: {value: 'test@example.com'}});
    fireEvent.click(screen.getByRole('button', {name: 'Submit Answer'}));

    expect(screen.getByTestId('answer-form')).toHaveFormValues({
      answerBody: 'Maybe?',
      nickname: 'testperson123',
      email: 'test@example.com',
    })

    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledWith(`/qa/questions/${question.questionId}/answers`, {
        question_id: question.questionId,
        body: 'Maybe?',
        name: 'testperson123',
        email: 'test@example.com',
        photos: []
      });
    });
  })

  test('closes the modal when user clicks on X button', () => {
    const TestComponent = () => {
      const [isModalOpen, setIsModalOpen] = useState(true);

      return (
        <AnswerFormModal setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} questionId={question.question_id} productName={productName} questionBody={question.question_body}/>
      );
    }

    render(<TestComponent />);

    fireEvent.click(screen.getByText('X'));

    expect(screen.getByRole('dialog')).not.toHaveClass('modal-open');
  })

  test('submits the input values when submit button is clicked and POST request unsuccessful', async () => {
    axios.post.mockRejectedValue(new Error('unable to send answer to server'));

    const TestComponent = () => {
      const [isModalOpen, setIsModalOpen] = useState(true);

      return (
        <AnswerFormModal setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} questionId={question.question_id} productName={productName} questionBody={question.question_body}/>
      );
    }

    render(<TestComponent />);

    fireEvent.change(screen.getByLabelText('Your Answer'), {target: {value: 'Maybe?'}});
    fireEvent.change(screen.getByLabelText('Your Nickname'), {target: {value: 'testperson123'}});
    fireEvent.change(screen.getByLabelText('Your email'), {target: {value: 'test@example.com'}});
    fireEvent.click(screen.getByRole('button', {name: 'Submit Answer'}));

    expect(screen.getByTestId('answer-form')).toHaveFormValues({
      answerBody: 'Maybe?',
      nickname: 'testperson123',
      email: 'test@example.com'
    })

    await expect(axios.post).rejects.toThrow('unable to send answer to server');
  })

  test('shows form validation errors when user doesn\'nt input any values', async () => {
    const TestComponent = () => {
      const [isModalOpen, setIsModalOpen] = useState(true);

      return (
        <AnswerFormModal setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} questionId={question.question_id} productName={productName} questionBody={question.question_body}/>
      );
    }

    render(<TestComponent />);

    fireEvent.change(screen.getByLabelText('Your Answer'), {target: {value: 'test'}});
    fireEvent.change(screen.getByLabelText('Your Answer'), {target: {value: ''}});
    fireEvent.change(screen.getByLabelText('Your Nickname'), {target: {value: 'test'}});
    fireEvent.change(screen.getByLabelText('Your Nickname'), {target: {value: ''}});
    fireEvent.change(screen.getByLabelText('Your email'), {target: {value: 'test@example.com'}});
    fireEvent.change(screen.getByLabelText('Your email'), {target: {value: ''}});
    fireEvent.click(screen.getByRole('button', {name: 'Submit Answer'}));

    expect(screen.getByTestId('answer-form')).toHaveFormValues({
      answerBody: '',
      nickname: '',
      email: ''
    })

    expect(screen.getByTestId('answer-body-bottom-label')).toHaveTextContent('Required');
    expect(screen.getByTestId('nickname-bottom-label')).toHaveTextContent('Required');
    expect(screen.getByTestId('email-bottom-label')).toHaveTextContent('Required');

    await waitFor(() => {
      expect(axios.post).not.toHaveBeenCalledWith(`/qa/questions/${question.questionId}/answers`, {
        body: '',
        name: '',
        email: '',
        product_id: 37311
      });
    });
  })

  test('shows form validation errors when user doesn\'nt input correct email', async () => {
    const TestComponent = () => {
      const [isModalOpen, setIsModalOpen] = useState(true);

      return (
        <AnswerFormModal setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} questionId={question.question_id} productName={productName} questionBody={question.question_body}/>
      );
    }

    render(<TestComponent />);

    fireEvent.change(screen.getByLabelText('Your Answer'), {target: {value: 'test'}});
    fireEvent.change(screen.getByLabelText('Your Nickname'), {target: {value: 'test'}});
    fireEvent.change(screen.getByLabelText('Your email'), {target: {value: 'test'}});
    fireEvent.click(screen.getByRole('button', {name: 'Submit Answer'}));

    expect(screen.getByTestId('answer-form')).toHaveFormValues({
      answerBody: 'test',
      nickname: 'test',
      email: 'test'
    })

    expect(screen.getByTestId('answer-body-bottom-label')).not.toHaveTextContent('Required');
    expect(screen.getByTestId('nickname-bottom-label')).not.toHaveTextContent('Required');
    expect(screen.getByTestId('email-bottom-label')).toHaveTextContent('Enter a valid email address.');

    await waitFor(() => {
      expect(axios.post).not.toHaveBeenCalledWith(`/qa/questions/${question.questionId}/answers`, {
        question_id: question.questionId,
        body: '',
        name: '',
        email: '',
        photos: []
      });
    });
  })
})