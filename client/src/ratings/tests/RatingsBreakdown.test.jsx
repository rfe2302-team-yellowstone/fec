import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {render, screen, fireEvent} from '@testing-library/react'

import testObjects from './testObjects.js'
// import {configure, shallow} from 'enzyme'
// import Adapter from 'enzyme-adapter-react-15'
// configure({adater: new Adapter()})


import RatingBreakdown from '../components/RatingBreakdown.jsx'
import ReviewTile from '../components/ReviewTile.jsx'

const reviews = testObjects.reviews
const metaData = testObjects.metaData
const review = testObjects.review


// describe('RatingsBreakdown', () => {
//   test('renders the RatingsBreakdown component', () => {
//     render(<RatingBreakdown reviews={reviews} metaData={metaData} />);
//     expect(screen.getByText('Ratings & Reviews')).toBeInTheDocument
//   })
// })

describe('ReviewTile', () => {
  test('renders review component', () => {
    render(<ReviewTile review={review}/>)
    expect(screen.getByText('Report')).toBeInTheDocument()
  })
})