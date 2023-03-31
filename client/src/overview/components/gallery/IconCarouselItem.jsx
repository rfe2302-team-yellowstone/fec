import React from 'react'
export default function IconCarouselItem ({photos, i, handleIconClick, idPrefix, currentIndex}) {

  return (


      <a href={'#'/*`#slide${i}`*/}
        onClick={handleIconClick}
        id={`${idPrefix}slide-icon-a${i}`}
        // className={`carousel-item h-max-s transition duration-500 hover:scale-125`}
        className='inline-block pr-1 cursor-pointer hover:scale-110 ease-in-out duration-300 hover:overflow-y-visible'
        >
        <img
          src={photos[i].thumbnail_url}
          id={`${idPrefix}slide-icon-${i}`}
          className={`h-24 s:h-16 rounded-s hover:drop-shadow-[0_12px_12px_rgba(0,0,0,0.25)] ${(currentIndex === i) && 'border-b-[6px] border-tahiti-100'}`}
          />

      </a>

      // hover:drop-shadow-[0_30px_30px_-2px_rgba(35,35,35)]

    // <div id={`slide${i}`} className="carousel-item relative w-full grid justify-items-center items-center">
    //   <img src={photos[i].url} className="w-4/6" />
    //   <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    //     {
    //       // Prev button
    //       (i === 0) && <a href={`#slide${i}`} className="btn btn-circle bg-white border-white">❮</a> ||
    //       (i !== 0) && <a href={`#slide${i-1}`} className="btn btn-circle">❮</a>
    //     }
    //     {
    //       // Next button
    //       (i !== (photos.length -1)) && <a href={`#slide${i+1}`} className="btn btn-circle">❯</a>
    //     }
    //   </div>
    // </div>
  )
}