/**
* Index.js class imports LineChart. js component which tells React where to render.
* version- 1.0
* author- V.Vishnu Priya(12-07-2020)
**/
import React from 'react';
import ReactDOM from 'react-dom';
import LineChart from './LineChart';

ReactDOM.render(
  <LineChart elementWidth={600} elementHeight={270} />,
  document.getElementById('root')
);
