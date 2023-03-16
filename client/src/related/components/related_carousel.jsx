import React from 'react';
import ReactDOM from "react-dom";
import RelatedCard from "./related_cards.jsx"

const RelatedCarousel = () => {

  return (
    <div>
        <h4>Related Items</h4>
        <div className="carousel content-center max-w-md p-4 space-x-4 rounded-box ">
          <RelatedCard />
        </div>
    </div>

  )

};

export default RelatedCarousel;