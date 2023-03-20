/* eslint-disable react/prop-types */

import React, {useState, useEffect} from "react";
import axios from 'axios';
import Reviews from "./components/Reviews.jsx";
import NewReview from "./components/NewReview.jsx"
import RatingBreakdown from "./components/RatingBreakdown.jsx"


// require("dotenv").config();

const Ratings = ({product}) => {

  // const [loading, setLoading] = useState(false)
  const [reviews, setReviews] = useState([])
  // const [selectedProduct, setSelectedProduct] = useState(null)

  console.log(product)

useEffect(() => {
  axios.get('/reviews?product_id=37311')
  .then(response => {
    console.log(response.data.results)
    setReviews(response.data.results)
  })
  .catch(error => {
    console.log(error)
  })
}, [])

  // console.log(products)

return (
  <div>
  <div className="grid grid-cols-3 gap-4">
  <RatingBreakdown className="col-span-1" reviews={reviews}></RatingBreakdown>
  <Reviews className="col-span-2" reviews={reviews}></Reviews>
  </div>
  <div>
  <NewReview setReviews={setReviews}></NewReview>
  </div>
  </div>
)
}

export default Ratings