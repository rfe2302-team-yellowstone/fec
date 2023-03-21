import React, {useState, useEffect} from "react";

const ProductBreakdown = ({reviews}) => {

  const totalReviews = reviews.length
  const [rating, setRating] = useState(0)

  useEffect(() => {
    let score = 0
    for (let i = 0; i < totalReviews; i++) {
      score += reviews[i].rating
    }
    score = score/totalReviews
    setRating(score)
  }, [reviews])

  return (
    <div>
    <h1>Comfort</h1>
    <input type="range" min="0" max="100" value={`${rating}/5 * 100`} className="range" step="25" />
    <div className="w-full flex justify-between text-xs px-2">
    <span>Too small</span>
  <span>|</span>
  <span>Perfect</span>
  <span>|</span>
  <span>Too large</span>
    </div>
    <h1>Style</h1>
    <input type="range" min="0" max="100" value={`${rating}/5 * 100`} className="range" step="25" />
    <div className="w-full flex justify-between text-xs px-2">
    <span>Too small</span>
  <span>|</span>
  <span>Perfect</span>
  <span>|</span>
  <span>Too large</span>
    </div>
  </div>
  )
}

export default ProductBreakdown