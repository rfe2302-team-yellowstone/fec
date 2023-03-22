import React from 'react'
import IconCarouselItem from './IconCarouselItem.jsx'

export default function IconCarousel ({currentStyle}) {


  return (

    (Object.keys(currentStyle).length > 0) &&

    <div className="carousel carousel-center space-x-0.5 bg-neutral rounded-box border">
      {
        currentStyle.photos.map((photo, i) => {
          return (
            <IconCarouselItem key={i} i={i} photos={currentStyle.photos}/>
          )
        })
      }

      {/* <div className="carousel-item">
        <img src="/images/stock/photo-1559703248-dcaaec9fab78.jpg" className="rounded-box" />
      </div>
      <div className="carousel-item">
        <img src="/images/stock/photo-1565098772267-60af42b81ef2.jpg" className="rounded-box" />
      </div>
      <div className="carousel-item">
        <img src="/images/stock/photo-1572635148818-ef6fd45eb394.jpg" className="rounded-box" />
      </div>
      <div className="carousel-item">
        <img src="/images/stock/photo-1494253109108-2e30c049369b.jpg" className="rounded-box" />
      </div>
      <div className="carousel-item">
        <img src="/images/stock/photo-1550258987-190a2d41a8ba.jpg" className="rounded-box" />
      </div>
      <div className="carousel-item">
        <img src="/images/stock/photo-1559181567-c3190ca9959b.jpg" className="rounded-box" />
      </div>
      <div className="carousel-item">
        <img src="/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" className="rounded-box" />
      </div> */}
    </div>
    // <div className="carousel w-full" >
    //   {
    //     currentStyle.photos.map((photo, i) => {
    //       return (
    //         <CarouselItem key={i} i={i} photos={currentStyle.photos}/>
    //       )
    //     })
    //   }
    // </div>

  )
}