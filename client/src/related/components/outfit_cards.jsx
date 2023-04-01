import React, {useEffect, useState} from 'react';
import ReactDOM from "react-dom";
import axios from 'axios';
import OverallRatingPlaceholder from './Rating.jsx';


const OutfitCard = ({product, setRightState, setLeftState}) => {
  let fits = JSON.parse(localStorage.getItem('fits')) || [];

  const [outfitItems, setOutfitItems] = useState(fits);


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
    axios.get(`/reviews/meta?product_id=${product.id}`)
      .then(response => response.data)
      .catch(error => {console.log(error)});

  //Adding items in local storage
  let addToCache  = (item) => {

    let alreadyInOutfit = false;
    if(localStorage.getItem('fits')) {
      fits = JSON.parse(localStorage.getItem('fits'));
    }

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
      let ratings = res[2].ratings;



      for(let i = 0; i < productPhotos.length; i++) {
        if (productPhotos[i]['default?']) {
          productInfo.url = productPhotos[i].photos[0].url;
          productInfo.thumbnail_url = productPhotos[i].photos[0].thumbnail_url;
        } else {
          productInfo.url = productPhotos[0].photos[0].url;
          productInfo.thumbnail_url = productPhotos[0].photos[0].thumbnail_url;
        }
      }
      let sumOfRatings = 0;
      let totalRatings = 0;

      Object.keys(ratings).forEach((rating) => {
        sumOfRatings += (+rating * ratings[rating]);
        totalRatings += +ratings[rating]
      })

      let totalRating = sumOfRatings/totalRatings;
      totalRating = totalRating.toFixed(2);
      productInfo.rating = totalRating;

      addToCache(productInfo)
    })
    .catch(err => console.log(err));



  const removeHandler = (event) => {
    removeItem(event.target.id)
  };


  const cards = outfitItems.map((card, index) =>
    <div data-testid={`${card.id}-YO`} id = {`${card.id}`} key={`${card.id} - map${index}`} className="carousel-item grid grid-col-1 aspect-ratio-3/2  gap-10 border-2 rounded border-black">
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
              <p id = {card.id} className="font-semibold text-sm">{card.category}</p>
              <p id = {card.id} className= 'text-md'>{card.name}</p>
              <p id = {card.id} className= 'text-sm'>{'$' + card.default_price}</p>
              <OverallRatingPlaceholder rating={card.rating} />

        </div>

    </div>
  );

  const addItemToOutfit =
  (
    <div className="carousel-item grid grid-col-1 aspect-ratio-3/2  gap-10 ">
      <div className="body p-2">
        <div className="card-body">
          <h2 className="card-title">Add to Outfit!</h2>
          <button data-testid = 'add to outfit'
          onClick={() => {
            fetchingOutfitInformation();
            setRightState(true);
            //setLeftState(true)
          }}
            className="btn btn-lg">+</button>
        </div>
      </div>
    </div>
  );

  const combinedElements = [
    addItemToOutfit,
    ...cards
  ]
  if(cards.length === 0) {
    setRightState(false);
    setLeftState(false);
  }


  return (
    <>{cards.length === 0 ? addItemToOutfit : combinedElements } </>
  )


}

export default OutfitCard;