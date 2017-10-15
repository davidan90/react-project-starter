import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router } from 'react-router-dom';

// Constants
import { CONTAINERS } from './constants';

// Services
import routerService from './services';

// Components
import { NavbarComponent, SectionComponent } from './components';

// Styles
import './index.scss';

const app = (
    <div id="my-app">
        <Router>
            <div>
                <NavbarComponent links={ CONTAINERS } />
                <SectionComponent sections={ CONTAINERS } />
            </div>
        </Router>
    </div>
);

ReactDOM.render(app, document.getElementById('app-root'));
routerService();
