/* eslint-disable react/prop-types */

import React, {useState, useEffect} from "react";
import ReviewTile from "./ReviewTile.jsx"
import NewReview from "./NewReview.jsx"
import MoreReviews from "./MoreReviews.jsx"
import Sort from "./Sort.jsx"
import axios from 'axios'

const Reviews = ({product, reviews, setReviews}) => {
  // will need to style later

  const [sort, setSort] = useState('Relevant')
  const [order, setOrder] = useState([])
  const [maxReviews, setMaxReviews] = useState(2)

  useEffect(() => {
    setOrder(reviews)
  }, [reviews])
  // useEffect(() => {
  //   console.log(order, '-----ORDER------')
  // }, [order])

  return (
    <div>
    <div className="overflow-y-scroll max-h-screen scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100">
        <div className="mb-4">
        <div className="sticky top-0 z-1">
          <Sort reviews={reviews} setReviews={setReviews} order={order} setOrder={setOrder}></Sort>
          </div>
          {Array.isArray(order) && order.slice(0, maxReviews).map(review => (
          <ul key={review.review_id}>
          <ReviewTile review={review}></ReviewTile>
          </ul>
          ))}
    </div>
    </div>
    <div className="mt-4 flex gap-4">
          <NewReview product={product} setReviews={setReviews} order={order} setOrder={setOrder}></NewReview>
          <MoreReviews reviews={reviews} maxReviews={maxReviews} setMaxReviews={setMaxReviews}></MoreReviews>
        </div>
    </div>
  )
}

export default Reviews