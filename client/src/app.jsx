import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom";
import Overview from "./overview/index.jsx"
//import Related from "./related/...."
//import Ratings from "./ratings/...."
//import Questions&Answers from "./q&a/...."

const App = () => {


  const [cart, setCart] = useState([])

  return (
    <div>
      <h1> Hello, World!</h1>

      <Overview cart={cart}/>
      {/* < Related /> */}
      {/* < Ratings /> */}
      {/* < Questions&Answers /> */}
    </div>

  )

};

export default App;