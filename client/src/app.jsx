<<<<<<< HEAD
import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom";
//import Overview from "./overview/...."
import Related from "./related/components/related_widget.jsx"
// import Overview from "./overview/index.jsx"
//import Related from "./related/...."
//import Ratings from "./ratings/...."
//import Questions&Answers from "./q&a/...."
=======
import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import Ratings from "./ratings/Ratings.jsx";
import axios from 'axios';
>>>>>>> b5d9f97 (Set up ratings architecture, edits to app.jsx and index.jsx)


const App = ({product}) => {
// test

<<<<<<< HEAD
  const [cart, setCart] = useState([])
=======
const [product, setProduct] = useState(product)

const updateProduct = () => {
  // handles clicks on new products
}
>>>>>>> b5d9f97 (Set up ratings architecture, edits to app.jsx and index.jsx)

  return (
    <div>
      <h1 className="text-3xl font-bold"> Hello, World!</h1>

      {/* < Overview /> */}
      < Related />
      {/* <Overview cart={cart}/>*/ }
      {/* < Related /> */}
      <Ratings product={product}>Ratings</Ratings>
      {/* < Questions&Answers /> */}
    </div>
  )

};

export default App;