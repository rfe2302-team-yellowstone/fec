import React, {useState, useEffect} from "react";
import Characteristics from './Characteristics.jsx'
import classnames from 'classnames'

const ProductBreakdown = ({reviews, metaData}) => {

  const totalReviews = reviews.length
  const [rating, setRating] = useState(0)
  // const [characteristics, setCharacteristics]  = useState()

  useEffect(() => {
    let score = 0
    for (let i = 0; i < totalReviews; i++) {
      score += reviews[i].rating
    }
    score = score/totalReviews
    setRating(Math.round(score * 10)/10)
  }, [reviews])

  const characteristics = metaData.characteristics ? Object.entries(metaData.characteristics) : []

  const getScaleColor = (value) => {
    if (value <= 2) {
      return "bg-red-500";
    } else if (value <= 3) {
      return "bg-yellow-500"
    } else if (value <= 4) {
      return "bg-green-500"
    } else {
      return "bg-blue-500"
    }
  }

  return (
    <>
    <div></div>
     {characteristics.length > 0 ? (
    <div className="flex flex-col gap-2">
    {characteristics.map(([name, value]) => (
      <div className="flex items-center gap-2" key={name}>
      <div className="w-32">{name}</div>
      <div
      className={classnames(
        "w-full h-4 rounded-full",
        getScaleColor(value.value)
      )}
      style={{width: `${(value.value/5) * 100}%`}}
      ></div>
      <div className="w-8">{Math.round(value.value * 100)/100}</div>
       </div>
    ))}
    </div>
    ) : (<div>Loading....</div>)}
    </>
  )
}

export default ProductBreakdown

  //   <div>
  //   <h1>Comfort</h1>
  //   <input type="range" min="0" max="100" value={`${rating}/5 * 100`} className="range" step="25" />
  //   <div className="w-full flex justify-between text-xs px-2">
  //   <span>Too small</span>
  // <span>|</span>
  // <span>Perfect</span>
  // <span>|</span>
  // <span>Too large</span>
  //   </div>
  //   <h1>Style</h1>
  //   <input type="range" min="0" max="100" value={`${rating}/5 * 100`} className="range" step="25" />
  //   <div className="w-full flex justify-between text-xs px-2">
  //   <span>Too small</span>
  // <span>|</span>
  // <span>Perfect</span>
  // <span>|</span>
  // <span>Too large</span>
  //   </div>
  // </div>