import React from 'react';
import ReactDOM from "react-dom";
import OutfitCard from "./outfit_cards.jsx"


const OutfitCarousel = ({product, reviews}) => {

  return (
    <div>
      <h3 className='font-semibold'>Your Outfit</h3>
      <div className="carousel carousel-center max-w-lg p-3 space-x-4 rounded-box ">
        <OutfitCard product={product} reviews = {reviews}/>

      </div>
    </div>
  )

};

export default OutfitCarousel;

