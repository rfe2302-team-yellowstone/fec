import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom";
import Related from "./related/components/related_widget.jsx"
// import Overview from "./overview/index.jsx"
import Ratings from "./ratings/Ratings.jsx";
//import Questions&Answers from "./q&a/...."



const App = ({initialProduct}) => {
// test

  const [cart, setCart] = useState([])
  const [product, setProduct] = useState(initialProduct)

  const updateProduct = () => {
    // handles clicks on new products
  }

  return (
    <div>
      <h1 className="text-3xl font-bold"> Hello, World!</h1>

      {/* <Overview cart={cart}/> */}
      < Related product={product}/>
      <Ratings product={product}>Ratings</Ratings>
      {/* < Questions&Answers /> */}
    </div>
  )

};

export default App;