import { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// Constants
import { CONTAINERS } from './constants';

// Services
import { routerService } from './services/router';
import { reduxService } from './services/redux';

// Components
import { NavbarComponent, SectionComponent } from './components';

// Styles css and scss
import './index.scss';

const store = createStore(
    reduxService.reducers.all,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends Component {
    render() {
        return (
            <div id="my-app">
                <Router>
                    <div className="container">
                        <NavbarComponent links={CONTAINERS} />
                        <SectionComponent sections={CONTAINERS} />
                    </div>
                </Router>
            </div>
        );
    }
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('app-root')
);

routerService();
