import React from 'react';
import { render } from 'react-dom';
import 'normalize.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import * as Devign from 'devigner';
import { GlobalStyles } from './global-styles';
import { App } from './app';
import { auth } from './lib/auth';
import { AuthContext } from './context/auth';

Devign.init();

render(
  <React.StrictMode>
    <AuthContext.Provider value={{ auth }}>
      <GlobalStyles />
      <Devign.Ghostbox getPhantom={(branch, phantom) => import(`./.devign/${branch}/phantoms/${phantom}.jsx`)}>
        <App />
      </Devign.Ghostbox>
    </AuthContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
