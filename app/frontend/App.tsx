import React from 'react';
import 'babel-polyfill';
import { polyfill } from 'es6-promise';
import Hei from './Hei';
polyfill();

const App = () => <Hei />;

export default App;
