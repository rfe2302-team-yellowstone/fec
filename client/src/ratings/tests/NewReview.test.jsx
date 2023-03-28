import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {render, screen, fireEvent} from '@testing-library/react'
import testObjects from './testObjects.js'

import NewReview from '../components/NewReview.jsx'

const product = testObjects.product

describe('New Review Modal component', () => {
  it('modal window should appear when "Add a review" button is clicked', () => {
    const {getByText, getByTestId} = render(<NewReview product={product}/>)
    const addButton = getByText('Add a review')

    fireEvent.click(addButton)
    expect(getByTestId('modal')).toBeInTheDocument()
  })
})