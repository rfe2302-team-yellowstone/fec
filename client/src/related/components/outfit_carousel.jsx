import React, {useRef, useEffect, useState} from 'react';
import ReactDOM from "react-dom";
import OutfitCard from "./outfit_cards.jsx"


const OutfitCarousel = ({product}) => {
  const [leftState, setLeftState] = useState(false);
  const [rightState, setRightState] = useState(false)
  const carouselRef = useRef(null);

  const directionArrowsHandler = (event) =>{

    let direction = event.target.id
    //console.log(carouselRef, 'inside direction handler')
    const carouselNode = carouselRef.current;


    if(direction === 'prev') {
      carouselNode.scrollLeft -= (carouselNode.clientWidth)/3;
      // console.log(carouselNode.scrollLeft, 'PREV BUTTON')

      // if(!rightState) {
      //   setRightState(true)
      // }
      // if(carouselNode.scrollLeft === 0 ) {
      //   setLeftState(undefined)
      // }


    } else if( direction === 'next') {

      // let maxScroll = (carouselNode.scrollWidth - carouselNode.clientWidth);
      // console.log(maxScroll)
      setLeftState(true)
      carouselNode.scrollLeft += (carouselNode.clientWidth)/3;


      // if(carouselNode.scrollLeft >= maxScroll) {
      //   setRightState(false)
      // }


    }

  };

  return (
    <div className = "flex">
      {leftState  ? <span className="relative left-.25 top-60">
      <button
      onClick={directionArrowsHandler}
      aria-label="slide back"
      className="btn btn-active btn-rounded"
      id="prev">
          <svg id="prev" width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path id="prev"  d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
      </button>

    </span> : null}
    <div>
      <h3 className='font-semibold'>Your Outfit</h3>
      <div
      ref={carouselRef}
      role = 'related item display'
       className="carousel carousel-end max-w-2xl space-x-4">
        <OutfitCard product={product} setRightState = {setRightState} setLeftState = {setLeftState}/>

      </div>
      </div>
      {rightState ? <span className="relative right-.15 top-60 ">
          <button
        onClick={directionArrowsHandler}
        aria-label="slide forward"
        className="btn btn-active"
        id="next">
            <svg id="next" width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path id="next" d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </button>
      </span> : null}
    </div>
  )

};

export default OutfitCarousel;

