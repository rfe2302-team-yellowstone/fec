import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Answer from '../components/answer.jsx';

describe('Answer', () => {

  test('should render the answer component and the helpful and report buttons', () => {
    const answer = {answer_id: 123, date: '2023-02-06T00:00:00.000Z', answerer_name: 'testperson123', helpfulness: 50, photos: [{
      "id": 5347688,
      "url": "https://www.cnet.com/a/img/resize/b7707b8ad323bc77e6c9baca0e0950097fdb40f0/hub/2020/11/05/27b4a2c6-e262-4136-8edc-ceb2715371a2/guardians1.jpg?auto=webp&fit=crop&height=675&width=1200"
  }]};
    const setIsModalOpen = jest.fn();
    const isModalOpen = false;
    const setFullscreenImgURL = jest.fn();

    render(<Answer answer={answer} setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} setFullscreenImgURL={setFullscreenImgURL}/>)

    expect(screen.getByRole('button', {name: 'Yes'}))
    expect(screen.getByRole('button', {name: 'Report'}));
  })
})