import React from 'react'
import { useState, useEffect } from "react";
import axios from 'axios'
import Announcements from './components/announcements/Announcements.jsx'
import Gallery from './components/gallery/Gallery.jsx'
import ProductInfo from './components/productInfo/ProductInfo.jsx'
import ProductDetails from './components/productDetails/ProductDetails.jsx'
import FullScreenModal from './components/gallery/FullScreenModal.jsx';
import SectionHeader from './components/header/SectionHeader.jsx';


const LOCAL_SERVER = 'http://localhost:3000'

export default function Overview({product, handleSearch, onMouseOver, headerHeight}) {

   //product: 37325 - has sales prices

  const [styles, setStyles] = useState([])
  const [currentStyle, setCurrentStyle] = useState({})
  const [sizes, setSizes] = useState({})
  const [fullScreenMode, setFullScreenMode] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0) // index position of image currently showing
  const [rating, setRating] = useState(0)





  // Get initial Styles (and size) information
  useEffect(() => {
    axios.get(`/products/${product.id}/styles`)
      .then(res => {
        // console.log('Styles: ', res.data.results)
        setStyles(res.data.results)
        setCurrentStyle(res.data.results[0])
        getSizesFromStyle(res.data.results[0])
      })
      .catch(error => {
        console.log(error)
      })
  }, [product])



  // Retrieve ratings and calculate overall rating
  useEffect(() => {
    axios.get(`/reviews/meta?product_id=${product.id}`)
      .then(response => {
        let allRatings = response.data.ratings
        let rating = calculateRating(allRatings)
        setRating(rating)
        // setReviews(allRatings)


      })
      .catch(error => {
        console.log(error)
      })
  }, [])


  const calculateRating = (ratings) => {
    let total = 0
    let numberOfRatings = 0

    Object.keys(ratings).forEach((rating) => {
      total +=  (+rating * ratings[rating]) // number of stars * number of ratings
      numberOfRatings += +ratings[rating]
    })

    let totalRating = total / numberOfRatings

    totalRating = totalRating.toFixed(2)

    return totalRating
  }



  // Update images, reset quantity and sizes, when a new style is selected
  const handleStyleChange = (event) => {
    event.preventDefault()

    // Get the index of the style that was selected
    let styleIndex = +event.target.getAttribute('data-index')

    // Reset style and sizes (which resets quantity as well through a useEffect hook)
    setCurrentStyle(styles[styleIndex])
    getSizesFromStyle(styles[styleIndex])

    // Reset carousels to first image
    setCurrentIndex(0)
    changeImage(0, 'n-')

  }



  // Function to map style skus into sizes and quantities
  // Creates an array of tuples (size and quantity). Only stores if available.
  const getSizesFromStyle = (style) => {

    let sizes = {}
    let skus = style.skus;


    Object.keys(skus).forEach((sku) => {
      if (+skus[sku]['quantity'] > 0) {
        // console.log(skus[sku]['size'])
        // console.log(skus[sku]['quantity'])
        // // console.log('sizes:', sizes[skus[sku]['size']])
        // console.log('quantity:', skus[sku]['quantity'])
        let quantity = sizes[skus[sku]['size']] + skus[sku]['quantity'] ||  skus[sku]['quantity']

        sizes[skus[sku]['size']] = quantity
      }
    })

    setSizes(sizes)
  }

  // Given an index position, calculate where to scroll to in the carousel
  const changeImage = (index, prefix) => {

    prefix = prefix || ''
    // console.log('\n\n ----------')
    // console.log('prefix: ', prefix)
    // console.log('current index: ', currentIndex)
    // console.log('next index: ', index)


    // Set the image ID of the index that was given
    const imageID = `${prefix}slide-img-${index}`
    // console.log('imageID: ', imageID)

    // Just return if it's the same image and we're not in fullscreen mode
    if ((index === currentIndex) && (prefix !== 'fs-')) {
      return;
    }

    // Get elements from DOM
    const imageElement = document.getElementById(imageID);

    const containerElement = document.getElementById(`${prefix}image-viewer-carousel`);

    // Get the position of the clicked image relative to the viewport
    const containerRect = containerElement.getBoundingClientRect();
    const imageRect = imageElement.getBoundingClientRect();

    // Width of each image div (each card is the same size)
    let width = imageRect.width

    // Calculate distance you need to scroll from left side of screen
    //  - Current container's x position + (width of image div  *  nextIndex)
    let scrollLeft = containerRect.x + width * index

    // Scroll the div to the clicked image position
    // - scrollLeft is the x-axis of the carousel
    containerElement.scrollLeft = scrollLeft;

    // Finally set the new index
    setCurrentIndex(index)

  }

  const handleNavigationOnClick = (event) => {
    event.preventDefault()

    let idPrefix = fullScreenMode ? 'fs-' : 'n-'

    if (event.target.id.indexOf('next-button') >= 0) {
      changeImage(currentIndex + 1, idPrefix)
    } else {
      changeImage(currentIndex - 1, idPrefix)
    }
  }




  return (
    <div onMouseOver={onMouseOver}>
      <SectionHeader caption='Overview' idName={'overview'} headerHeight={headerHeight + 28} />
      <Announcements />
      <FullScreenModal
        currentStyle={currentStyle}
        fullScreenMode={fullScreenMode}
        setFullScreenMode={setFullScreenMode}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        handleNavigationOnClick={handleNavigationOnClick}
        // currentIndex={currentIndex}
        // setCurrentIndex={setCurrentIndex}
        changeImage={changeImage}
        idPrefix={'fs-'}
      />

      <div className="flex ">
        <Gallery
          currentStyle={currentStyle}
          fullScreenMode={fullScreenMode}
          setFullScreenMode={setFullScreenMode}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          changeImage={changeImage}
          handleNavigationOnClick={handleNavigationOnClick}
        />

        <ProductInfo
          rating={rating}
          product={product}
          styles={styles}
          currentStyle={currentStyle}
          sizes={sizes}
          setCurrentStyle={setCurrentStyle}
          handleStyleChange={handleStyleChange}
        />
      </div>
      <ProductDetails product={product} />
    </div>
  )

}