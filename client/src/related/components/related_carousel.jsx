import React, {useRef} from 'react';
import ReactDOM from "react-dom";
import RelatedCard from "./related_cards.jsx"

const RelatedCarousel = ({product, updateProduct}) => {

  const carouselRef = useRef(null);


  const directionArrowsHandler = (event) =>{

    let direction = event.target.id
    const carouselNode = carouselRef.current;

    if(direction === 'prev') {
      carouselNode.scrollLeft -= (carouselNode.clientWidth)/2;
    } else if( direction === 'next') {
      carouselNode.scrollLeft += (carouselNode.clientWidth)/2;
    }
  };


  return (
    <div>
        <h3 className='font-semibold'>Related Items</h3>


      <button
      onClick={directionArrowsHandler}
      aria-label="slide back"
      className="relative left-0 "
      id="prev">
          <svg id="prev" width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path id="prev"  d="M7 1L1 7L7 13" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
      </button>

      <div
      ref={carouselRef}
      className="carousel carousel-end max-w-2xl p-4 space-x-4 "
      >
      <RelatedCard product = {product} updateProduct={updateProduct}/>
      </div>

      <button
      onClick={directionArrowsHandler}
      aria-label="slide forward"
      className="relative right-0"
      id="next">
        <svg id="next" width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path id="next" d="M1 1L7 7L1 13" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>


    </div>

  )

};

export default RelatedCarousel;