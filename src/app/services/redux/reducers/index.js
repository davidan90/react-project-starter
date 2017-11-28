import { combineReducers } from 'redux';

import app from './app.reducer';
import login from './login.reducer';

export const all = combineReducers({
    app,
    login,
});