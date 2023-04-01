
import React, {useState, useEffect} from 'react';
import ReactDOM from "react-dom";
import Comparison from "./comparison_modal.jsx";
import axios from "axios"
import OverallRatingPlaceholder from './Rating.jsx';

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
        axios.get(`/reviews/meta?product_id=${id}`)
        .then(response => response.data)
        .catch(error => {console.log(error)})
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
          // if(productStyle[i]=== undefined) {
          //   continue;
          // }
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
            // if(productStyle[i]=== undefined) {
            //   continue;
            // }
            if(producto.id == productPhoto[i].id) {
              producto['thumbnail_url'] = productPhoto[i].thumbnail_url;
              producto['url'] = productPhoto[i].url;
            }
          }

        });

        productRatings.forEach(producto => {

          let sumOfRatings = 0;
          let totalRatings = 0;
          let ratings = producto.ratings;
          Object.keys(ratings).forEach((rating) => {
            sumOfRatings += (+rating * ratings[rating]);
            totalRatings += +ratings[rating]
          })

          let totalRating = sumOfRatings/totalRatings;
          totalRating = totalRating.toFixed(2);
          producto.averageRating = totalRating;

        })
        productInfo.forEach(producto => {
          for(let i = 0; i < productRatings.length; i++) {
            if(producto.id == productRatings[i].product_id) {
              producto.rating = productRatings[i].averageRating;
            }
          }

        });

        setRelatedItems(productInfo);


    }).catch(err => console.log('Error in getting all API information:', err))

    })
    .catch ((err,res) => console.log('Error getting related products:', err, res));

    const modalHandler = (event) =>{

      let splitID = event.target.id.split('-');
      let newID = Number(splitID[0]);

      relatedItems.forEach(item => {
        if (item.id === newID) {
          setComparedProduct(item);
        }
      })

      setOpenModal(!openModal)
    }


    const cardClick = (event) => {
      let id = Number(event.target.id)
      if(!isNaN(id)) {

        updateProduct(id)
      }

    }

    useEffect(()=>{
      fetchingRelatedProducts();
    }, [product])

    const cards = relatedItems.map((card, i) =>

      <div data-testid = {card.id} id = {`${card.id}`}  onClick={cardClick} key={card.id} className="carousel-item grid grid-col-1 aspect-ratio-3/2  gap-10 border-2 rounded border-black">

          <div id = {card.id} className="relative h-64 w-52">

            <img id = {card.id} className="absolute object-cover h-full w-full"
            src={card.url === null? "https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png" : card.url}/>

            <button data-testid={`${card.id}-CMB`} onClick={modalHandler} id = {`${card.id}-CM`} className = 'btn btn-ghost btn-sm bg-white absolute top-2 right-0  '>
              <svg id ={`${card.id}-CMB`} xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="black"><path id ={`${card.id}-CM`} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" /></svg>
            </button>
          </div>
            <div id = {card.id} className="body p-2">
              <p id = {card.id} className="font-semibold text-sm">{card.category}</p>
              <p id = {card.id} className= 'text-md'>{card.name}</p>
              <p id = {card.id} className= 'text-sm'>{'$' + card.default_price}</p>
              <OverallRatingPlaceholder rating = {card.rating} />
          </div>

      </div>
    );





    return (
      <>{cards} <Comparison openModal={openModal} setOpenModal={setOpenModal} product={product} relatedItems = {relatedItems} comparedProduct={comparedProduct}/> </>
    )



}

export default RelatedCard;


