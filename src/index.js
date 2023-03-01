import React from 'react';
import { render } from 'react-dom';
import 'normalize.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import * as MightyMeld from 'mightymeld';
import { GlobalStyles } from './global-styles';
import { App } from './app';
import { auth } from './lib/auth';
import { AuthContext } from './context/auth';

MightyMeld.init();

render(
  <React.StrictMode>
    <AuthContext.Provider value={{ auth }}>
      <GlobalStyles />
      <App />
    </AuthContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
