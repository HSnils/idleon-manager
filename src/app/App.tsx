import React, { Fragment } from 'react';
import './App.css';
import { Provider as ReduxProvider } from 'react-redux';
import store from './store';
import Router from '../router';

const App = () => (
  <ReduxProvider store={store}>
    <Fragment>
      <Router />
    </Fragment>
  </ReduxProvider>
);

export default App;
