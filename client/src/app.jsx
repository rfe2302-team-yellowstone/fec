import React from "react";
import { useState, useEffect, useLayoutEffect, useRef } from "react";
import { useSelector, useDispatch } from 'react-redux';
import Related from "./related/related_outfit.jsx";
import Overview from "./overview/index.jsx";
import Ratings from "./ratings/Ratings.jsx";
import QAndA from "./q&a/qa.jsx";
import Header from "./overview/components/header/Header.jsx";
import axios from 'axios';
import { trackClick } from './features/click-tracker/clickTrackerSlice';
import { trackModule } from './features/module-tracker/moduleTrackerSlice';

const App = ({initialProduct}) => {
  const [cart, setCart] = useState([]);
  const [cartLength, setCartLength] = useState(0);
  const [product, setProduct] = useState(initialProduct);
  const dispatch = useDispatch();
  const module = useSelector(state => state.moduleTracker);
  const ModuleRef = useRef(module);
  ModuleRef.current = module;

  const quickLinks = {
    'Overview': '#overview',
    'Related Items':'#related-items',
    'Ratings':'#ratings',
    'Q&A':'#qa',
  };

  const [headerHeight, setHeaderHeight] = useState(0);

  const calculateHeaderHeight = () => {
    const headerElement = document.getElementById('header');
    const headerRect = headerElement.getBoundingClientRect();
    const headerHt = headerRect.height;

    setHeaderHeight(-1 * headerHt.toFixed(3));
  }

  useEffect(() => {
    window.addEventListener('click', e => {
      dispatch(trackClick({
        elementClicked: e.target.outerHTML,
        timeOfClick: (new Date()).toString(),
        moduleClicked: ModuleRef.current
      }))
    })
  }, []);

  const updateProduct = (productID) => {
    productID = productID || 37311

    axios.get(`/products/${productID}`)
      .then(res => {
        let data = res.data

        if (Object.keys(data).length === 0) { return; }
        setProduct(data)
      })
      .catch(error => {
        console.log(error)
      })
  };

  const handleSearch = (event) => {
    var key = event.which && event.which || event.keyCode();
    let productID = event.target.value || 37311

    if (key !== 13) return;

    updateProduct(productID);
  };

  return (
    <div>
      <Header quickLinks={quickLinks} handleSearch={handleSearch} calculateHeaderHeight={calculateHeaderHeight} cartLength={cartLength}/>
      <Overview cartLength={cartLength} setCartLength={setCartLength} product={product} onMouseOver={e => dispatch(trackModule('overview'))} headerHeight={headerHeight}/>
      <Related product={product} onMouseOver={e => dispatch(trackModule('related'))} updateProduct={updateProduct} headerHeight={headerHeight}/>
      <Ratings product={product} onMouseOver={e => dispatch(trackModule('ratings'))} headerHeight={headerHeight}/>
      <QAndA product={product} onMouseOver={e => dispatch(trackModule('qa'))}/>
    </div>
  );
};

export default App;