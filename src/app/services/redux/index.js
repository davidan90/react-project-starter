import { createStore } from 'redux';

import * as actions from './actions';
import * as reducers from './reducers';

const getStore = () => {
    const store = createStore(
        reducers.all,
        (localStorage['redux-store']) ? JSON.parse(localStorage['redux-store']) : {},
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    
    store.subscribe( () => {
        localStorage['redux-store'] = JSON.stringify(store.getState());
    });

    return store;
}

const select= () => {
    /* TODO get observable property */
}

const store = getStore();

export const reduxService = {
    actions,
    reducers,
    store,
};
