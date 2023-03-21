import React from 'react';
import ReactDOM from "react-dom";


const ComparisonModal = ({openModal, setOpenModal, product, relatedItems, comparedProduct}) =>{
  const modalHandler = () => {
    console.log('Click! inside modal component');
    setOpenModal(!openModal)
  }
  //console.log(comparedProduct)


  return (
    <div className={`modal ${openModal ? 'modal-open': ''}`}>
        <div className="modal-box relative cursor-pointer" htmlFor="">
        <button onClick={modalHandler} htmlFor="my-modal-4" className="btn btn-sm btn-circle absolute right-2 top-2">✕</button>
          <h3 className="text-lg font-bold">Features!</h3>
          <div className="overflow-y-auto">
          <table className="table table-compact w-full">
            <thead>
              <tr>
                <th>{product.name}</th>

                <th>Features</th>

                <th>{comparedProduct.name}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>True</th>
                <th>Are they wearable?</th>
                <th>True</th>
              </tr>
              <tr>
                <th>True</th>
                <th>Military grade camo</th>
                <th>False</th>
              </tr>
              <tr>
                <th>False</th>
                <th>UV Protection</th>
                <th>True</th>
              </tr>
              <tr>
                <th>True</th>
                <th>Will they have you looking fresh?</th>
                <th>True</th>
              </tr>
            </tbody>
          </table>
          </div>
        </div>
      </div>

  )
}

export default ComparisonModal;

