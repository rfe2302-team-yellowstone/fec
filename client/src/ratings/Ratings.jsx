/* eslint-disable react/prop-types */

import React, {useState, useEffect} from "react";
import axios from 'axios';
import Reviews from "./components/Reviews.jsx";
import NewReview from "./components/NewReview.jsx"
import RatingBreakdown from "./components/RatingBreakdown.jsx"
import ProductBreakdown from "./components/ProductBreakdown.jsx"
import Search from './components/Search.jsx'


// require("dotenv").config();

const Ratings = ({product, onMouseOver}) => {

  // const [loading, setLoading] = useState(false)
  const [reviews, setReviews] = useState([])
  const [metaData, setMetaData] = useState({})
  const [allReviews, setAllReviews] = useState([])
  // const [selectedProduct, setSelectedProduct] = useState(null)

  // console.log(product)

useEffect(() => {
  axios.get(`/reviews?product_id=${product.id}&count=1000&sort=relevant`)
  .then(response => {
    setReviews(response.data.results)
    setAllReviews(response.data.results)
  })
  .then(() => {
    axios.get(`/reviews/meta?product_id=${product.id}`)
    .then((results) => {
      // console.log(results.data)
      setMetaData(results.data)
    })
  })
  .catch(error => {
    console.log(error)
  })
}, [])

useEffect(() => {
  console.log(reviews)
}, [reviews])

return (
  <div onMouseOver={onMouseOver}>
    <div className="grid grid-cols-3 gap-4">
      <div className="col-span-1 pl-4">
        <div className="pb-4">
          <RatingBreakdown
            reviews={reviews}
            setReviews={setReviews}
            metaData={metaData}
            product={product}
          ></RatingBreakdown>
        </div>
        <ProductBreakdown
          className="pt-16"
          reviews={reviews}
          metaData={metaData}
        ></ProductBreakdown>
      </div>
      <div className="col-span-2 pt-4">
      <Search reviews={reviews} setReviews={setReviews} allReviews={allReviews}></Search>
        <Reviews
          product={product}
          reviews={reviews}
          setReviews={setReviews}
        ></Reviews>
        <div className="pt-4"></div>
      </div>
    </div>
    <div></div>
  </div>
);
}

export default Ratings