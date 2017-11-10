import { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { object } from 'prop-types'

// Constants
import { CONTAINERS } from './constants';

// Components
import { NavbarComponent, SectionComponent, FooterComponent } from './components';

// Services
import { AppActions } from './services/redux/actions';

// Styles css and scss
import './main.scss';

export default class App extends Component {

    static contextTypes = {
        store: object,
    };
    
    componentDidMount() {
        window.addEventListener('resize', this._onResize.bind(this));
    }

    _onResize() {
        const {store} = this.context;
        const width = window.innerWidth;
        store.dispatch(AppActions.setDevice(width));
    }

    render() {
        return (
            <div id="my-app">
                <Router>
                    <div className="container">
                        <NavbarComponent links={CONTAINERS} />
                        <SectionComponent sections={CONTAINERS} />
                        <FooterComponent />
                    </div>
                </Router>
            </div>
        );
    }
}