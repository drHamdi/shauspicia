import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import TagManager from 'react-gtm-module/dist/TagManager';


const tagManagerArgs = {
  gtmId: 'AW-16721092148', // Replace with your GTM ID
};

TagManager.initialize(tagManagerArgs);



ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);


