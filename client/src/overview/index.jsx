import { useState } from "react";
import Header from './components/header/Header.jsx'
import Announcements from './components/announcements/Announcements.jsx'
import Gallery from './components/gallery/Gallery.jsx'
import ProductInfo from './components/productInfo/ProductInfo.jsx'
import ProductDetails from './components/productDetails/ProductDetails.jsx'

export default function Overview() {

  return (
    <Header />
    <Announcements />
    <Gallery />
    <ProductInfo />
    <ProductDetails />
  )

}