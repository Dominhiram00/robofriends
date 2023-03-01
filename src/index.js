import React from 'react';
import ReactDOM from 'react-dom/client'; //glue of React for desktop web apps
import './index.css';
import Card from './Card.js';
import reportWebVitals from './reportWebVitals';
import 'tachyons';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Card> </Card>
  </React.StrictMode> 
);

reportWebVitals();
