import React, { lazy, Suspense } from 'react';
import {
  BrowserRouter, Redirect, Route, Switch,
} from 'react-router-dom';

import packageJson from '../../package.json';

export const Landingpage = lazy(() => import('../pages/Landingpage'));
export const CharacterUpdate = lazy(() => import('../pages/CharacterUpdate'));

const NoMatch = () => <Redirect to="/" />;

const LoadingFallback = () => <div>Loading...</div>;

const Router = (): React.ReactElement => (
  <BrowserRouter basename={packageJson.publicPath}>
    <Switch>
      <Route
        exact
        path="/"
        render={() => (
          <Suspense fallback={<LoadingFallback />}>
            <Landingpage />
          </Suspense>
        )}
      />
      <Route
        exact
        path="/add"
        render={() => (
          <Suspense fallback={<LoadingFallback />}>
            <CharacterUpdate />
          </Suspense>
        )}
      />
      <Route
        exact
        path="/edit/:characterName"
        render={() => (
          <Suspense fallback={<LoadingFallback />}>
            <CharacterUpdate />
          </Suspense>
        )}
      />
      <Route component={NoMatch} />
    </Switch>
  </BrowserRouter>
);

export default Router;
