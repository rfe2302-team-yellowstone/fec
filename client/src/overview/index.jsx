import React from 'react'
import { useState, useEffect } from "react";
import axios from 'axios'
import Header from './components/header/Header.jsx'
import Announcements from './components/announcements/Announcements.jsx'
import Gallery from './components/gallery/Gallery.jsx'
import ProductInfo from './components/productInfo/ProductInfo.jsx'
import ProductDetails from './components/productDetails/ProductDetails.jsx'

const LOCAL_SERVER = 'http://localhost:3000'

export default function Overview({product}) {

   //product: 37325 - has sales prices

  const [styles, setStyles] = useState([])
  const [currentStyle, setCurrentStyle] = useState({})

  // Get initial Styles (and size) information
  useEffect(() => {
    axios.get(`http://localhost:3000/products/${product.id}/styles`)
      .then(res => {
        // console.log('Styles: ', res.data.results)
        setStyles(res.data.results)
        setCurrentStyle(res.data.results[0])
      })
      .catch(error => {
        console.log(error)
      })
  }, [])



  const quickLinks = [
    'Overview',
    'Related Items',
    'Ratings',
    'Q&A'
  ]

  return (
    <div id="overview">
      <Header quickLinks={quickLinks}/>
      <Announcements />
      <div className="flex">
        <Gallery />
        <ProductInfo product={product} styles={styles} currentStyle={currentStyle}/>
      </div>
      <ProductDetails />
    </div>
  )

}