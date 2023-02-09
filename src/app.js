import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import * as Devign from 'devigner';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './pages/home';
import Browse from './pages/browse';
import SignIn from './pages/signin';
import * as ROUTES from './constants/routes';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';
import { useAuthListener } from './hooks';
import './tokens.css';

export function App() {
  const { user } = useAuthListener();

  return (
    <Router>
      <Devign.Ghostbox getPhantom={(filename) => import(/* webpackInclude: /\.jsx$/ */ `./.mightymeld/${filename}`)}>
        <Switch>
          <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_IN}>
            <SignIn />
          </IsUserRedirect>
          <ProtectedRoute user={user} path={ROUTES.BROWSE}>
            <Browse />
          </ProtectedRoute>
          <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.HOME}>
            <Home />
          </IsUserRedirect>
        </Switch>
      </Devign.Ghostbox>
    </Router>
  );
}
