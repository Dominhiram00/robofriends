import React from 'react';
import ReactDOM from 'react-dom/client'; //glue of React for desktop web apps
import './index.css';
//import Card from './Card.js';
import App from './containers/App'
import reportWebVitals from './reportWebVitals';
import 'tachyons';
//import { robots } from './Robots'; //Non-default js components must be destruct

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <App/>
  </div>
    
);

reportWebVitals();
