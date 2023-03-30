import React, {useState, useEffect} from 'react';
import ReactDOM from "react-dom";
import axios from "axios";
import RelatedCarousel from "./components/related_carousel.jsx"
import OutfitCarousel from "./components/outfit_carousel.jsx"


const Related = ({product, onMouseOver, updateProduct}) => {

  return (
    //"grid grid-col-1 grid-row-1 gap 4 place-items-center"
  <div data-testid="related" className ="grid grid-col-1 grid-row-1 gap 4 place-items-center">
    <RelatedCarousel  product = {product} updateProduct={updateProduct}/>
    <OutfitCarousel product = {product} />
  </div>
  )

};

export default Related;