// import React library for JSX usage
import React from 'react';
// import render, screen, and fireEvent from the testing library
import { render, screen, fireEvent } from '@testing-library/react';
// import jest-dom library for additional matchers
import '@testing-library/jest-dom';
// import the AddPerson component being tested
import Header from '../components/productInfo/Header.jsx';

import testObjects from './testObjects.js'

// create a mock function for addPerson prop
const addPerson = jest.fn();

// test files
const product = testObjects.product
const currentStyle = testObjects.style

// describe the test suite for AddPerson component
describe('Header', () => {


  test('should contain category, product name, and prices', () => {


    // render the Header component with props
    render(<Header product={product} currentStyle={currentStyle} />);

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