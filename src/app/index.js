import React from 'react';
import ReactDOM from 'react-dom';
import { NavbarComponent } from './components';

import './index.scss';

const app = (
    <div id="my-app">
        <NavbarComponent />
    </div>
);

ReactDOM.render(app, document.getElementById('app-root'));