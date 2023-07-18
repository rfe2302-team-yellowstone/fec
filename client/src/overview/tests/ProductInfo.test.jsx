// import React library for JSX usage
import React from 'react';
// import render, screen, and fireEvent from the testing library
import { render, screen, fireEvent, createEvent, getByTestId, within } from '@testing-library/react';
// import jest-dom library for additional matchers
import '@testing-library/jest-dom';
// import the AddPerson component being tested
import Header from '../components/productInfo/Header.jsx';
import Gallery from '../components/gallery/Gallery.jsx';
import ProductInfo from '../components/productInfo/ProductInfo.jsx';
import StyleSelector from '../components/productInfo/StyleSelector.jsx';
import SizeSelector from '../components/productInfo/SizeSelector.jsx';
import QuantitySelector from '../components/productInfo/QuantitySelector.jsx';
import Rating from '../components/productInfo/Rating.jsx';
import Actions from '../components/productInfo/Actions.jsx';

import testObjects from './testObjects.js'

// create a mock function for addPerson prop
const addPerson = jest.fn();


// Test Variables
const product = testObjects.product
const styles = testObjects.styles
const currentStyle = styles[0]
const sizes = {
  'XS': 40,
  'S': 30,
  'M': 47,
  'L': 17,
  'XL': 16,
  'XXL': 26
}
const currentSize = 'Select Size'
const currentQuantity = '-'
const quantityMax = 5
const currentIndex = 0

// Test functions
const setFullScreenMode = jest.fn();
const setCurrentStyle = jest.fn();
const setCurrentIndex = jest.fn();
const changeImage = jest.fn();
const handleNavigationOnClick = jest.fn();
const handleStyleChange = jest.fn();
const handleSizeChange = jest.fn();
const handleQuantityChange = jest.fn();
const setCurrentSize = jest.fn();

// ---- Renders ----
const renderHeader = render.bind(null, <Header
  product={product}
  currentStyle={currentStyle} />);

const renderStyleSelector = render.bind(null, <StyleSelector
  styles={styles}
  currentStyle={currentStyle}
  setCurrentStyle={setCurrentStyle}
  handleStyleChange={handleStyleChange} />);


const renderGallery = render.bind(null, <Gallery
  currentStyle={styles[0]}
  fullScreenMode={false}
  setFullScreenMode={setFullScreenMode}
  currentIndex={currentIndex}
  setCurrentIndex={setCurrentIndex}
  changeImage={changeImage}
  handleNavigationOnClick={handleNavigationOnClick}
/>);


const renderSizeSelector = render.bind(null, <SizeSelector
  sizes={sizes}
  currentSize={currentSize}
  setCurrentSize={setCurrentSize}
  handleSizeChange={handleSizeChange}
/>)


const renderQuantitySelector = render.bind(null, <QuantitySelector
  sizes={sizes}
  currentQuantity={currentQuantity}
  currentSize={currentSize}
  handleQuantityChange={handleQuantityChange}
  quantityMax={quantityMax}
/>)

const renderProductInfo = render.bind(null, <ProductInfo
  product={product}
  styles={styles}
  currentStyle={currentStyle}
  sizes={sizes}
  setCurrentStyle={setCurrentStyle}
  handleStyleChange={handleStyleChange}
/>)


const renderActions = render.bind(null, <Actions />)

// describe the test suite for Header component
describe('Header', () => {


  xtest('should contain ratings', () => {
    // render the Header component with props
    renderHeader()

    // Product Rating
    expect(screen.getByText('rating placeholder')).toBeInTheDocument();
  })


  test('should contain category, product name, and prices', () => {

    // render the Header component with props
    renderHeader()


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
    renderStyleSelector()

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

    // render the Style Selector component with props
    renderStyleSelector()

    // Simulate changing the style
    //fireEvent.change(currentStyle, styles[1]);
    const pinkStyleButton = screen.getByRole('button', {name: 'Pink',})
    fireEvent.click(pinkStyleButton)

    // Handle Style change
    expect(handleStyleChange).toHaveBeenCalled()

    // expect(currentIndex).toBe(1)

  })
})




