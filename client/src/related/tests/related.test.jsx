import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Related from "../related_outfit.jsx";
import RelatedCarousel from "../components/related_carousel.jsx";
import RelatedCards from "../components/related_cards.jsx";
import OutfitCarousel from "../components/outfit_carousel.jsx";


describe('Related', ()=>{

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
  const relatedItemsID = [37311, 37312, 37314, 37315, 37318];

test('should render at least one card', ()=>{
  const updateProduct = jest.fn();
  render(<RelatedCards product={testProduct} updateProduct={updateProduct}/>)

  setTimeout(()=>{
    const relatedCardElement1 = screen.getByTestId("37311")
    expect(relatedCardElement1).toBeInTheDocument()
  }, 2000)
})


test('should render all related carousel items', () =>{
  const updateProduct = jest.fn();
  render(<RelatedCarousel product={testProduct} updateProduct = {updateProduct}/>)
  setTimeout(()=>{
    const relatedCardElement1 = screen.getByTestId("37311");
    const relatedCardElement2 = screen.getByTestId("37312");
    const relatedCardElement3 = screen.getByTestId("37314");
    const relatedCardElement4 = screen.getByTestId("37315");
    const relatedCardElement5 = screen.getByTestId("37318");

    expect(relatedCardElement1).toBeInTheDocument();
    expect(relatedCardElement2).toBeInTheDocument();
    expect(relatedCardElement3).toBeInTheDocument();
    expect(relatedCardElement4).toBeInTheDocument();
    expect(relatedCardElement5).toBeInTheDocument();
  }, 2000)

})

test('should add current item to outfit when clicking Add button',  ()=> {
  render(<OutfitCarousel product={testProduct} />)
  const outfitButton = screen.getByRole('button', {name: '+'});
  fireEvent.click(outfitButton);

  setTimeout(() => {
    const outfitCard = screen.getByTestId(`${testProduct.id}-YO`);
    expect(outfitCard).toBeInTheDocument();
  }, 2000)

})

test('should open modal with clicking star button', ()=>{
  const updateProduct = jest.fn();
  render(<RelatedCards product={testProduct} updateProduct = {updateProduct}/>)

  setTimeout(()=>{
    const setOpenModal = jest.fn();
    const modalButton = screen.getByTestId(`37311-CMB`);
    fireEvent.click(modalButton);

    expect(setOpenModal).toBeCalled();

  }, 2000)

})

test('should perform appropriate action when previous and next buttons are pressed', () => {
  const updateProduct = jest.fn();
  render(<Related product = {testProduct} updateProduct={updateProduct} />)

  setTimeout(()=>{
    const directionArrowsHandler = jest.fn();
    const relatedCarousel = screen.getByRole('related item display', {name: 'carousel'})
    const nextButton = screen.getByRole('button', {name: 'slide forward'});

    fireEvent.click(nextButton)
    console.log(relatedCarousel.scrollLeft)
    expect(relatedCarousel.scrollLeft).not.toHaveValue(0)



  })

})

})