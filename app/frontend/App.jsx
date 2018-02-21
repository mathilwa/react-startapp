import React from 'react';
import 'babel-polyfill';
import { polyfill } from 'es6-promise';
import Hei from './Hei.jsx';
polyfill();

const App = () => {
  return <Hei/>
};

export default App;
