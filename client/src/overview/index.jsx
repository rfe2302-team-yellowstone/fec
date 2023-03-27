import React from 'react'
import { useState, useEffect } from "react";
import axios from 'axios'
import Header from './components/header/Header.jsx'
import Announcements from './components/announcements/Announcements.jsx'
import Gallery from './components/gallery/Gallery.jsx'
import ProductInfo from './components/productInfo/ProductInfo.jsx'
import ProductDetails from './components/productDetails/ProductDetails.jsx'
//import FullScreenModal from './components/gallery/FullScreenModal.jsx';
import FullScreenModalTwo from './components/gallery/FullScreenModalTwo.jsx';

const LOCAL_SERVER = 'http://localhost:3000'

export default function Overview({product, handleSearch, onMouseOver}) {

   //product: 37325 - has sales prices

  const [styles, setStyles] = useState([])
  const [currentStyle, setCurrentStyle] = useState({})
  const [sizes, setSizes] = useState({})
  const [fullScreenMode, setFullScreenMode] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0) // index position of image currently showing





  // Get initial Styles (and size) information
  useEffect(() => {
    axios.get(`http://localhost:3000/products/${product.id}/styles`)
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



  // Function to map style skus into sizes and quantities
  // Creates an array of tuples (size and quantity). Only stores if available.
  const getSizesFromStyle = (style) => {


    let sizes = {}
    let skus = style.skus;

    // try {
    //   skus = style.skus;
    // }
    // catch {
    //   console.log('no styles available')
    //   return;
    // }


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
    console.log('\n\n ----------')
    console.log('prefix: ', prefix)
    console.log('current index: ', currentIndex)
    console.log('next index: ', index)


    // Set the image ID of the index that was given
    const imageID = `${prefix}slide-img-${index}`

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



  const quickLinks = [
    'Overview',
    'Related Items',
    'Ratings',
    'Q&A'
  ]

  return (
    <div id="overview" onMouseOver={onMouseOver}>
      <Header quickLinks={quickLinks} handleSearch={handleSearch}/>
      <Announcements />
      <FullScreenModalTwo
        currentStyle={currentStyle}
        fullScreenMode={fullScreenMode}
        setFullScreenMode={setFullScreenMode}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
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
        />

        <ProductInfo
          product={product}
          styles={styles}
          currentStyle={currentStyle}
          sizes={sizes}
          setCurrentStyle={setCurrentStyle}
        />
      </div>
      <ProductDetails product={product} />
    </div>
  )

}