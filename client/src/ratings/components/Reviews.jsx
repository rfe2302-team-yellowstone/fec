/* eslint-disable react/prop-types */

import React, {useState, useEffect} from "react";
import ReviewTile from "./ReviewTile.jsx"
import NewReview from "./NewReview.jsx"

const Reviews = ({reviews}) => {
  // will need to style later

  const [sort, setSort] = useState('Relevant')
  const [order, setOrder] = useState([])

  return (
    <div>
    <h2>Product Reviews</h2>
    {reviews.map(review => (
     <ul key={review.review_id}>
     <ReviewTile  review={review}></ReviewTile>
     </ul>
    ))}
    </div>
  )
}

export default Reviews