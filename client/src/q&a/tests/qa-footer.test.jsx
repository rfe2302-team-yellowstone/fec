import React, { useState } from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import QAndAFooter from '../components/qa-footer.jsx';

describe('QA Footer', () => {

  test('renders the no more questions button when there are no questions', () => {
    const productId = 37311;
    const productName = 'Camo Onesie';
    const allQuestions = [];
    const setQuestions = jest.fn();
    const questions = [];

    render(<QAndAFooter productId={productId} productName={productName} allQuestions={allQuestions} setQuestions={setQuestions} questions={questions}/>);

    expect(screen.getByRole('button', {name: 'NO MORE QUESTIONS'})).toBeInTheDocument();
    expect(screen.queryByRole('button', {name: 'MORE QUESTIONS'})).not.toBeInTheDocument();
  })

  test('renders the more questions button when there are questions', () => {
    const productId = 37311;
    const productName = 'Camo Onesie';
    const allQuestions = [1];
    const setQuestions = jest.fn();
    const questions = [];

    render(<QAndAFooter productId={productId} productName={productName} allQuestions={allQuestions} setQuestions={setQuestions} questions={questions}/>);

    expect(screen.queryByRole('button', {name: 'NO MORE QUESTIONS'})).not.toBeInTheDocument();
    expect(screen.getByRole('button', {name: 'MORE QUESTIONS'})).toBeInTheDocument();
  })

  test('opens Question Form Modal when user clicks on Add a Question', () => {
    const productId = 37311;
    const productName = 'Camo Onesie';
    const allQuestions = [];
    const setQuestions = jest.fn();
    const questions = [];

    render(<QAndAFooter productId={productId} productName={productName} allQuestions={allQuestions} setQuestions={setQuestions} questions={questions}/>);

    fireEvent.click(screen.getByRole('button', {name: 'ADD A QUESTION'}));

    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByRole('dialog')).toHaveClass('modal-open');
  })

})