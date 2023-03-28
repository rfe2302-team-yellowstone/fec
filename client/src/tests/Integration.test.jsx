import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import testObjects from './testObjects.js';
import App from '../app.jsx';
import {setupStore} from './store.js';

// Mocking subcomponent (circumventing issue with loading components in testing)

jest.mock('../related/related_outfit.jsx', () => () => <div data-testid="related-outfit"></div>);
jest.mock('../overview/index.jsx', () => () => <div data-testid="overview"></div>);
jest.mock('../ratings/Ratings.jsx', () => () => <div data-testid="ratings"></div>);
jest.mock('../q&a/qa.jsx', () => () => <div data-testid="q-and-a"></div>);

test('if App is rendering', () => {
  const store = setupStore()
  render(
    <Provider store={store}>
      <App product={testObjects.product1}/>
    </Provider>
  )
  const appElement = screen.getByTestId('app-container');
  expect(appElement).toBeInTheDocument()
  expect(screen.getByTestId('related-outfit')).toBeInTheDocument()
  expect(screen.getByTestId('overview')).toBeInTheDocument()
  expect(screen.getByTestId('ratings')).toBeInTheDocument()
  expect(screen.getByTestId('q-and-a')).toBeInTheDocument()
})

test('clicking on "bright future sunglasses" button should update the selected product to bright future sunglasses in all components', () => {
  const store = setupStore()
  render(
    <Provider store={store}>
      <App product={testObjects.product1}/>
    </Provider>
  )

  /// findning sunglasses item
  const sunglassesItem = screen.getByText('Bright Future Sunglasses');
  fireEvent.click(sunglassesItem)

  const overviewComponent = screen.getByTestId('overview');
  expect(overviewComponent.toHaveTextContent('Bright Future Sunglasses'))

  const ratingsComponent = screen.getByTestId('ratings')
  expect(ratingsComponent.toHaveTextContent('Bright Future Sunglasses'))

  const relatedComponent = screen.getByTestId('related-outfit')
  expect(relatedComponent.toHaveTextContent('Bright Future Sunglasses'))

  const qAndAComponent = screen.getByTestId('q-and-a')
  expect(qAndAComponent).toHaveTextContent('Bright Future Sunglasses')
})