import React from 'react'
export default function IconCarouselItem ({photos, i, handleIconClick, idPrefix, currentIndex}) {

  return (


      <a href={'#'}
        onClick={handleIconClick}
        id={`${idPrefix}slide-icon-a${i}`}

        className='inline-block pr-1 cursor-pointer hover:scale-110 ease-in-out duration-300 hover:overflow-y-visible'
        >
        <img
          src={photos[i].thumbnail_url}
          id={`${idPrefix}slide-icon-${i}`}
          aria-label={`${idPrefix}slide-icon-${i}`}
          className={`h-24 s:h-16 max-w-fit rounded-s hover:drop-shadow-[0_12px_12px_rgba(0,0,0,0.25)] ${(currentIndex === i) && 'pb-[2px] border-b-[4px] border-green-800'}`}
          />

      </a>

  )
}