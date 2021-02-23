import { combineReducers } from '@reduxjs/toolkit';

import charactersReducer from '../store/characters/slice';

const rootReducer = combineReducers({
  characters: charactersReducer,

});

export type ReduxState = ReturnType<typeof rootReducer>;
export default rootReducer;
