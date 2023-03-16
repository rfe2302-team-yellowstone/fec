import React from "react";
import ReactDOM from "react-dom";
//import Overview from "./overview/...."
import Related from "./related/components/related_widget.jsx"
//import Ratings from "./ratings/...."
//import Questions&Answers from "./q&a/...."

const App = () => {
// test

  return (
    <div>
      <h1 className="text-3xl font-bold"> Hello, World!</h1>

      {/* < Overview /> */}
      < Related />
      {/* < Ratings /> */}
      {/* < Questions&Answers /> */}
    </div>
  )

};

export default App;