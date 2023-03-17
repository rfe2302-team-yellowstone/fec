import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './app.jsx';
import axios from 'axios'

const root = createRoot(
  document.getElementById('root')
);

const API_KEY = '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'

axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/37311', {
    headers: {
      Authorization: API_KEY
    }
  })
  .then(response => {
    root.render(<App product={response.data} />);
  })
  .catch(error => {
    console.log(error)
  })


// root.render(<App />);