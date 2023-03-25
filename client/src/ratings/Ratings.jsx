/* eslint-disable react/prop-types */

import React, {useState, useEffect} from "react";
import axios from 'axios';
import Reviews from "./components/Reviews.jsx";
import NewReview from "./components/NewReview.jsx"
import RatingBreakdown from "./components/RatingBreakdown.jsx"
import ProductBreakdown from "./components/ProductBreakdown.jsx"


// require("dotenv").config();

const Ratings = ({product}) => {

  // const [loading, setLoading] = useState(false)
  const [reviews, setReviews] = useState([])
  const [metaData, setMetaData] = useState({})
  // const [selectedProduct, setSelectedProduct] = useState(null)

  // console.log(product)

useEffect(() => {
  axios.get(`/reviews?product_id=${product.id}&count=1000`)
  .then(response => {
    setReviews(response.data.results)
  })
  .then(() => {
    axios.get(`/reviews/meta?product_id=${product.id}`)
    .then((results) =>{
      // console.log(results.data)
      setMetaData(results.data)
    })
  })
  .catch(error => {
    console.log(error)
  })
}, [])

useEffect(() => {
  console.log(metaData)
}, [metaData])

  const relevanceSorter = () => {
    const weightFactor = 0.05
    const orderedReviews = reviews.sort((a, b) => {
      const aDays = Math.floor((new Date() - new Date(a.date)) / (1000 * 60 * 60 * 24))
      const bDays = Math.floor((new Date() - new Date(a.date)) / (1000 * 60 * 60 * 24))
      const aScore = a.helpfulness * weightFactor + aDays // .5 is the weight factor - otherwise helpfulness will be overemphasized
      const bScore = b.helpfulness * weightFactor + bDays
      // console.log(a.reviewer_name, aScore, b.reviewer_name, bScore)
      return aScore - bScore;
    })
    // console.log(orderedReviews)
    return orderedReviews.reverse()
  }

  const orderedReviews = relevanceSorter()

return (
  <div>
  <div className="grid grid-cols-3 gap-4">
  <div className="col-span-1 pl-4">
  <div className="pb-4">
  <RatingBreakdown  reviews={reviews} setReviews={setReviews} metaData={metaData}></RatingBreakdown>
  </div>
  <ProductBreakdown className ="pt-16" reviews={reviews} metaData={metaData}></ProductBreakdown>
  </div>
  <div className="col-span-2 pt-4">
  <Reviews product={product} reviews={reviews} orderedReviews={orderedReviews}></Reviews>
  <div className="pt-4">
  </div>
  </div>
  </div>
  <div>

  </div>
  </div>
)
}

export default Ratings