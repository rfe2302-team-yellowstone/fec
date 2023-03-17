
import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import axios from 'axios';

const ReviewsList = ({products}) => {

 const [selectedProduct, setSelectedProduct] = useState(null)
 const [ids, setIds] = useState([])
//  const [currentProducts, setCurrentProducts] = useState(products)
const clickHandler = (e) => {
  console.log(e.target.value)
  setSelectedProduct(e.target.value)
}

  return (
    <div>
      <h1>Reviews</h1>
      <ul>
      TEST
        {products.map((product) => {
          return ( <li  key={product.id} onClick={clickHandler}>{product.name}</li> )
        })}
      </ul>
        {/* {selectedProduct && } */}
    </div>
  )
}

export default ReviewsList