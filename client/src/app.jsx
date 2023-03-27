import React from "react";
import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from 'react-redux';
import Related from "./related/related_outfit.jsx"
import Overview from "./overview/index.jsx"
import Ratings from "./ratings/Ratings.jsx";
import QAndA from "./q&a/qa.jsx";
import axios from 'axios'
import { trackClick } from './features/click-tracker/clickTrackerSlice';
import { trackModule } from './features/module-tracker/moduleTrackerSlice';

const App = ({initialProduct}) => {
// test

  const [cart, setCart] = useState([])
  const [product, setProduct] = useState(initialProduct)
  const dispatch = useDispatch();
  const module = useSelector(state => state.moduleTracker);
  const ModuleRef = useRef(module);
  ModuleRef.current = module;

  useEffect(() => {
    window.addEventListener('click', e => {
      // console.log(e.target);
      dispatch(trackClick({
        elementClicked: e.target.outerHTML,
        timeOfClick: (new Date()).toString(),
        moduleClicked: ModuleRef.current
      }))
    })
  }, []);

  const updateProduct = (productID) => {
    // handles clicks on new products

    productID = productID || 37311

    axios.get(`http://localhost:3000/products/${productID}`)
      .then(res => {
        let data = res.data

        if (Object.keys(data).length === 0) { return; }
        setProduct(data)
      })
      .catch(error => {
        console.log(error)
      })

  }

  const handleSearch = (event) => {

    // Get the key which was pressed
    var key = event.which && event.which || event.keyCode();

    // Enter key is 13. Return if any other key.
    if (key !== 13) {return;}

    // Get productID from search window
    let productID = event.target.value || 37311

    updateProduct(productID)
  }



  return (
    <div>
      {/* <h1 className="text-3xl font-bold mb-40"> Hello, World!</h1> */}

      <Overview cart={cart} product={product} handleSearch={handleSearch}/>
      <Related product={product}/>
      <Ratings product={product}></Ratings>
      <QAndA product={product}/>
    </div>
  )

};

export default App;