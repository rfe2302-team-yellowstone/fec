import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './app.jsx';
import axios from 'axios'
import { store } from './app/store';
import { Provider } from 'react-redux';

const root = createRoot(
  document.getElementById('root')
);


axios.get('http://localhost:3000/products/37311')
  .then(response => {
    root.render(
      <Provider store={store}>
        <App initialProduct={response.data} onClick={e => console.log('test')}/>
      </Provider>
    );
  })
  .catch(error => {
    console.log(error)
  })


// root.render(<App />);