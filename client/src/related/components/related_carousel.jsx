import React, {useRef, useState, useEffect} from 'react';
import ReactDOM from "react-dom";
import RelatedCard from "./related_cards.jsx"

const RelatedCarousel = ({product, updateProduct}) => {
  const [leftState, setLeftState] = useState(undefined);
  const [rightState, setRightState] = useState(true)
  const [rightScroll, setRightScroll] = useState()
  const [ref, setRef] = useState(null)

  const carouselRef = useRef(ref);

  const directionArrowsHandler = (event) =>{

    let direction = event.target.id
    //console.log(carouselRef, 'inside direction handler')
    const carouselNode = carouselRef.current;


    if(direction === 'prev') {
      carouselNode.scrollLeft -= (carouselNode.clientWidth)/3;
      console.log(carouselNode.scrollLeft, 'PREV BUTTON')

      if(!rightState) {
        setRightState(true)
      }
      if(carouselNode.scrollLeft === 0 ) {
        setLeftState(undefined)
      }


    } else if( direction === 'next') {

      let maxScroll = (carouselNode.scrollWidth - carouselNode.clientWidth);
      console.log(maxScroll)
      setLeftState(true)
      carouselNode.scrollLeft += (carouselNode.clientWidth)/3;
      console.log(carouselNode.scrollLeft, 'NEXT BUTTON')
      setRightScroll(carouselNode.scrollLeft)

      if(carouselNode.scrollLeft >= maxScroll) {
        setRightState(false)
      }


    }

  };

  useEffect(()=>{
    carouselRef.current.scrollTo({left:0});
    // carouselRef.current.scrollLeft(0)
    setLeftState(undefined)
    setRightState(true)
  }, [product])



  return (
    <div className = "flex">
      {leftState === undefined  ? null: <span className="relative left-.25 top-60">
      <button
      onClick={directionArrowsHandler}
      aria-label="slide back"
      className="btn btn-active btn-rounded"
      id="prev">
          <svg id="prev" width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path id="prev"  d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
      </button>

    </span>}

      <div >
          <h3 className='font-semibold'>Related Items</h3>


        <div
        id = 'riCarousel'
        ref={carouselRef}
        role = 'related item display'
        aria-label = "carousel"
        className="relative carousel carousel-end max-w-2xl space-x-4 "
        >

        <RelatedCard product = {product} updateProduct={updateProduct}/>

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

export default RelatedCarousel;