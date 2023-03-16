import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom";
//import Overview from "./overview/...."
import Related from "./related/components/related_widget.jsx"
import Overview from "./overview/index.jsx"
//import Related from "./related/...."
//import Ratings from "./ratings/...."
//import Questions&Answers from "./q&a/...."

const App = () => {
// test

  const [cart, setCart] = useState([])

  return (
    <div>
      <h1 className="text-3xl font-bold"> Hello, World!</h1>

      <Overview cart={cart}/>
      < Related />
      {/* <Overview cart={cart}/>*/ }
      {/* < Ratings /> */}
      {/* < Questions&Answers /> */}
    </div>
  )

};

export default App;