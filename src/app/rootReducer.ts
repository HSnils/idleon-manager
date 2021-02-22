import { combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({

});

export type ReduxState = ReturnType<typeof rootReducer>;
export default rootReducer;
