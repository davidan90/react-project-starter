import { combineReducers } from 'redux';

import { example } from './example.reducer';

export const all = combineReducers({
    example,
});