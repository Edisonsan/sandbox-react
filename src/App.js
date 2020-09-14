import React from 'react';
import './App.css';

import { nullish } from './code/nullish';

export const App = () => {
  return (
    <div className='App'>
      <p>{nullish().providerCountry}</p>
      <p>{nullish().nullish}</p>
      <p>{nullish().providerAddress}</p>
      <p>{nullish().providerOrders}</p>
      <p>{nullish().providerNotDefined}</p>
    </div>
  );
};

export default App;
