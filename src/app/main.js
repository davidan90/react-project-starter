import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

//Components
import App from './app.component';

// Services
import { reduxService } from './services/redux';

const store = createStore(
    reduxService.reducers.all,
    (localStorage['redux-store']) ? JSON.parse(localStorage['redux-store']) : {},
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe( () => {
    localStorage['redux-store'] = JSON.stringify(store.getState());
});

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('app-root')
);
