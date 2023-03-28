import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {render, screen, fireEvent} from '@testing-library/react'
import testObjects from './testObjects.js'
import App from '../../app.jsx'

test('if App is rendering', () => {
  render(<App></App>)
  const appElement = screen.getByTestId('app-container')
  expect(appElement).toBeInTheDocument()
})

// describe('when a related items tile is clicked', () => {
//   let productId;
//   let componentMocks;
// })