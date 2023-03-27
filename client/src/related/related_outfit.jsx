import React, {useState, useEffect} from 'react';
import ReactDOM from "react-dom";
import axios from "axios";
import RelatedCarousel from "./components/related_carousel.jsx"
import OutfitCarousel from "./components/outfit_carousel.jsx"


const Related = ({product, onMouseOver}) => {
  const [reviews, setReviews] = useState([]);

  let getRating = ()=>{
    axios.get(`/reviews?product_id=${product.id}`)
    .then(res => setReviews(res.data.results))
    .catch(err => console.log('Error in API call:', err))
  };

  useEffect(()=>{
    getRating();
  }, [])

  return (
  <div className = 'flex flex-col items-center w-100' onMouseOver={onMouseOver}>
    <RelatedCarousel product = {product}/>
    <OutfitCarousel product = {product} reviews = {reviews}/>
  </div>
  )

};

export default Related;