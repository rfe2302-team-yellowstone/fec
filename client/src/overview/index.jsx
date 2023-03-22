import React from 'react'
import { useState, useEffect } from "react";
import axios from 'axios'
import Header from './components/header/Header.jsx'
import Announcements from './components/announcements/Announcements.jsx'
import Gallery from './components/gallery/Gallery.jsx'
import ProductInfo from './components/productInfo/ProductInfo.jsx'
import ProductDetails from './components/productDetails/ProductDetails.jsx'

const LOCAL_SERVER = 'http://localhost:3000'

export default function Overview({product, handleSearch}) {

   //product: 37325 - has sales prices

  const [styles, setStyles] = useState([])
  const [currentStyle, setCurrentStyle] = useState({})
  const [sizes, setSizes] = useState({})

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


  const quickLinks = [
    'Overview',
    'Related Items',
    'Ratings',
    'Q&A'
  ]

  return (
    <div id="overview">
      <Header quickLinks={quickLinks} handleSearch={handleSearch}/>
      <Announcements />
      <div className="flex ">
        <Gallery currentStyle={currentStyle}/>
        <ProductInfo product={product} styles={styles} currentStyle={currentStyle} sizes={sizes} setCurrentStyle={setCurrentStyle}/>
      </div>
      <ProductDetails product={product} />
    </div>
  )

}