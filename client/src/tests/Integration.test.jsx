import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import testObjects from './testObjects.js';
import App from '../app.jsx';
import {setupStore} from './store.js';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import Related from "../related/related_outfit.jsx"
import Overview from "../overview/index.jsx"
import Ratings from "../ratings/Ratings.jsx";
import QAndA from "../q&a/qa.jsx";


// Mocking subcomponent (circumventing issue with loading components in testing)

// jest.mock('../related/related_outfit.jsx', () => () => <div data-testid="related-outfit"></div>);
// jest.mock('../overview/index.jsx', () => () => <div data-testid="overview"></div>);
// jest.mock('../ratings/Ratings.jsx', () => () => <div data-testid="ratings"></div>);
// jest.mock('../q&a/qa.jsx', () => () => <div data-testid="q-and-a"></div>);

test('if App is rendering', () => {
  const store = setupStore()
  render(
    <Provider store={store}>
      <App intialProduct={testObjects.product1}/>
    </Provider>
  )
  const appElement = screen.getByTestId('app-container');
  expect(appElement).toBeInTheDocument()
  // expect(screen.getByTestId('related-outfit')).toBeInTheDocument()
  // expect(screen.getByTestId('overview')).toBeInTheDocument()
  // expect(screen.getByTestId('ratings')).toBeInTheDocument()
  // expect(screen.getByTestId('q-and-a')).toBeInTheDocument()
})

// test('clicking on "bright future sunglasses" button should update the selected product to bright future sunglasses in all components', async () => {
//   const store = setupStore()
//  await render(
//     <Provider store={store}>
//       <App initialProduct={testObjects.product1}/>
//     </Provider>
//   )
//   screen.debug()
//   const sunglassesItem = await waitFor(() => screen.queryByText(/bright.*future.*sunglasses/i), {timeout: 5000})
//     console.log(sunglassesItem, '-------QWERTY-------')

//   // sunglassesItem.scrollIntoView()
//   sunglassesItem.click()

//   const overviewComponent = screen.getByTestId('overview');
//   expect(overviewComponent.props.product.name).toEqual('Bright Future Sunglasses')

//   const ratingsComponent = screen.getByTestId('ratings')
//   expect(ratingsComponent.props.product.name).toEqual('Bright Future Sunglasses')

//   const relatedComponent = screen.getByTestId('related-outfit')
//   expect(relatedComponent.props.product.name).toEqual('Bright Future Sunglasses')

//   const qAndAComponent = screen.getByTestId('q-and-a')
//   expect(qAndAComponent.props.product.name).toEqual('Bright Future Sunglasses')
// })