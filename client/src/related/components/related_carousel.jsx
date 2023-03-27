import React from 'react';
import ReactDOM from "react-dom";
import RelatedCard from "./related_cards.jsx"

const RelatedCarousel = ({product, updateProduct}) => {

  return (
    <div>
        <h3 className='font-semibold'>Related Items</h3>
        <div className="carousel carousel-center max-w-2xl p-4 space-x-4 ">

        <button aria-label="slide backward" className="relative flex justify-between left-5 right-5 top-1/2 " id="prev">
            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 1L1 7L7 13" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </button>

      <RelatedCard product = {product} updateProduct={updateProduct}/>

        <button  aria-label="slide forward" className="relative top-50%" id="next">
                <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L7 7L1 13" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
        </button>

      </div>


    </div>

  )

};

export default RelatedCarousel;