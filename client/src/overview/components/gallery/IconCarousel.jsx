import React, { useState } from 'react'
import { useRef, useEffect } from 'react';
import IconCarouselItem from './IconCarouselItem.jsx'
// import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import NavigationButtons from './NavigationButtons.jsx'


export default function IconCarousel ({currentStyle, currentIndex, setCurrentIndex, changeImage, idPrefix}) {

  const handleIconClick = (event) => {
    event.preventDefault();

    // Get the index of the clicked image
    const iconID = event.target.id;
    const nextIndex = +iconID[iconID.length-1]

    changeImage(nextIndex, idPrefix)
  }


  const handleCarouselNavigationOnClick = (event) => {
    event.preventDefault()

    if (event.target.id.indexOf('next-button') >= 0) {
      slideRight()
    } else {
      slideLeft()
    }
  }


  const step = 200;

  const slideLeft = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - step;
  };

  const slideRight = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + step;
  };

  const [isScrolling, setIsScrolling] = useState(false)


  return (

    (Object.keys(currentStyle).length > 0) &&
    <div  className='relative grid items-center justify-items-center hover:overflow-y-visible hover:scale-110 mt-4'>

        {/* <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100' onMouseOver={slideLeft}  size={40} /> */}
        {/* <div className={`${(idPrefix === 'fs-') ? 'z-50' : 'z-10'} absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2`}> */}

        { /* // onMouseEnter={() => setExpandStyle({display:'block'})}
          // onMouseLeave={() => setExpandStyle({display:'none'})} */}
        {/* {
          // Prev button
          <a href={`#`} id={`carousel-prev`} className="z-0 btn btn-circle bg-transparent border-transparent" onMouseOver={slideLeft}>❮</a>


        } */}
        <div
          id={`carousel-prev`}
          className="z-0 bg-transparent border-transparent h-24 s:h-16 w-[5%] text-transparent absolute cursor-pointer left-[5%] self-center hover:overflow-y-visible"
          onMouseOver={slideLeft}>
            ❯
        </div>



        <div
          id='slider'
          // ref={scrollRef}
          className='w-[85%] h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth rounded-box scrollbar-hide space-x-1 bg-transparent transition duration-500  hover:space-x-2 ' //
        >
{/*
    <div className="carousel carousel-center space-x-1 bg-transparent rounded-box mt-6 transition duration-500 hover:overflow-visible hover:object-cover hover:scale-105 hover:space-x-2 ml-12 mr-12 object-scale-down"> */}
      {
        currentStyle.photos.map((photo, i) => {
          return (
            <IconCarouselItem
              key={i}
              i={i}
              photos={currentStyle.photos}
              handleIconClick={handleIconClick}
              idPrefix={idPrefix}
              currentIndex={currentIndex}
              />
          )
        })
      }

      </div>
      {/* // Next button */}
      <div
        id={`carousel-next`}
        className="z-0 bg-transparent border-transparent h-24 s:h-16 w-[5%] text-transparent absolute cursor-pointer right-[5%] self-center"
        onMouseOver={slideRight}>
          ❯

      </div>

      {/* <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100' onPointerOver={slideRight} size={40} /> */}

    </div>


  )
}