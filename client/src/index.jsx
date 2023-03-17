import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './app.jsx';
import axios from 'axios'

const root = createRoot(
  document.getElementById('root')
);



axios.get('http://localhost:3000/products/37311')
  .then(response => {
    root.render(<App product={response.data} />);
  })
  .catch(error => {
    console.log(error)
  })


// root.render(<App />);