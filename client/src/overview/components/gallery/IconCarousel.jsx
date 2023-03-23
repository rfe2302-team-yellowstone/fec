import React from 'react'
import IconCarouselItem from './IconCarouselItem.jsx'

export default function IconCarousel ({currentStyle, currentIndex, setCurrentIndex}) {

  const handleIconClick = (event) => {

    event.preventDefault();

    // Get the index of the clicked image
    const iconID = event.target.id;
    const nextImageID = iconID.replace('icon', 'img') // find related full size image
    const nextIndex = +iconID[iconID.length-1]

    // Just return if same image
    if(nextIndex === currentIndex) {
      return;
    }


    // Get elements from DOM
    const nextImageElement = document.getElementById(nextImageID);
    const containerElement = document.getElementById("image-viewer-carousel");

    // Get the position of the clicked image relative to the viewport
    const containerRect = containerElement.getBoundingClientRect();
    const nextImageRect = nextImageElement.getBoundingClientRect();

    // Width of each image div
    let width = nextImageRect.width


    // Calculate distance you need to scroll from left
    //  - Current container's x position + (width of image div  *  nextIndex)
    let scrollLeft = containerRect.x + width * nextIndex

    // Scroll the div to the clicked image position
    // - scrollLeft is the x-axis of the carousel
    containerElement.scrollLeft = scrollLeft;

    // Finally set the new index
    setCurrentIndex(nextIndex)
  }

  return (

    (Object.keys(currentStyle).length > 0) &&

    <div className="carousel carousel-center space-x-0.5 bg-transparent rounded-box border">
      {
        currentStyle.photos.map((photo, i) => {
          return (
            <IconCarouselItem key={i} i={i} photos={currentStyle.photos} handleIconClick={handleIconClick}/>
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