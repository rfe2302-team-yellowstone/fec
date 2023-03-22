import React, {useEffect, useState} from 'react';
import ReactDOM from "react-dom";
import axios from 'axios';


const OutfitCard = ({product, reviews}) => {
  const [outfitItems, setOutfitItems] = useState([]);
  const [rating, setRating] = useState(3.5)



  // //General product information
  let fetchingRelatedProducts = () => axios.get(`http://localhost:3000/products/${product.id}`)
  .then(response => {
    let tempArr = [];
    tempArr.push(response.data)
    setOutfitItems(tempArr);

  })
  .catch(err => console.log(err));

  const removeItem = () => setOutfitItems([]);

  const cards = outfitItems.map((card, index) =>
    <div key={index} className="carousel-item rounded-box  w-1/2">
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="relative w-full h-full">
            <img className="w-full h-full" src='https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2775&q=80'/>

            <button onClick = {removeItem} className = 'absolute top-0 right-0 btn-circle '>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
        </figure>
          <div className="card-body">
            <h2 className="card-title">{card.name}</h2>
            <p>{card.description}</p>
            <p>{'$' + card.default_price}</p>
            <span
            className="flex gap-1 text-amber-400"

            role="img"
            aria-label="Rating: 4 out of 5 stars"
            >
              <span aria-hidden="true"   className={`w-6 h-6 ${rating > .5 ? "text-yellow-500" : "text-gray-300"}`}>
              <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
              fillRule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
              clipRule="evenodd"
              > </path>
              </svg>
            </span>
            <span aria-hidden="true"  className={`w-6 h-6 ${rating > 1.5 ? "text-yellow-500" : "text-gray-300"}`}>
              <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6">
              <path
              fillRule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
              clipRule="evenodd"
              > </path>
              </svg>
            </span>
            <span aria-hidden="true"   className={`w-6 h-6 ${rating > 2.5 ? "text-yellow-500" : "text-gray-300"}`}>
              <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6">
              <path
              fillRule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
              clipRule="evenodd"
              > </path>
              </svg>
            </span>
              <span aria-hidden="true"   className={`w-6 h-6 ${rating > 3.5 ? "text-yellow-500" : "text-gray-300"}`}>
              <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6">
              <path
              fillRule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
              clipRule="evenodd"
              > </path>
              </svg>
            </span>
            <span aria-hidden="true"   className={`w-6 h-6 ${rating > 4.5 ? "text-yellow-500" : "text-gray-300"}`}>
              <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6">
              <path
              fillRule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
              clipRule="evenodd"
              > </path>
              </svg>
            </span>
            </span>
          </div>
        </div>
    </div>
  );

  const addItemToOutfit =
  (
    <div className="carousel-item rounded-box  w-1/2">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Add to Outfit!</h2>
          <button onClick={fetchingRelatedProducts} className="btn btn-lg">+</button>
        </div>
      </div>
    </div>
  );



  return (
    <>{cards.length === 0 ? addItemToOutfit : cards}</>
  )


}

export default OutfitCard;