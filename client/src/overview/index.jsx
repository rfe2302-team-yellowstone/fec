import React from 'react';
import { useState, useEffect } from "react";
import Header from './components/header/Header.jsx'
import Announcements from './components/announcements/Announcements.jsx'
import Gallery from './components/gallery/Gallery.jsx'
import ProductInfo from './components/productInfo/ProductInfo.jsx'
import ProductDetails from './components/productDetails/ProductDetails.jsx'
import axios from 'axios'

const LOCAL_SERVER = 'http://localhost:3000'

export default function Overview() {

  const [products, updateProducts] = useState([])

  useEffect(() => {

    // load all products
    axios.get(`${LOCAL_SERVER}/products/?count=2`)
      .then((data) => {
        console.log('data', data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])


  return (
    <div id="overview">
      <Header />
      <Announcements />
      <Gallery />
      <ProductInfo />
      <ProductDetails />
    </div>
  )

}