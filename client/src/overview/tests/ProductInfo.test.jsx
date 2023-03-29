// import React library for JSX usage
import React from 'react';
// import render, screen, and fireEvent from the testing library
import { render, screen, fireEvent, createEvent } from '@testing-library/react';
// import jest-dom library for additional matchers
import '@testing-library/jest-dom';
// import the AddPerson component being tested
import Header from '../components/productInfo/Header.jsx';
import Gallery from '../components/gallery/Gallery.jsx';
import ProductInfo from '../components/productInfo/ProductInfo.jsx';
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


  test('should contain ratings', () => {
    // render the Header component with props
    render(<Header product={product} currentStyle={currentStyle} />);

    // Product Rating
    expect(screen.getByText('rating placeholder')).toBeInTheDocument();
  })


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
})

describe ('Product Info', () => {
  /*
    Styles:
      - Should reset image index to 0 when new style selected
      - Should reset quantity when style is changed
      - Should reset size  when style is changed

    Sizes:
      - Should show all sizes from current style


    Quantity:
      - Should be set to '-' during initial render
      - Should default to 1 once size is selected
      - Should show integers from 1 to max sku quantity
      - Should reset when style is changed
  */
  test('should contain all styles', () => {

    const setCurrentStyle = jest.fn();

    // render the Style Selector component with props
    render(<StyleSelector styles={styles} currentStyle={currentStyle} setCurrentStyle={setCurrentStyle} />);

    // Category Name
    expect(screen.getByText('Cerulean')).toBeInTheDocument();

    // First one should be selected
    expect(screen.getByRole('button', {
      name: 'Cerulean',
    })).toBeInTheDocument();

    // All other styles should be listed
    expect(screen.getByRole('button', {
      name: 'Pink',
    })).toBeInTheDocument();

  });




  test('should call handleStyleChange when new style is selected', () => {
    const currentIndex = 0
    const setFullScreenMode = jest.fn();
    const setCurrentStyle = jest.fn();
    const setCurrentIndex = jest.fn();
    const changeImage = jest.fn();
    const handleNavigationOnClick = jest.fn();
    const handleStyleChange = jest.fn();
     // render the Header component with props
     render(<Gallery
      currentStyle={styles[0]}
      fullScreenMode={false}
      setFullScreenMode={setFullScreenMode}
      currentIndex={currentIndex}
      setCurrentIndex={setCurrentIndex}
      changeImage={changeImage}
      handleNavigationOnClick={handleNavigationOnClick}
    />);

    // render the Style Selector component with props
    render(<StyleSelector
      styles={styles}
      currentStyle={currentStyle}
      setCurrentStyle={setCurrentStyle}
      handleStyleChange={handleStyleChange} />);






    // Simulate changing the style
    //fireEvent.change(currentStyle, styles[1]);
    const pinkStyleButton = screen.getByRole('button', {name: 'Pink',})
    fireEvent.click(pinkStyleButton)

    // Handle Style change
    expect(handleStyleChange).toHaveBeenCalled()

    // expect(currentIndex).toBe(1)

  })
})




describe ('Overview main functionality', () => {
  /*
    Styles:
      - Should reset image index to 0 when new style selected
      - Should reset quantity when style is changed
      - Should reset size  when style is changed

    Sizes:
      - Should show all sizes from current style


    Quantity:
      - Should be set to '-' during initial render
      - Should default to 1 once size is selected
      - Should show integers from 1 to max sku quantity
      - Should reset when style is changed
  */
  test('changing style should reset quantity, size, and index', () => {

    const currentIndex = 0
    const setFullScreenMode = jest.fn();
    const setCurrentStyle = jest.fn();
    const setCurrentIndex = jest.fn();
    const changeImage = jest.fn();
    const handleNavigationOnClick = jest.fn();
    const handleStyleChange = jest.fn();
    const ceruleanSizes = {
      'XS': 40,
      'S': 30,
      'M': 47,
      'L': 17,
      'XL': 16,
      'XXL': 26
    }



     // render the Header component with props
     render(<Gallery
      currentStyle={styles[0]}
      fullScreenMode={false}
      setFullScreenMode={setFullScreenMode}
      currentIndex={currentIndex}
      setCurrentIndex={setCurrentIndex}
      changeImage={changeImage}
      handleNavigationOnClick={handleNavigationOnClick}
    />);

    // render the Style Selector component with props
    render(<ProductInfo
      product={product}
      styles={styles}
      currentStyle={currentStyle}
      sizes={ceruleanSizes}
      setCurrentStyle={setCurrentStyle}
      handleStyleChange={handleStyleChange}
    />)



    // Default Quantity
    expect(screen.getByText('-')).toBeInTheDocument();

    // Default Size
    expect(screen.getByText('Select Size')).toBeInTheDocument();

  })

  /*


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

  }
);