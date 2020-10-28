import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';

import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ["Inter:regular,500,600,700,800","Roboto Mono:regular,500,600,700"]
  }
});

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
