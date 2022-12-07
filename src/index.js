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

const Ghostbox = ({ children }) => {
  const params = new URLSearchParams(window.location.search);
  const branchName = params.get('phantomBranch');
  const phantomName = params.get('phantomName');

  if (branchName && phantomName) {
    const Phantom = import(`../.devign/${branchName}/phantoms/${phantomName}.jsx`);
    console.log('Phantom', Phantom);
    return <Phantom />;
  }
  return children;

  /*
	if (phantom) {
		// TODO: figure out a way to read devign.json, if the user sets
		//       phantom_dir then we want to use that instead (worst case we can pass it in as url param)
    // XXX: change "jsx" to "js" and watch it break the project, because tests can no longer
    //      resolve "../../components"  ... yup, seriously. even if no one uses ComponetObj!
    // XXX: this also triggers the weird "../../components" error https://www.notion.so/devignly/trying-to-get-Ghostbox-to-pass-a-function-36df73fef60546e0b21ad2291a1cabe3#97fcbf32a53f4430b97e7a55b5b11372
    const ComponentObj = loadable(() => import(`${phantomBase}${phantom}.jsx`));
    return <ComponentObj/>;
	}
	return  children;
  */
};

render(
  <React.StrictMode>
    <AuthContext.Provider value={{ auth }}>
      <GlobalStyles />
      <Ghostbox>
        <App />
      </Ghostbox>
    </AuthContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
