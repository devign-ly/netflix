import React from 'react';
import loadable from '@loadable/component';
import { render } from 'react-dom';
import 'normalize.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import * as Devign from 'devigner';
import { GlobalStyles } from './global-styles';
import { App } from './app';
import { auth } from './lib/auth';
import { AuthContext } from './context/auth';

Devign.init();

const phantomBase = `./phantoms/`;

const Ghostbox = ({children}) => {
	const params = new URLSearchParams(window.location.search);
	const phantom = params.get('phantom');

	if (phantom) {
		// TODO: figure out a way to read devign.json, if the user sets
		//       phantom_dir then we want to use that instead
    const ComponentObj = loadable(() => import(`${phantomBase}${phantom}.js`));
    return <ComponentObj/>;
	}
	return  children;
};

render(
  <React.StrictMode>
    <AuthContext.Provider value={{ auth }}>
      <GlobalStyles/>
      <Ghostbox>
      <App />
      </Ghostbox>
    </AuthContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
