import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Answer from '../components/answer.jsx';
import AnswersList from '../components/answers-list.jsx';

describe('Answers List', () => {
  const testAnswers = [
    {answer_id: 1, body:'IDK how to help', date: '2023-02-06T00:00:00.000Z', answerer_name: 'testperson123', helpfulness: 0, photos: [{
    "id": 5347688,
    "url": "https://www.cnet.com/a/img/resize/b7707b8ad323bc77e6c9baca0e0950097fdb40f0/hub/2020/11/05/27b4a2c6-e262-4136-8edc-ceb2715371a2/guardians1.jpg?auto=webp&fit=crop&height=675&width=1200"
    }]},
    {answer_id: 2, body:'Not sure?', date: '2023-02-06T00:00:00.000Z', answerer_name: 'johnsmith123', helpfulness: 1, photos: []}
  ];

  test('renders the Answers List component and a list of answers', () => {
    render(<AnswersList answers={testAnswers}/>)

    const listItems = screen.getAllByRole('listitem');

    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(listItems.length).toBe(2);
  })

  test('conditionally renders a note to add answers if answer list is empty', () => {
    render(<AnswersList answers={[]} />);

    expect(screen.getByText('No answers yet, try adding one!')).toBeInTheDocument();
  })
})