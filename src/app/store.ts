import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

// eslint-disable-next-line import/extensions
import rootReducer from './rootReducer';

const middleware = [...getDefaultMiddleware({ thunk: false })];

const store = configureStore({
  reducer: rootReducer,
  middleware,
});

export default store;
