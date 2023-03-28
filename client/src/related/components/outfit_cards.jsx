import React, {useEffect, useState} from 'react';
import ReactDOM from "react-dom";
import axios from 'axios';


const OutfitCard = ({product, reviews}) => {
  let fits = JSON.parse(localStorage.getItem('fits'));

  const [outfitItems, setOutfitItems] = useState(fits);
  //const [rating, setRating] = useState(0)

  //Detailed
  let getProductInfo =
    axios.get(`/products/${product.id}`)
      .then(response => response.data)
      .catch(err => console.log(err));

 //Photos
 let getProductPhotos =
   axios.get(`/products/${product.id}/styles`)
      .then(res => res.data)
      .catch(err => console.log("Inside get req of related items: ", err));

 //Rating
 let getProductRating =
   axios.get(`/reviews?product_id=${product.id}&count=1000`)
      .then(res => res.data)
      .catch(err => console.log(err));

  //Adding items in local storage
  let addToCache  = (item) => {

    let alreadyInOutfit = false;
    if(localStorage.getItem('fits')) {
      fits = JSON.parse(localStorage.getItem('fits'));
    }
    console.log(fits)
    if(fits.length !== 0) {
      fits.forEach(fit => {
        if(fit.id === item.id) {
          alreadyInOutfit = true
        }
      })
    }

    if (alreadyInOutfit) {
      setOutfitItems(fits)
    } else {
      fits.push(item);
      localStorage.setItem('fits', JSON.stringify(fits));
      setOutfitItems(fits)
    }

  };

  //Removing items from local storage
  let removeItem = (itemID) => {
    let fits;
    if(localStorage.getItem('fits')) {
      fits = JSON.parse(localStorage.getItem('fits'));
    }
    let itemIndex;
    fits.forEach((fit, index) => {
      if(fit.id == itemID) {
        itemIndex = index;
      }
    })
    let firstHalf = fits.slice(0, itemIndex);
    let secondHalf = fits.slice(itemIndex + 1);
    fits = [...firstHalf, ...secondHalf];
localStorage.setItem('fits', JSON.stringify(fits));
      setOutfitItems(fits)

  }

  // Consolidating all of the information
  let fetchingOutfitInformation = () =>

    Promise.all([getProductInfo, getProductPhotos, getProductRating])
    .then((res) => {
      let productInfo = res[0];
      let productPhotos = res[1].results;
      let ratings = res[2].results;


      for(let i = 0; i < productPhotos.length; i++) {
        if (productPhotos[i]['default?']) {
          productInfo.url = productPhotos[i].photos[0].url;
          productInfo.thumbnail_url = productPhotos[i].photos[0].thumbnail_url;
        } else {
          productInfo.url = productPhotos[0].photos[0].url;
          productInfo.thumbnail_url = productPhotos[0].photos[0].thumbnail_url;
        }
      }
      let ratingTotal = 0;
      ratings.forEach(rating => {
        ratingTotal += rating.rating;
      });
      let aveRating = ratingTotal/ratings.length; //the arbitrary number of reviews pulled
      productInfo.rating = aveRating;
      addToCache(productInfo)
    })
    .catch(err => console.log(err));

  //useEffect( ()=>{fetchingOutfitInformation()}, [product])


  const removeHandler = (event) => {
    removeItem(event.target.id)
  };

  const cards = outfitItems.map((card, index) =>
    <div id = {`${card.id}-${index}`} key={card.id} className="carousel-item grid grid-col-1 aspect-ratio-3/2  gap-10 border-2 rounded border-black">
        <div className="relative h-64 w-52">

            <img
            className="absolute object-cover h-full w-full"
            src={card.url === null? "https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png" : card.url}
            />

            <button id={card.id} onClick = {removeHandler} className = 'btn btn-ghost btn-sm bg-white absolute top-2 right-0   '>
              <svg id={card.id} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path id={card.id} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
        </div>
        <div id = {card.id} className="body p-2">
              <p id = {card.id} className="text-sm">{card.category}</p>
              <p id = {card.id} className= 'text-md'>{card.name}</p>
              <p id = {card.id} className= 'text-sm'>{'$' + card.default_price}</p>
              <span className="flex gap-1 text-amber-400" role="img">
                <span aria-hidden="true"   className={`w-4 h-4 ${card.rating > .5 ? "text-yellow-500" : "text-gray-300"}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd">
                    </path>
                  </svg>
                </span>
            <span aria-hidden="true"  className={`w-4 h-4 ${card.rating > 1.5 ? "text-yellow-500" : "text-gray-300"}`}>
              <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4">
              <path
              fillRule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
              clipRule="evenodd"
              > </path>
              </svg>
            </span>
            <span aria-hidden="true"   className={`w-4 h-4 ${card.rating > 2.5 ? "text-yellow-500" : "text-gray-300"}`}>
              <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4">
              <path
              fillRule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
              clipRule="evenodd"
              > </path>
              </svg>
            </span>
              <span aria-hidden="true"   className={`w-4 h-4 ${card.rating > 3.5 ? "text-yellow-500" : "text-gray-300"}`}>
              <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4">
              <path
              fillRule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
              clipRule="evenodd"
              > </path>
              </svg>
            </span>
            <span aria-hidden="true"   className={`w-4 h-4 ${card.rating > 4.5 ? "text-yellow-500" : "text-gray-300"}`}>
              <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4">
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
  );

  const addItemToOutfit =
  (
    <div className="carousel-item grid grid-col-1 aspect-ratio-3/2  gap-10 ">
      <div className="body p-2">
        <div className="card-body">
          <h2 className="card-title">Add to Outfit!</h2>
          <button onClick={fetchingOutfitInformation} className="btn btn-lg">+</button>
        </div>
      </div>
    </div>
  );

  const combinedElements = [
    addItemToOutfit,
    ...cards
  ]


  return (
    <>{cards.length === 0 ? addItemToOutfit : combinedElements } </>
  )


}

export default OutfitCard;