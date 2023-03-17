
import React from 'react';
import ReactDOM from "react-dom";
import Comparison from "./comparison_modal.jsx"


const RelatedCard = () => {
    // const [products, setProducts] = useState([]);

  // const fetchProductInfo = ( ) => {
  //   axios.get (https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/37314/styles, {
  //     params: {}
  //   })
  // };
   let photo =[
    {
        "thumbnail_url": "https://images.unsplash.com/photo-1554260570-9140fd3b7614?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
        "url": "https://images.unsplash.com/photo-1554260570-9140fd3b7614?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
        "default_price": "65.00",
        "name": "Slacker's Slacks",
    "description": "I'll tell you how great they are after I nap for a bit."
    },
    {
        "thumbnail_url": "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
        "url": "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80",
        "default_price": "65.00",
        "name": "Slacker's Slacks",
        "description": "I'll tell you how great they are after I nap for a bit."
    },
    {
        "thumbnail_url": "https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
        "url": "https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2760&q=80",
        "default_price": "65.00",
        "name": "Slacker's Slacks",
        "description": "I'll tell you how great they are after I nap for a bit."
    },
    {
        "thumbnail_url": "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
        "url": "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80",
        "default_price": "65.00",
        "name": "Slacker's Slacks",
        "description": "I'll tell you how great they are after I nap for a bit."
    },
    {
        "thumbnail_url": "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
        "url": "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
        "default_price": "65.00",
        "name": "Slacker's Slacks",
        "description": "I'll tell you how great they are after I nap for a bit."
    },
    {
        "thumbnail_url": "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
        "url": "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80",
        "default_price": "65.00",
        "name": "Slacker's Slacks",
        "description": "I'll tell you how great they are after I nap for a bit."
    }
];

// const clickHandler = () => {
//   return (
//     <a>href=</a>
//   )
// }


    const cards = photo.map((card) =>

      <div className="carousel-item rounded-box  w-3/4">
          <div className="card w-96 bg-base-100 shadow-xl">

          <figure className="relative w-full h-full">
            <img className="w-full h-full" src={card.thumbnail_url}/>
            <label htmlFor="my-modal-4" className = 'absolute top-2 right-0 btn-circle '><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg></label>  </figure>
            <div className="card-body">
              <h2 className="card-title">{card.name}</h2>
              <p>{card.description}</p>
              <p>{card.default_price}</p>
            </div>
          </div>
      </div>
    );

    return (
      <>{cards}</>
    )


}

export default RelatedCard;


