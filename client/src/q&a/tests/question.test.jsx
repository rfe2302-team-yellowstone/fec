/* eslint-disable testing-library/no-wait-for-multiple-assertions */
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Question from '../components/question.jsx';
import axios from 'axios';

jest.mock('axios');
jest.mock('../components/upload-widget.jsx');

describe('Question', () => {
  const question = {
    "question_id": 644373,
    "question_body": "question 1",
    "question_date": "2022-12-08T00:00:00.000Z",
    "asker_name": "tester",
    "question_helpfulness": 45,
    "reported": false
  }
  const productName = 'Camo Onesie';

  test('calls axios GET request after initial render', async () => {
    axios.get.mockResolvedValue({
      data: {
        "question": "644373",
    "page": 1,
    "count": "100",
    "results": [
        {
            "answer_id": 5990966,
            "body": "dudeeeeeeeeeeee",
            "date": "2023-03-22T00:00:00.000Z",
            "answerer_name": "dude",
            "helpfulness": 88,
            "photos": []
        },
        {
            "answer_id": 5991269,
            "body": "daniel daamn!!!!",
            "date": "2023-03-27T00:00:00.000Z",
            "answerer_name": "Daniel",
            "helpfulness": 3,
            "photos": []
        },
        {
            "answer_id": 5991293,
            "body": "I'm the seller",
            "date": "2023-03-28T00:00:00.000Z",
            "answerer_name": "seller",
            "helpfulness": 2,
            "photos": []
        },
        {
            "answer_id": 5991276,
            "body": "I have the answers",
            "date": "2023-03-27T00:00:00.000Z",
            "answerer_name": "anwerman",
            "helpfulness": 1,
            "photos": []
        },
        {
            "answer_id": 5991275,
            "body": "This is a new answer",
            "date": "2023-03-27T00:00:00.000Z",
            "answerer_name": "DJK",
            "helpfulness": 1,
            "photos": []
        },
        {
            "answer_id": 5991360,
            "body": "test",
            "date": "2023-03-29T00:00:00.000Z",
            "answerer_name": "testguy123",
            "helpfulness": 0,
            "photos": [
                {
                    "id": 5347778,
                    "url": "https://res.cloudinary.com/dpmnfzxgr/image/upload/v1680125545/vvit2syfxwfifd2mwwyr.jpg"
                },
                {
                    "id": 5347779,
                    "url": "https://res.cloudinary.com/dpmnfzxgr/image/upload/v1680125545/r91jiq5liqs6mz4aakj6.jpg"
                },
                {
                    "id": 5347780,
                    "url": "https://res.cloudinary.com/dpmnfzxgr/image/upload/v1680125545/osrps4afonwlk88rlm6r.jpg"
                }
            ]
        },
        {
            "answer_id": 5991264,
            "body": "dsfsdfsd",
            "date": "2023-03-27T00:00:00.000Z",
            "answerer_name": "dsfsdf",
            "helpfulness": 0,
            "photos": []
        }
    ]
      },
      status: 201,
      statusText: 'OK',
      headers: {},
      config: {},
      request: {}
    })

    render(<Question key={question.question_id} question={question} productName={productName} />)

    expect(screen.getByRole('list')).toBeInTheDocument();

    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledWith(`/qa/questions/${question.question_id}/answers`, {
        params: {
          'count': 100
        }
      })
    })
  })

  test('updates helpful count and sends PUT request to API when user clicks helpful button and request is successful', async () => {
    axios.put.mockResolvedValue({
      data: {},
      status: 201,
      statusText: 'OK',
      headers: {},
      config: {},
      request: {}
    })

    render(<Question key={question.question_id} question={question} productName={productName} />)

    const helpfulSpan = screen.getByText(/45/);

    fireEvent.click(screen.getByRole('button', {name: 'Yes'}));

    expect(screen.getByRole('list')).toBeInTheDocument();
    await waitFor(() => {
      expect(axios.put).toHaveBeenCalledWith(`/qa/questions/${question.question_id}/helpful`)
    })
    expect(helpfulSpan).toHaveTextContent('(46) |');
  })

  test('does not update helpful count and sends PUT request to API when user clicks helpful button and request is unsuccessful', async () => {
    axios.put.mockRejectedValue('unable to mark Question as helpful')

    render(<Question key={question.question_id} question={question} productName={productName} />)

    const helpfulSpan = screen.getByText(/45/);

    fireEvent.click(screen.getByRole('button', {name: 'Yes'}));

    await waitFor(() => {
      expect(axios.put).toHaveBeenCalledWith(`/qa/questions/${question.question_id}/helpful`)
    })
    expect(helpfulSpan).toHaveTextContent('(45) |');
  })

  test('opens the Answer Form Modal component when user clicks on Add Answer button', async () => {
    render(<Question key={question.question_id} question={question} productName={productName} />)

    fireEvent.click(screen.getByRole('button', {name: 'Add Answer'}));

    await waitFor(() => {
      expect(screen.getByTestId('answer-form-modal')).toHaveClass('modal-open');
    })
  })

})