describe ('Size', () => {
  /*
    Styles:
      X - Should reset image index to 0 when new style selected
      X - Should reset quantity when style is changed
      X - Should reset size  when style is changed

    Sizes:
      - Should show all sizes from current style
      - Should show numbers in correct order if numeric
      X - Should update size displayed on button


    Quantity:
      - Should be set to '-' during initial render
      - Should default to 1 once size is selected
      - Should show integers from 1 to max sku quantity
      - Should reset when style is changed
  */
  xtest('ProductInfo Integration: selecting size should call handleSizeChange', () => {

    renderProductInfo()
    renderSizeSelector()

    // Get and click size selector button
    const xs = screen.getByText('XS')
    fireEvent.click(xs)

    // Handle Style change
    expect(handleSizeChange).toHaveBeenCalled()
  })

  test('size should default in', () => {

    renderProductInfo()

    // Default Size
    expect(screen.getByText('Select Size')).toBeInTheDocument();

  })


  test('selecting size should call handleSizeChange', () => {

    renderSizeSelector()

    // Get and click size selector button
    const xs = screen.getByText('XS')
    fireEvent.click(xs)

    // Handle Style change
    expect(handleSizeChange).toHaveBeenCalled()
  })



  test('sizes should show from low to high if alphabetic', () => {

    renderSizeSelector()

    // Get size list component
    const list = screen.getByRole("list", {
      name: /size/i,
    })
    // Get all items within list
    const { getAllByRole } = within(list)
    const items = getAllByRole("listitem")

    expect(items.length).toBe(6)

    expect(items[items.length -1].textContent).toBe('XXL')


  })


  test('sizes should show from low to high if numeric', () => {
    const sizes = {
      '7.5': 12,
      '8': 14,
      '9': 1,
      '12': 13,
      '10.5': 1,
      '10': 12,
      '11': 2
    }

    render (<SizeSelector
      sizes={sizes}
      currentSize={currentSize}
      setCurrentSize={setCurrentSize}
      handleSizeChange={handleSizeChange}
    />)



    const list = screen.getByRole("list", {
      name: /size/i,
    })
    const { getAllByRole } = within(list)
    const items = getAllByRole("listitem")

    expect(items.length).toBe(7)

    expect(items[items.length -1].textContent).toBe('12')


  })








  // test('selecting size should change value to size', () => {

  //   renderSizeSelector()
  //   renderQuantitySelector()

  //   // Get and click size selector button
  //   const xs = screen.getByText('XS')
  //   fireEvent.click(xs)

  //   // Get quantity button
  //   // const quantity = screen.getByTestId('quantity-selector')
  //   const test1 = screen.getByDisplayValue('XS')
  //   expect(test1).toEqual('1')


  // })

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



describe ('Quantity', () => {
  /*
  Quantity:
      - Should be set to '-' during initial render
      - Should default to 1 once size is selected
      - Should show integers from 1 to max sku quantity
      - Should reset when style is changed
  */
  test('quantity should default in', () => {

    renderProductInfo()

    // Default Size
    expect(screen.getByText('-')).toBeInTheDocument();

  })


  test('selecting quantity should call handleQuantityChange', () => {

    renderQuantitySelector()

    // Get and click size selector button
    const one = screen.getByText('1')
    fireEvent.click(one)

    // Handle Style change
    expect(handleQuantityChange).toHaveBeenCalled()
  })

  xtest('selecting quantity gives dropdown options', () => {

    renderQuantitySelector()

    const dropdown = screen.getByTestId('quantity-selector')
    fireEvent.click(dropdown)


    expect(dropdown.textContent).toBe('-12345')
  })



  xtest('all quantities should show from 1 to max', () => {

    renderQuantitySelector()

    // Get size list component
    const list = screen.getByRole("list", {
      name: /quantity/i,
    })
    // Get all items within list
    const { getAllByRole } = within(list)
    const items = getAllByRole("listitem")

    expect(items.length).toBe(5)

    expect(items[items.length -1].textContent).toBe('5')


  })



  }
);


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