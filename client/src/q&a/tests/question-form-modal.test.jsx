import React, { useState } from 'react';
import axios from 'axios';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import QuestionFormModal from '../components/question-form-modal.jsx';

jest.mock('axios');

describe('Question Form Modal', () => {
  const fullscreenImageURL = 'https://www.cnet.com/a/img/resize/b7707b8ad323bc77e6c9baca0e0950097fdb40f0/hub/2020/11/05/27b4a2c6-e262-4136-8edc-ceb2715371a2/guardians1.jpg?auto=webp&fit=crop&height=675&width=1200';

  test('closes the modal when user clicks on X button', () => {
    const isModalOpen = false;
    const setIsModalOpen = jest.fn();
    const productId = 37311;
    const productName = 'Camo Onesie';

    const TestComponent = () => {
      const [isModalOpen, setIsModalOpen] = useState(true);

      return (
        <QuestionFormModal setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} productId={productId} productName={productName}/>
      );
    }

    render(<TestComponent />);

    fireEvent.click(screen.getByText('X'));

    expect(screen.getByRole('dialog')).not.toHaveClass('modal-open');
  })

  test('submits the input values when submit button is clicked and POST request successful', async () => {
    const isModalOpen = false;
    const setIsModalOpen = jest.fn();
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
        <QuestionFormModal setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} productId={productId} productName={productName}/>
      );
    }

    render(<TestComponent />);

    fireEvent.change(screen.getByLabelText('Your Question'), {target: {value: 'Does this fit?'}});
    fireEvent.change(screen.getByLabelText('Your Nickname'), {target: {value: 'testperson123'}});
    fireEvent.change(screen.getByLabelText('Your email'), {target: {value: 'test@example.com'}});
    fireEvent.click(screen.getByRole('button', {name: 'Submit Question'}));

    expect(screen.getByTestId('question-form')).toHaveFormValues({
      questionBody: 'Does this fit?',
      nickname: 'testperson123',
      email: 'test@example.com'
    })

    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledWith('/qa/questions', {
        body: 'Does this fit?',
        name: 'testperson123',
        email: 'test@example.com',
        product_id: 37311
      });
    });
  })

  test('closes the modal when user clicks on X button', () => {
    const isModalOpen = false;
    const setIsModalOpen = jest.fn();
    const productId = 37311;
    const productName = 'Camo Onesie';

    const TestComponent = () => {
      const [isModalOpen, setIsModalOpen] = useState(true);

      return (
        <QuestionFormModal setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} productId={productId} productName={productName}/>
      );
    }

    render(<TestComponent />);

    fireEvent.click(screen.getByText('X'));

    expect(screen.getByRole('dialog')).not.toHaveClass('modal-open');
  })

  test('submits the input values when submit button is clicked and POST request unsuccessful', async () => {
    const isModalOpen = false;
    const setIsModalOpen = jest.fn();
    const productId = 37311;
    const productName = 'Camo Onesie';

    axios.post.mockRejectedValue(new Error('unable to send question to server'));

    const TestComponent = () => {
      const [isModalOpen, setIsModalOpen] = useState(true);

      return (
        <QuestionFormModal setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} productId={productId} productName={productName}/>
      );
    }

    render(<TestComponent />);

    fireEvent.change(screen.getByLabelText('Your Question'), {target: {value: 'Does this fit?'}});
    fireEvent.change(screen.getByLabelText('Your Nickname'), {target: {value: 'testperson123'}});
    fireEvent.change(screen.getByLabelText('Your email'), {target: {value: 'test@example.com'}});
    fireEvent.click(screen.getByRole('button', {name: 'Submit Question'}));

    expect(screen.getByTestId('question-form')).toHaveFormValues({
      questionBody: 'Does this fit?',
      nickname: 'testperson123',
      email: 'test@example.com'
    })

    await expect(axios.post).rejects.toThrow('unable to send question to server');
  })

  test('shows form validation errors when user doesn\'nt input any values', async () => {
    const isModalOpen = false;
    const setIsModalOpen = jest.fn();
    const productId = 37311;
    const productName = 'Camo Onesie';

    const TestComponent = () => {
      const [isModalOpen, setIsModalOpen] = useState(true);

      return (
        <QuestionFormModal setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} productId={productId} productName={productName}/>
      );
    }

    render(<TestComponent />);

    fireEvent.change(screen.getByLabelText('Your Question'), {target: {value: 'test'}});
    fireEvent.change(screen.getByLabelText('Your Question'), {target: {value: ''}});
    fireEvent.change(screen.getByLabelText('Your Nickname'), {target: {value: 'test'}});
    fireEvent.change(screen.getByLabelText('Your Nickname'), {target: {value: ''}});
    fireEvent.change(screen.getByLabelText('Your email'), {target: {value: 'test@example.com'}});
    fireEvent.change(screen.getByLabelText('Your email'), {target: {value: ''}});
    fireEvent.click(screen.getByRole('button', {name: 'Submit Question'}));

    expect(screen.getByTestId('question-form')).toHaveFormValues({
      questionBody: '',
      nickname: '',
      email: ''
    })

    expect(screen.getByTestId('question-body-bottom-label')).toHaveTextContent('Required');
    expect(screen.getByTestId('nickname-bottom-label')).toHaveTextContent('Required');
    expect(screen.getByTestId('email-bottom-label')).toHaveTextContent('Required');

    await waitFor(() => {
      expect(axios.post).not.toHaveBeenCalledWith('/qa/questions', {
        body: '',
        name: '',
        email: '',
        product_id: 37311
      });
    });
  })

  test('shows form validation errors when user doesn\'nt input correct email', async () => {
    const isModalOpen = false;
    const setIsModalOpen = jest.fn();
    const productId = 37311;
    const productName = 'Camo Onesie';

    const TestComponent = () => {
      const [isModalOpen, setIsModalOpen] = useState(true);

      return (
        <QuestionFormModal setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} productId={productId} productName={productName}/>
      );
    }

    render(<TestComponent />);

    fireEvent.change(screen.getByLabelText('Your Question'), {target: {value: 'test'}});
    fireEvent.change(screen.getByLabelText('Your Nickname'), {target: {value: 'test'}});
    fireEvent.change(screen.getByLabelText('Your email'), {target: {value: 'test'}});
    fireEvent.click(screen.getByRole('button', {name: 'Submit Question'}));

    expect(screen.getByTestId('question-form')).toHaveFormValues({
      questionBody: 'test',
      nickname: 'test',
      email: 'test'
    })

    expect(screen.getByTestId('question-body-bottom-label')).not.toHaveTextContent('Required');
    expect(screen.getByTestId('nickname-bottom-label')).not.toHaveTextContent('Required');
    expect(screen.getByTestId('email-bottom-label')).toHaveTextContent('Enter a valid email address.');

    await waitFor(() => {
      expect(axios.post).not.toHaveBeenCalledWith('/qa/questions', {
        body: '',
        name: '',
        email: '',
        product_id: 37311
      });
    });
  })


})