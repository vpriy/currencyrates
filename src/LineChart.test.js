/**
* LineChart.test.js class is the mock test class for the Application.
* version- 1.0
* author- V.Vishnu Priya(12-07-2020)
**/
import React from 'react';
import ReactDOM from 'react-dom';
import App from './LineChart';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
