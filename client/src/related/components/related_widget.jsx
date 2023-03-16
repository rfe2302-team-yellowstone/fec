import React, {useState, useEffect} from 'react';
import ReactDOM from "react-dom";
import axios from "axios";
import RelatedCarousel from "./related_carousel.jsx"
import OutfitCarousel from "./outfit_carousel.jsx"


const Related = () => {


  return (
  <div>
    <RelatedCarousel />
    <OutfitCarousel />
  </div>
  )

};

export default Related;