/* eslint-disable react/prop-types */

import React, {useState, useEffect} from "react";
import axios from 'axios';
import Reviews from "./components/Reviews.jsx";


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
  <Reviews reviews={reviews}></Reviews>
  </div>
)
}

export default Ratings