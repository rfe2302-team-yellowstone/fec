import React, {useState, useEffect} from 'react';
import ReactDOM from "react-dom";
import axios from "axios";
import RelatedCarousel from "./components/related_carousel.jsx"
import OutfitCarousel from "./components/outfit_carousel.jsx"


const Related = ({product}) => {


  return (
  <div className = 'flex flex-col items-center'>
    <RelatedCarousel product = {product}/>
    <OutfitCarousel product = {product}/>
  </div>
  )

};

export default Related;