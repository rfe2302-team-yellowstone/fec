// import React library for JSX usage
import React from 'react';
// import render, screen, and fireEvent from the testing library
import { render, screen, fireEvent } from '@testing-library/react';
// import jest-dom library for additional matchers
import '@testing-library/jest-dom';
// import the AddPerson component being tested
import Header from '../components/productInfo/Header.jsx';
import StyleSelector from '../components/productInfo/StyleSelector.jsx';
import QuantitySelector from '../components/productInfo/QuantitySelector.jsx';
import OverallRatingPlaceholder from '../components/productInfo/OverallRatingPlaceholder.jsx';
import Actions from '../components/productInfo/Actions.jsx';

import testObjects from './testObjects.js'

// create a mock function for addPerson prop
const addPerson = jest.fn();

// test files
const product = testObjects.product
const styles = testObjects.styles
const currentStyle = styles[0]

// describe the test suite for Header component
describe('Header', () => {


  test('should contain category, product name, and prices', () => {


    // render the Header component with props
    render(<Header product={product} currentStyle={currentStyle} />);

    // Product Rating
    expect(screen.getByText('rating placeholder')).toBeInTheDocument();

    // Product Category
    expect(screen.getByText('overview category')).toBeInTheDocument();

    // Product Name
    expect(screen.getByText('overview product name')).toBeInTheDocument();

    // Sales Price
    expect(screen.getByText('$947.00')).toBeInTheDocument();

    // Original Price
    expect(screen.getByText('$850.00')).toBeInTheDocument();

    // assert that the "Submit" button is present in the document
    // expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument();
  });


  test('should contain all styles', () => {

    const setCurrentStyle = jest.fn();


    // render the Header component with props
    render(<StyleSelector styles={styles} currentStyle={currentStyle} setCurrentStyle={setCurrentStyle} />);

    // Category Name
    expect(screen.getByText('Cerulean')).toBeInTheDocument();

    // Product Name
    expect(screen.getByRole('overview product name')).toBeInTheDocument();



    // assert that the "Submit" button is present in the document
    // expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument();
  });



  /*
    Styles:
      - Should call changeImage when new style selected

    Quantity:
      - Should be set to '-' during initial render
      - Should default to 1 once size is selected
      - Should show integers from 1 to max sku quantity

    Actions
      - should show 'Add to cart' and 'favorite' buttons
      ** - should add item to cart when clicked


    Gallery:
      - should load all images in gallery
      - should show prev arrow grayed out for first image
      - should show next arrow grayed out for last image
      - Next arrow should change image to next in carousel
      - Next arrow should change image to next in main image viewer
      - Prev arrow should change image to previous in carousel
      - Prev arrow should change image to previous in main image viewer

    Carousel:
      - Should call changeImage when new style selected
      - should expand when hovered over

    Full Screen:
      - should launch image selected in main image viewer
      - should load all images in gallery
      - should show prev arrow grayed out for first image
      - should show next arrow grayed out for last image

    Product Description:
      - should show slogan
      - should show features
      - should show social media buttons


  */


  // test('should call addPerson function with name and age on form submit', async () => {

  //   // create a mock function for addPerson prop
  //   const addPerson = jest.fn();

  //   // render the AddPerson component with the mock addPerson prop
  //   render(<Header addPerson={addPerson} />);

  //   // get the "Name" input, "Age" input, and "Submit" button from the document
  //   const nameInput = screen.getByLabelText('Name:');
  //   const ageInput = screen.getByLabelText('Age:');
  //   const submitButton = screen.getByRole('button', { name: /submit/i });

  //   // define values for the name and age fields
  //   const nameValue = 'John';
  //   const ageValue = 25;

  //   // simulate user input and form submission
  //   fireEvent.change(nameInput, { target: { value: nameValue } });
  //   fireEvent.change(ageInput, { target: { value: ageValue } });
  //   fireEvent.click(submitButton);

  //   // assert that the addPerson mock function was called with the correct arguments
  //   expect(addPerson).toHaveBeenCalledWith({ name: nameValue, age: ageValue });

  //   // assert that the name field was reset
  //   expect(nameInput).toHaveValue('');

  //   // assert that the age field was reset
  //   expect(ageInput).toHaveValue('');
  // });
});