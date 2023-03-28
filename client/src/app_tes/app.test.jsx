import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from "../app.jsx"
import Related from "../related/related_outfit.jsx"
import Overview from "../overview/index.jsx"
import Ratings from "../ratings/Ratings.jsx";
import QAndA from "../q&a/qa.jsx";
import RelatedCarousel from "../related/components/related_carousel.jsx"
import RelatedCards from "../related/components/related_cards.jsx"


describe('App', () => {
  const testProduct = {
    "id": 37314,
    "campus": "hr-rfe",
    "name": "Slacker's Slacks",
    "slogan": "Comfortable for everything, or nothing",
    "description": "I'll tell you how great they are after I nap for a bit.",
    "category": "Pants",
    "default_price": "65.00",
    "created_at": "2021-08-13T14:37:33.145Z",
    "updated_at": "2021-08-13T14:37:33.145Z",
    "features": [
        {
            "feature": "Fabric",
            "value": "99% Cotton 1% Elastic"
        },
        {
            "feature": "Cut",
            "value": "Loose"
        }
    ]
};


test('should render Related Carousel items', async () =>{
  const updateProduct = jest.fn();



  setTimeout(()=>{
    const relatedCardElement = screen.getByTestId("37311");

    //expect(relatedCardElement).toHaveLength(5);
    expect(relatedCardElement).toBeInTheDocument();
  }, 2000)

})
// describe('Render App Page', () => {
//   const setup = () => {
//     const user = userEvent.setup();
//     render(<App />);
//     return user;
//   };

//   it('Should change the sort order of the review list', async () => {
//     const user = setup();
//     await user.click(await screen
//       .findByRole('option', { name: 'Newest' }));
//     expect(screen.getByRole('menu', { name: 'Sort Method' }))
//       .toHaveTextContent('newest');
//   });
// });

// test ('should render Overview components', () => {
//   const handleSearch = jest.fn();
//   render(<Overview product={testProduct} handleSearch={handleSearch}/>);


//   const overviewElement = screen.getByTestId('overview');

//   expect(overviewElement).toBeInTheDocument();

// })

// test ('should render Q&A components', () => {
//   render(<QAndA product={testProduct} />);

//   const qaElement = screen.getByTestId('qa');

//   expect(qaElement).toBeInTheDocument();

// })
// test ('should render Ratings components', () => {

//   render(<Ratings product={testProduct}/>);

//   const ratingsElement = screen.getByTestId('ratings');

//   expect(ratingsElement).toBeInTheDocument();

// })


})
