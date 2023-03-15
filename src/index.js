import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import 'remixicon/fonts/remixicon.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ToastContainer 
      theme='dark'
      position='bottom-left'
      autoClose={1000}
      closeOnClick
      pauseOnHover={false}
    />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
