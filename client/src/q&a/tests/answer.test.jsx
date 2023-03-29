/* eslint-disable testing-library/no-wait-for-multiple-assertions */
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Answer from '../components/answer.jsx';
import axios from 'axios';

jest.mock('axios');

describe('Answer', () => {
  const testAnswer = {answer_id: 123, date: '2023-02-06T00:00:00.000Z', answerer_name: 'testperson123', helpfulness: 0, photos: [{
    "id": 5347688,
    "url": "https://www.cnet.com/a/img/resize/b7707b8ad323bc77e6c9baca0e0950097fdb40f0/hub/2020/11/05/27b4a2c6-e262-4136-8edc-ceb2715371a2/guardians1.jpg?auto=webp&fit=crop&height=675&width=1200"
  }]};

  test('renders the answer component and the helpful and report buttons', () => {
    const setIsModalOpen = jest.fn();
    const isModalOpen = false;
    const setFullscreenImgURL = jest.fn();

    render(<Answer answer={testAnswer} setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} setFullscreenImgURL={setFullscreenImgURL}/>)

    expect(screen.getByRole('button', {name: 'Yes'})).toBeInTheDocument();
    expect(screen.getByRole('button', {name: 'Report'})).toBeInTheDocument();
  })

  test('updates the helpful count of the answer when the user clicks on the "Yes" button and the axios request is successful', async () => {
    const setIsModalOpen = jest.fn();
    const isModalOpen = false;
    const setFullscreenImgURL = jest.fn();

    render(<Answer answer={testAnswer} setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} setFullscreenImgURL={setFullscreenImgURL}/>)

    const yesButton = screen.getByRole('button', {name: 'Yes'});

    axios.put.mockResolvedValue({
      data: {},
      status: 201,
      statusText: 'OK',
      headers: {},
      config: {},
      request: {}
    })

    fireEvent.click(yesButton);

    await waitFor(() => {
      expect(axios.put).toHaveBeenCalledWith(`http://localhost:3000/qa/answers/${testAnswer.answer_id}/helpful`);
      expect(screen.getByTestId('helpful-count')).toHaveTextContent(`(${testAnswer.helpfulness + 1}) |`);
    })
  })

  test('keeps helpful count of the answer the same when the user clicks on the "Yes" button and the axios request is unsuccessful', async () => {
    const setIsModalOpen = jest.fn();
    const isModalOpen = false;
    const setFullscreenImgURL = jest.fn();

    render(<Answer answer={testAnswer} setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} setFullscreenImgURL={setFullscreenImgURL}/>)

    const yesButton = screen.getByRole('button', {name: 'Yes'});

    axios.put.mockRejectedValue(new Error('unable mark Answer as helpful'));

    fireEvent.click(yesButton);

    await waitFor(() => {
      expect(axios.put).toHaveBeenCalledWith(`http://localhost:3000/qa/answers/${testAnswer.answer_id}/helpful`);
      expect(screen.getByTestId('helpful-count')).toHaveTextContent(`(${testAnswer.helpfulness}) |`);
    })
  })

  test('reports the answer when the user clicks on the "Report" button and the axios request is successful', async () => {
    const setIsModalOpen = jest.fn();
    const isModalOpen = false;
    const setFullscreenImgURL = jest.fn();

    render(<Answer answer={testAnswer} setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} setFullscreenImgURL={setFullscreenImgURL}/>)

    const yesButton = screen.getByRole('button', {name: 'Report'});

    axios.put.mockResolvedValue({
      data: {},
      status: 201,
      statusText: 'OK',
      headers: {},
      config: {},
      request: {}
    })

    fireEvent.click(yesButton);

    await waitFor(() => {
      expect(axios.put).toHaveBeenCalledWith(`http://localhost:3000/qa/answers/${testAnswer.answer_id}/report`);
    })
  })

  test('fails to report the answer when the user clicks on the "Report" button and the axios request is unsuccessful', async () => {
    const setIsModalOpen = jest.fn();
    const isModalOpen = false;
    const setFullscreenImgURL = jest.fn();

    render(<Answer answer={testAnswer} setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} setFullscreenImgURL={setFullscreenImgURL}/>)

    const yesButton = screen.getByRole('button', {name: 'Report'});

    axios.put.mockRejectedValue(new Error('unable to report answer'))

    fireEvent.click(yesButton);

    await waitFor(() => {
      expect(axios.put).toHaveBeenCalledWith(`http://localhost:3000/qa/answers/${testAnswer.answer_id}/report`);
    })
  })

  test('calls setIsModal open and setFullScreenImgURL when user clicks on image', async () => {
    const setIsModalOpen = jest.fn();
    const isModalOpen = false;
    const setFullscreenImgURL = jest.fn();

    render(<Answer answer={testAnswer} setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} setFullscreenImgURL={setFullscreenImgURL}/>)

    const yesButton = screen.getByAltText('answer image');

    axios.put.mockRejectedValue(new Error('unable to report answer'))

    fireEvent.click(yesButton);

    expect(setIsModalOpen).toBeCalled();
    expect(setFullscreenImgURL).toBeCalled();

  })


})