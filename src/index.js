import React from 'react';
import ReactDOM from 'react-dom/client'; //glue of React for desktop web apps
import './index.css';
import Card from './Card.js';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import { robots } from './Robots'; //Non-default js components must be destruct

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Card id = {robots[0].id} name ={robots[0].name} email={robots[0].email}> </Card>
    <Card id = {robots[1].id} name ={robots[1].name} email={robots[1].email}> </Card>
    <Card id = {robots[2].id} name ={robots[2].name} email={robots[2].email}> </Card>s
  </div>
    
);

reportWebVitals();
