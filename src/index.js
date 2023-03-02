import React from 'react';
import ReactDOM from 'react-dom/client'; //glue of React for desktop web apps
import './index.css';
//import Card from './Card.js';
import CardList from './CardList'
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import { robots } from './Robots'; //Non-default js components must be destruct

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <CardList robots = {robots}/>
  </div>
    
);

reportWebVitals();
