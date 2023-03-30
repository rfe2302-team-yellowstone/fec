import React from 'react';
import ReactDOM from "react-dom";
import OutfitCard from "./outfit_cards.jsx"


const OutfitCarousel = ({product}) => {

  return (
    <div>
      <h3 className='font-semibold'>Your Outfit</h3>
      <div className="carousel carousel-end max-w-2xl p-4 space-x-4">
        <OutfitCard product={product}/>

      </div>
    </div>
  )

};

export default OutfitCarousel;

