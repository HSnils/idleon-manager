import React, { lazy, Suspense } from 'react';
import {
  BrowserRouter, Redirect, Route, Switch,
} from 'react-router-dom';

import packageJson from '../../package.json';

export const OldApp = lazy(() => import('../pages/example/oldapp'));
export const Landingpage = lazy(() => import('../pages/Landingpage'));

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
        path="/old"
        render={() => (
          <Suspense fallback={<LoadingFallback />}>
            <OldApp />
          </Suspense>
        )}
      />
      <Route component={NoMatch} />
    </Switch>
  </BrowserRouter>
);

export default Router;
