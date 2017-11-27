import { combineReducers } from 'redux';

import app from './app.reducer';

export const all = combineReducers({
    app,
});