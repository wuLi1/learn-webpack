import './css/style.css';
import './css/style1.css';
import './css/blue.scss';
import React from 'react';
import { render } from 'react-dom';
import Hello from './hello';


render(<Hello></Hello>, document.getElementById("root"));
// const hello = require('./hello.js');
// document.querySelector("#root").appendChild(hello());
