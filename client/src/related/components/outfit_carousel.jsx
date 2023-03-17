import React from 'react';
import ReactDOM from "react-dom";
import OutfitCard from "./outfit_cards.jsx"


const OutfitCarousel = () => {
  return (
    <div>
      <h3>Your Outfit</h3>
      <div className="carousel carousel-center max-w-lg p-3 space-x-4 rounded-box ">
        <OutfitCard />

      </div>
    </div>
  )

};

export default OutfitCarousel;

