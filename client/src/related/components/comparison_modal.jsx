import React, {useState, useEffect} from 'react';
import ReactDOM from "react-dom";



const ComparisonModal = ({openModal, setOpenModal, product, relatedItems, comparedProduct}) =>{
  let initialProductFeatures = product.features;

  initialProductFeatures.forEach(feature => {
    feature.productName = product.name;
  });

  const [features, setFeatures] = useState([])

  const modalHandler = () => {
    setOpenModal(!openModal)
  };

  useEffect (() => {
    let combiningFeatures = initialProductFeatures;

    if(comparedProduct === '') {
      setFeatures(combiningFeatures);
    } else {
      let cpFeatures = comparedProduct.features;
      cpFeatures.forEach(feature => {
        feature.productName = comparedProduct.name;
      });
      combiningFeatures= combiningFeatures.concat(cpFeatures);

      setFeatures(combiningFeatures);
    }

  },[comparedProduct]);



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
               {features.filter(feature => feature.value !==null).map((feature, index) => {
                return (
                <tr key={index}>
                  <th>{feature.productName === product.name ? <input type="checkbox" checked="checked" className="checkbox" /> : null}</th>
                  <th>{feature.feature + ':' + feature.value}</th>
                  <th>{feature.productName === comparedProduct.name ? <input type="checkbox" checked="checked" className="checkbox" />:null}</th>
                </tr>
                )
              })}
            </tbody>
          </table>
          </div>
        </div>
      </div>

  )
};

export default ComparisonModal;

