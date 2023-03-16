import React from 'react';
import ReactDOM from "react-dom";
import OutfitCard from "./outfit_cards.jsx"


const OutfitCarousel = () => {
  return (
    <div>
      <h4>Your Outfit</h4>
      <div className="carousel content-center max-w-md p-4 space-x-4 rounded-box ">
        <OutfitCard />

      </div>
    </div>
  )

};

export default OutfitCarousel;

