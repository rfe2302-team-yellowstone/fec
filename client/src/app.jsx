import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom";
import Related from "./related/components/related_widget.jsx"
import Overview from "./overview/index.jsx"
import Ratings from "./ratings/Ratings.jsx";
import QAndA from "./q&a/qa.jsx";



const App = ({initialProduct}) => {
// test

  const [cart, setCart] = useState([])
  const [product, setProduct] = useState(initialProduct)

  const updateProduct = () => {
    // handles clicks on new products
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-40"> Hello, World!</h1>

      <Overview cart={cart} product={product}/>
      < Related />
      <Ratings product={product}>Ratings</Ratings>
      <QAndA product={product}/>
    </div>
  )

};

export default App;