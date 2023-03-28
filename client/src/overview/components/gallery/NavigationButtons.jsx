import React from 'react'
import { useState, useEffect } from 'react'

export default function NavigationButtons ({i, idPrefix, handleNavigationOnClick, photosLength}) {

  // const [showBehavior, setShowBehavior] = useState({display: 'none'})


  // const handleMouseEnter = (event) => {
  //   event.preventDefault()
  //   setShowBehavior({display:'block'})
  // }


  // const handleMouseLeave = (event) => {
  //   event.preventDefault()
  //   setShowBehavior({display:'none'})
  // }



  return (

    <div className={`${(idPrefix === 'fs-') ? 'z-50' : 'z-10'} absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2`}>

      {/* // onMouseEnter={() => setExpandStyle({display:'block'})}
      // onMouseLeave={() => setExpandStyle({display:'none'})} */}
    {
      // Prev button
      (i === 0) && <a href={`#`} id={`${idPrefix}prev-button-hidden`} className="z-0 btn btn-circle bg-transparent border-transparent" >❮</a> ||
      (i !== 0) && <a href={`#`} id={`${idPrefix}prev-button`} className="btn btn-circle" onClick={handleNavigationOnClick}>❮</a>
    }
    {
      // Next button
      (i !== (photosLength -1)) && <a href={`#`} id={`${idPrefix}next-button`}className="btn btn-circle" onClick={handleNavigationOnClick}>❯</a>
    }

  </div>
  )
}