import React from 'react';
import ReactDOM from "react-dom";
import RelatedCard from "./related_cards.jsx"

const RelatedCarousel = ({product}) => {

  return (
    <div>
        <h3 className='font-semibold'>Related Items</h3>
        <div className="carousel carousel-center max-w-lg p-3 space-x-4 rounded-box  ">
          <RelatedCard product = {product}/>
        </div>
    </div>

  )

};

export default RelatedCarousel;