
import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import axios from 'axios';
import ReviewsList from "./components/ReviewsList.jsx";


// require("dotenv").config();

const Ratings = () => {
  const API_KEY = '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'

  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState([])
  const [selectedProduct, setSelectedProduct] = useState(null)

useEffect(() => {
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/', {
    headers: {
      Authorization: API_KEY
    }
  })
  .then(response => {
    setProducts(response.data)
  })
  .catch(error => {
    console.log(error)
  })
}, [])

useEffect(() => {
  console.log(products)
}, [products])

  // console.log(products)

  if (products.length < 1) {
    return (
      <div>NOTHING</div>
    )
  }else {
  return (
    <div>
    <ReviewsList products={products}>List of Reviews</ReviewsList>
    </div>
  )
  }
}

export default Ratings