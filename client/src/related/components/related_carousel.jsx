import React, {useRef} from 'react';
import ReactDOM from "react-dom";
import RelatedCard from "./related_cards.jsx"

const RelatedCarousel = ({product, updateProduct}) => {

  const carouselRef = useRef(null);
  //console.log(carouselRef)

  const directionArrowsHandler = (event) =>{

    let direction = event.target.id
    console.log(carouselRef, 'inside direction handler')
    const carouselNode = carouselRef.current;


    if(direction === 'prev') {

      carouselNode.scrollLeft -= (carouselNode.clientWidth)/3;
      console.log(carouselNode.scrollLeft)
    } else if( direction === 'next') {

      carouselNode.scrollLeft += (carouselNode.clientWidth)/3;
      console.log(carouselNode.scrollLeft)
    }
    console.log(carouselNode.scrollLeft)
  };
  // const myDiv = document.getElementById("riCarousel");
  // console.log(myDiv)
  // let riCarousel = myDiv.scrollLeft;


  return (
    <div className = "flex">
      <span className="relative left-.25 top-60">
      <button
      onClick={directionArrowsHandler}
      aria-label="slide back"
      className="btn btn-active"
      id="prev">
          <svg id="prev" width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path id="prev"  d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
      </button>

    </span>

      <div >
          <h3 className='font-semibold'>Related Items</h3>

        {/* <span className=" w-5 relative left--3 top-60 gap-4">
          <button
          onClick={directionArrowsHandler}
          aria-label="slide back"
          className="relative left-0 "
          id="prev">
              <svg id="prev" width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path id="prev"  d="M7 1L1 7L7 13" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
          </button>

        </span> */}

        <div
        id = 'riCarousel'
        ref={carouselRef}
        role = 'related item display'
        aria-label = "carousel"
        className="relative carousel carousel-end max-w-2xl p-4 space-x-4 "
        >

        <RelatedCard product = {product} updateProduct={updateProduct}/>

        </div>
  {/*
        <span className="w-5 relative right-5  ">
          <button
          onClick={directionArrowsHandler}
          aria-label="slide forward"
          className="relative right-0"
          id="next">
              <svg id="next" width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id="next" d="M1 1L7 7L1 13" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
          </button>
        </span> */}


      </div>
        <span className="relative right-.15 top-60 ">
          <button
        onClick={directionArrowsHandler}
        aria-label="slide forward"
        className="btn btn-active"
        id="next">
            <svg id="next" width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path id="next" d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </button>
      </span>
    </div>
  )

};

export default RelatedCarousel;