
import React, {useState, useEffect} from 'react';
import ReactDOM from "react-dom";
import Comparison from "./comparison_modal.jsx";
import axios from "axios"



const RelatedCard = ({product, updateProduct}) => {
    //Hooks
    const [relatedItems, setRelatedItems] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [comparedProduct, setComparedProduct] = useState('');



    let fetchingRelatedProducts = () => axios.get(`/products/${product.id}/related`)
    .then(response => {
      let relatedIds = response.data;


      let getProductInfo = Promise.all(relatedIds.map(id =>
        axios.get(`/products/${id}`)
        .then(res => res.data)
        .catch(err => console.log("Inside get req of related items: ", err))
      ));

      let getProductPhotos = Promise.all(relatedIds.map(id =>
        axios.get(`/products/${id}/styles`)
        .then(res => res.data)
        .catch(err => console.log("Inside get req of related items: ", err))
      ));

      let getRatingForRelatedProducts= Promise.all(relatedIds.map( id =>
        axios.get(`/reviews?product_id=${id}`)
        .then(res => res.data)
        .catch(err => console.log(err))
      ))
    //Making the calls
    Promise.all(
        [getProductInfo,
        getProductPhotos,
        getRatingForRelatedProducts]
      ).then((res) => {
        let productInfo = res[0];
        let productStyle = res[1];
        let productRatings = res[2];
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

        productRatings.forEach(producto => {
          let sumOfRatings = 0;
          let ratings = producto.results;
          ratings.forEach(review => {
            sumOfRatings += review.rating;
          })
          let average = sumOfRatings/ratings.length;
          producto.averageRating = average;
        })
        productInfo.forEach(producto => {
          for(let i = 0; i < productRatings.length; i++) {
            if(producto.id == productRatings[i].product) {
              producto.rating = productRatings[i].averageRating;
            }
          }
        });

        setRelatedItems(productInfo);


    }).catch(err => console.log('Error in getting all API information:', err))

    })
    .catch (err => console.log('Error getting related products:', err));


    useEffect(() => {fetchingRelatedProducts()},[product]);


    const modalHandler = (event) =>{
      let splitID = event.target.id.split('-');
      let newID = splitID[0];

      relatedItems.forEach(item => {
        if (item.id == newID) {
          setComparedProduct(item);
        }
      })

      setOpenModal(!openModal)
    }


    const cardClick = (event) => {
      let id = Number(event.target.id)
      updateProduct(id)
    }

    const cards = relatedItems.map((card, i) =>

      <div data-testid = {card.id} id = {`${card.id}`}  onClick={cardClick} key={card.id} className="carousel-item grid grid-col-1 aspect-ratio-3/2  gap-10 border-2 rounded border-black">

          <div id = {card.id} className="relative h-64 w-52">

            <img id = {card.id} className="absolute object-cover h-full w-full"
            src={card.url === null? "https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png" : card.url}/>

            <button data-testid={`${card.id}-CMB`} onClick={modalHandler} id = {`${card.id}-CM`} className = 'btn btn-ghost btn-sm bg-white absolute top-2 right-0  '>
              <svg id ={`${card.id}-CM`} xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="black"><path id ={`${card.id}-CM`} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" /></svg>
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





    return (
      <>{cards} <Comparison openModal={openModal} setOpenModal={setOpenModal} product={product} relatedItems = {relatedItems} comparedProduct={comparedProduct}/> </>
    )



}

export default RelatedCard;


