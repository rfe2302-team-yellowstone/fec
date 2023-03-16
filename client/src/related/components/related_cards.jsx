
import React from 'react';
import ReactDOM from "react-dom";


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
]


    const cards = photo.map((card) =>

      <div className="carousel-item rounded-box  w-3/4">
          <div className="card w-96 bg-base-100 shadow-xl">
          <figure><img src={card.thumbnail_url}  /></figure>
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








  // return (

  //   <div className="card w-96 bg-base-100 shadow-xl">
  //     <figure><img src="https://images.unsplash.com/photo-1554260570-9140fd3b7614?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"  /></figure>
  //     <div className="card-body">
  //       <h2 className="card-title">Pants!</h2>
  //       <p>If your date bails, you still look fresh!</p>
  //     </div>
  //   </div>
  // )