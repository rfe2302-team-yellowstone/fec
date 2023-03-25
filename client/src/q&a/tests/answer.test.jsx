import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Answer from '../components/answer.jsx';

describe('Answer', () => {

  test('should render the answer component and the helpful and report buttons', () => {
    const answer = {};
    const setIsModalOpen = jest.fn();
    const isModalOpen = false;
    const setFullscreenImgURL = jest.fn();

    render(<Answer answer={answer} setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} setFullscreenImgURL={setFullscreenImgURL}/>)

    expect(screen.getByRole('button', {value: {text: 'Yes'}}))
  })
})