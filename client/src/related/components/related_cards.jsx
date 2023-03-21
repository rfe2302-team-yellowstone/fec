
import React, {useState, useEffect} from 'react';
import ReactDOM from "react-dom";
import Comparison from "./comparison_modal.jsx";
import axios from "axios"


const RelatedCard = ({product}) => {
    //Hooks
    const [relatedItems, setRelatedItems] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [comparedProduct, setComparedProduct] = useState('');


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

    useEffect(() => {
      fetchingRelatedProducts();
    }, [product])



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
            </div>
          </div>
      </div>
    );

    return (
      <>{cards} <Comparison openModal={openModal} setOpenModal={setOpenModal} product={product} relatedItems = {relatedItems} comparedProduct={comparedProduct}/> </>
    )
}

export default RelatedCard;


