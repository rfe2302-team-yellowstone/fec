
import React, {useState, useEffect} from 'react';
import ReactDOM from "react-dom";
import Comparison from "./comparison_modal.jsx";
import axios from "axios"


const RelatedCard = ({product, reviews}) => {
    //Hooks
    const [relatedItems, setRelatedItems] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [comparedProduct, setComparedProduct] = useState('');
    const [rating, setRating] = useState(2.3);


    //General product information
    let fetchingRelatedProducts = () => axios.get(`http://localhost:3000/products/${product.id}/related`)
    .then(response => {
      let relatedIds = response.data;
      let getProductInfo = Promise.all(relatedIds.map(id =>
        axios.get(`http://localhost:3000/products/${id}`)
        .then(res => res.data)
        .catch(err => console.log("Inside get req of related items: ", err))
      ));

    //Product styles, includes photo information
    let getProductPhotos = Promise.all(relatedIds.map(id =>
      axios.get(`http://localhost:3000/products/${id}/styles`)
      .then(res => res.data)
      .catch(err => console.log("Inside get req of related items: ", err))
    ));
    //Making the calls
    Promise.all(
        [getProductInfo,
        getProductPhotos]
      ).then((res) => {
        let productInfo = res[0];
        let productStyle = res[1];
        let productPhoto = [];

        for(let i = 0; i < productStyle.length; i++) {
          let photoObj = {};
          photoObj['id'] = productStyle[i].product_id;
          let resultObj = productStyle[i].results;
          for(let j = 0; j < resultObj.length; j ++) {
            if(resultObj[j]['default?']) {
              photoObj['thumbnail_url'] = resultObj[j].photos[0].thumbnail_url;
              photoObj['url'] = resultObj[j].photos[0].url;
            } else {
              photoObj['thumbnail_url'] = resultObj[0].photos[0].thumbnail_url;
              photoObj['url'] = resultObj[0].photos[0].url;
            }
          }
          productPhoto.push(photoObj);
        }

        productInfo.forEach(producto =>{
          for(let i = 0; i < productPhoto.length; i++) {
            if(producto.id == productPhoto[i].id) {
              producto['thumbnail_url'] = productPhoto[i].thumbnail_url;
              producto['url'] = productPhoto[i].url;
            }
          }

        });

        setRelatedItems(productInfo)


    })

    })
    .catch (err => console.log(err));

    // let getAverageRating = () =>{
    //   let totalRating = 0;

    //   reviews.forEach(review => {
    //     console.log(review)
    //     totalRating += review.rating;
    //   })
    //   let averageRating = totalRating/reviews.length;
    //   setRating(averageRating);
    // };

    useEffect(() => fetchingRelatedProducts(),[product]);
    //useEffect(()=> getAverageRating(), [reviews]);



    const modalHandler = (event) =>{

      relatedItems.forEach(item => {
        if (item.id == event.target.id) {
          setComparedProduct(item);
        }
      })

      setOpenModal(!openModal)
    }

    const cards = relatedItems.map((card) =>

      <div key={card.id} className="carousel-item rounded-box  w-1/2">

          <div className="card w-96 bg-base-100 shadow-xl">

          <figure className="relative w-full h-3/4">

            <img className="w-full h-full" src={card.url}/>
            <label onClick={modalHandler} id = {card.id} className = 'btn btn-ghost absolute top-2 right-0  '><svg id ={card.id}xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg></label>  </figure>
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

    return (
      <>{cards} <Comparison openModal={openModal} setOpenModal={setOpenModal} product={product} relatedItems = {relatedItems} comparedProduct={comparedProduct}/> </>
    )
}

export default RelatedCard;


