/* eslint-disable react/prop-types */

import React, {useState, useEffect} from "react";
import axios from 'axios';
import Reviews from "./components/Reviews.jsx";
import NewReview from "./components/NewReview.jsx"
import RatingBreakdown from "./components/RatingBreakdown.jsx"
import ProductBreakdown from "./components/ProductBreakdown.jsx"
import Sort from "./components/Sort.jsx"


// require("dotenv").config();

const Ratings = ({product}) => {

  // const [loading, setLoading] = useState(false)
  const [reviews, setReviews] = useState([])
  const [metaData, setMetaData] = useState({})
  // const [selectedProduct, setSelectedProduct] = useState(null)

  // console.log(product)

useEffect(() => {
  axios.get('/reviews?product_id=37311')
  .then(response => {
    setReviews(response.data.results)
    // console.log(response.data.results)
  })
  .then(() => {
    axios.get(`/reviews/meta?product_id=${product.id}`)
  })
  .then((results) =>{
    // console.log(results)
    setMetaData(results)
  })
  .catch(error => {
    console.log(error)
  })
}, [])

useEffect(() => {
  console.log(reviews)
}, [reviews])

  // console.log(products)

return (
  <div>
  <div className="grid grid-cols-3 gap-4">
  <div className="col-span-1 pl-4">
  <div className="pb-4">
  <RatingBreakdown  reviews={reviews}></RatingBreakdown>
  </div>
  <ProductBreakdown className ="pt-16" reviews={reviews}></ProductBreakdown>
  </div>
  <div className="col-span-2 pt-4">
  {/* <Sort reviews={reviews} setReviews={setReviews}></Sort> */}
  <Reviews  product={product} reviews={reviews} setReviews={setReviews}></Reviews>
  <div className="pt-4">
  {/* <NewReview product={product} setReviews={setReviews}></NewReview> */}
  </div>
  </div>
  </div>
  <div>

  </div>
  </div>
)
}

export default Ratings