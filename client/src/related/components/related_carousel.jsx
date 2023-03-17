import React from 'react';
import ReactDOM from "react-dom";
import RelatedCard from "./related_cards.jsx"

const RelatedCarousel = () => {

  return (
    <div>
        <h3>Related Items</h3>
        <div className="carousel carousel-center max-w-screen-smj p-3 space-x-3 rounded-box ">
          <RelatedCard />
        </div>
    </div>

  )

};

export default RelatedCarousel;