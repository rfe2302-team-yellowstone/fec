import React from 'react'
import { useState, useEffect } from 'react'
import ExpandButton from './ExpandButton.jsx'

export default function ImageViewerItem ({photos, i, fullScreenMode, setFullScreenMode}) {

  // Simple state variable to show or hide expand button when you hover over image
  //    'none' = hide
  //    'block' = show

  const [expandStyle, setExpandStyle] = useState({display: 'none'})

  let prefix;
  if (fullScreenMode) {
    prefix = 'fs'
  } else {
    prefix = ''
  }

  // console.log('prefix', prefix)


  // Function needed to prevent #href from jumping the whole page
  // from here: https://github.com/saadeghi/daisyui/issues/413
//   const goTo = (event) => {

//     event.preventDefault()
//     const btn = event.target
//     console.log('button!', btn)


//     //Equivalent
//     //const carousel = document.querySelector('.carousel')
//     const carousel = document.querySelector('#image-viewer-carousel')
//     // const carousel = btn.parentElement!.parentElement!.parentElement!

//     console.log('carousel!', carousel);

//     const id = btn.getAttribute('id')
//     console.log('id!', id);

//     let href = btn.getAttribute('href')
//     //href = href.slice(1, href.length) // trim off
//     console.log('href!', href);
//     // const target = carousel.querySelector<HTMLDivElement>(href)

//     const target = document.querySelector(`div${href}`)
//     console.log('target!', target);
//     const left = target.offsetLeft
//     console.log('offsetLeft', left)
//     carousel.scrollTo({left: left+100})

//     return true;
// }


  // const handleClick = (event) => {
  //   console.log('clickclickclick!')
  //   return false;
  // }

  return (
    <div
      id={`${prefix}slide${i}`}
      className="carousel-item relative w-full h-fit grid justify-items-center items-center"
      onMouseEnter={() => setExpandStyle({display:'block'})}
      onMouseLeave={() => setExpandStyle({display:'none'})}
    >
      <img src={photos[i].url} className="w-4/6 self-center" />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 ">
        {
          // Prev button
          (i === 0) && <a href={`#slide${i}`} className="btn btn-circle bg-transparent border-transparent" >❮</a> ||
          (i !== 0) && <a href={`#slide${i-1}`} className="btn btn-circle" >❮</a>
        }
        {
          // Next button
          (i !== (photos.length -1)) && <a href={`#slide${i+1}`} className="btn btn-circle" >❯</a>
        }

      </div>
      <ExpandButton expandStyle={expandStyle} fullScreenMode={fullScreenMode} setFullScreenMode={setFullScreenMode}/>
    </div>
  )
}