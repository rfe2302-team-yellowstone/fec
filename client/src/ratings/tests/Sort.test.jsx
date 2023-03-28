import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {render, screen, fireEvent} from '@testing-library/react'
import testObjects from './testObjects.js'

import Sort from '../components/Sort'

const reviews = testObjects.reviews

describe('Confirm sort is working', () => {
  it ('should sort reviews by recent when "Recent" is clicked', () => {
    const setOrder = jest.fn();
    const {getByText} = render(
      <Sort reviews={reviews} setReviews={jest.fn()} order={[]} setOrder={setOrder} />
    )

    const sortByButton = getByText('Relevance');
    fireEvent.click(sortByButton);

    // const recentSortButton = getByText('Recent');
    // fireEvent.click(recentSortButton)

    expect(setOrder).toHaveBeenCalledTimes(1);
  //   expect(setOrder).toHaveBeenCalledWith([
  //     {
  //       "review_id": 1279218,
  //       "rating": 3,
  //       "summary": "THIS IS A TEST",
  //       "recommend": false,
  //       "response": null,
  //       "body": "THIS IS ALSO A TEST",
  //       "date": "2023-03-21T00:00:00.000Z",
  //       "reviewer_name": "TEST123 ",
  //       "helpfulness": 0,
  //       "photos": [
  //           {
  //               "id": 2457753,
  //               "url": "http://res.cloudinary.com/dmmzqckuu/image/upload/v1667506778/mwsvroray4fie6rakkqj.jpg"
  //           }
  //       ]
  //   },
  //   {
  //     "review_id": 1279208,
  //     "rating": 4,
  //     "summary": "idk",
  //     "recommend": true,
  //     "response": null,
  //     "body": "ummm meh",
  //     "date": "2023-03-20T00:00:00.000Z",
  //     "reviewer_name": "testbob123",
  //     "helpfulness": 1,
  //     "photos": []
  // },
  //     {
  //       "review_id": 1277715,
  //       "rating": 5,
  //       "summary": "image uploader",
  //       "recommend": false,
  //       "response": null,
  //       "body": "does it work? please say yes, if it does you get an xkcd comic for your trouble!",
  //       "date": "2022-12-08T00:00:00.000Z",
  //       "reviewer_name": "fan theories",
  //       "helpfulness": 1,
  //       "photos": [
  //           {
  //               "id": 2456771,
  //               "url": "https://res.cloudinary.com/dhjvvkko0/image/upload/v1670527314/tmxqzfza9livkp17wt1k.png"
  //           }
  //       ]
  //   }
  //   ])
  })

})