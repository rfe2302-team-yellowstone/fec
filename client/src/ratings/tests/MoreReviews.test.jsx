import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {render, screen, fireEvent} from '@testing-library/react'
import testObjects from './testObjects.js'
import MoreReviews from '../components/MoreReviews.jsx'

describe('More Review Functionality', () => {
  test('Increases number of Max Reviews from 2 to 4 on button click', () => {
    const maxReviews = 2
    const setMaxReviews = jest.fn()
    const reviews = [1, 2, 3, 4, 5]

      const {getByRole} = render(
        <MoreReviews maxReviews={maxReviews} setMaxReviews={setMaxReviews} reviews={reviews}></MoreReviews>
      )

      const button = getByRole('button');
      expect(button).toHaveTextContent('More Reviews')

      fireEvent.click(button)
      expect(setMaxReviews).toHaveBeenCalledWith(4)

  })
})