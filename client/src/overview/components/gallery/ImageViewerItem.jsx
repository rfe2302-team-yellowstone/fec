import React from 'react'
export default function ImageViewerItem ({photos, i}) {

  return (
    <div id={`slide${i}`} className="carousel-item relative w-full grid justify-items-center items-center">
      <img src={photos[i].url} className="w-4/6" />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 ">
        {
          // Prev button
          (i === 0) && <a href={`#slide${i}`} className="btn btn-circle bg-white border-white">❮</a> ||
          (i !== 0) && <a href={`#slide${i-1}`} className="btn btn-circle">❮</a>
        }
        {
          // Next button
          (i !== (photos.length -1)) && <a href={`#slide${i+1}`} className="btn btn-circle">❯</a>
        }
      </div>
    </div>
  )
}