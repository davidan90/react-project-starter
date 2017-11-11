import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

//Components
import App from './app.component';

// Services
import { reduxService } from './services/redux';

ReactDOM.render(
    <Provider store={reduxService.store}>
        <App />
    </Provider>, 
    document.getElementById('app-root')
);
