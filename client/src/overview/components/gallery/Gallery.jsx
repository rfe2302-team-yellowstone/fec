import React from 'react'
import { useState } from 'react'
import ImageViewer from './ImageViewer.jsx'
import IconCarousel from './IconCarousel.jsx'
import FullScreenModal from './FullScreenModal.jsx'

export default function Gallery ({currentStyle}) {

  const [fullScreenMode, setFullScreenMode] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0) // index position of image currently showing

  // Given an index position, calculate image to show in carousel
  const changeImage = (index) => {

    // Set the ID of the clicked image
    const imageID = `slide-img-${index}`

    // Just return if same image
    if(index === currentIndex) {
      return;
    }

    // Get elements from DOM
    const imageElement = document.getElementById(imageID);
    const containerElement = document.getElementById("image-viewer-carousel");

    // Get the position of the clicked image relative to the viewport
    const containerRect = containerElement.getBoundingClientRect();
    const imageRect = imageElement.getBoundingClientRect();

    // Width of each image div
    let width = imageRect.width

    // Calculate distance you need to scroll from left
    //  - Current container's x position + (width of image div  *  nextIndex)
    let scrollLeft = containerRect.x + width * index

    console.log('scrollLeft', scrollLeft)
    console.log('container', containerRect.x)
    console.log('width', width)
    console.log('index', index)

    // Scroll the div to the clicked image position
    // - scrollLeft is the x-axis of the carousel
    containerElement.scrollLeft = scrollLeft;

    // Finally set the new index
    setCurrentIndex(index)
  }


  return (
    <div className='w-full xl:w-1/2 grid justify-items-center items-center'>

      {/* <FullScreenModal currentStyle={currentStyle} fullScreenMode={fullScreenMode} setFullScreenMode={setFullScreenMode}/> */}
      <ImageViewer
        currentStyle={currentStyle}
        fullScreenMode={fullScreenMode}
        setFullScreenMode={setFullScreenMode}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        changeImage={changeImage}
      />

      <IconCarousel
        currentStyle={currentStyle}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        changeImage={changeImage}
      />
    </div>
  )
}