import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import Ratings from "./ratings/Ratings.jsx";
import axios from 'axios';


const App = ({product}) => {
// test

const [product, setProduct] = useState(product)

const updateProduct = () => {
  // handles clicks on new products
}

  return (
    <div>
      <h1 className="text-3xl font-bold"> Hello, World!</h1>

      {/* < Overview /> */}
      {/* < Related /> */}
      <Ratings product={product}>Ratings</Ratings>
      {/* < Questions&Answers /> */}
    </div>
  )

};

export default App;