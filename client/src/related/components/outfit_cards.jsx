import React, {useEffect, useState} from 'react';
import ReactDOM from "react-dom";
import axios from 'axios';


const OutfitCard = ({product}) => {
  const [outfitItems, setOutfitItems] = useState([]);



  // //General product information
  let fetchingRelatedProducts = () => axios.get(`http://localhost:3000/products/${product.id}`)
  .then(response => {
    //console.log(response.data)
    let tempArr = [];
    tempArr.push(response.data)
    setOutfitItems(tempArr);

  })
  .catch(err => console.log(err))
  ;

  // //Product styles, includes photo information
  // let getProductPhotos = Promise.all(relatedIds.map(id =>
  //   axios.get(`http://localhost:3000/products/${id}/styles`)
  //   .then(res => res.data)
  //   .catch(err => console.log("Inside get req of related items: ", err))
  // ));
  // //Making the calls
  // Promise.all(
  //     [getProductInfo,
  //     getProductPhotos]
  //   ).then((res) => {
  //     let productInfo = res[0];
  //     let productStyle = res[1];
  //     let productPhoto = [];

  //     for(let i = 0; i < productStyle.length; i++) {
  //       let photoObj = {};
  //       photoObj['id'] = productStyle[i].product_id;
  //       let resultObj = productStyle[i].results;
  //       for(let j = 0; j < resultObj.length; j ++) {
  //         if(resultObj[j]['default?']) {
  //           photoObj['thumbnail_url'] = resultObj[j].photos[0].thumbnail_url;
  //           photoObj['url'] = resultObj[j].photos[0].url;
  //         } else {
  //           photoObj['thumbnail_url'] = resultObj[0].photos[0].thumbnail_url;
  //           photoObj['url'] = resultObj[0].photos[0].url;
  //         }
  //       };
  //       productPhoto.push(photoObj);
  //     };

  //     productInfo.forEach(product =>{
  //       for(let i = 0; i < productPhoto.length; i++) {
  //         if(product.id == productPhoto[i].id) {
  //           product['thumbnail_url'] = productPhoto[i].thumbnail_url;
  //           product['url'] = productPhoto[i].url;
  //         }
  //       }

  //     });

  //     setRelatedItems(productInfo)


  // })

  // })
  // .catch (err => console.log(err));

  // useEffect(() => {
  //   fetchingRelatedProducts();
  // }, [product])
  const removeItem = () => setOutfitItems([]);

  const cards = outfitItems.map((card, index) =>
    <div key={index} className="carousel-item rounded-box  w-1/2">
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="relative w-full h-full">
            <img className="w-full h-full" src='https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2775&q=80
'/> <button onClick = {removeItem} className = 'absolute top-0 right-0 btn-circle '><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg></button>  </figure>
          <div className="card-body">
            <h2 className="card-title">{card.name}</h2>
            <p>{card.description}</p>
            <p>{'$' + card.default_price}</p>
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


console.log(outfitItems)

  return (
    <>{cards.length === 0 ? addItemToOutfit : cards}</>
  )


}

export default OutfitCard;