import { combineReducers } from 'redux';

import example from './example.reducer';
import app from './app.reducer';

export const all = combineReducers({
    app,
    example,
});